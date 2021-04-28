import React, { useEffect, useState } from "react";
import { Button, message } from "antd";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { likeRegister } from "../../../../__redux/user_action";

function LikeDislike(props) {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(false);
  const [DislikeAction, setDislikeAction] = useState(false);

  const variable = { postId: props.postId, commentId: props.commentId };
  console.log(LikeAction);

  const handleLikeStorage = () => {
    const postId = localStorage.getItem("postId");
    if (postId !== null) {
      let parsed = JSON.parse(postId);
      const judge = parsed.every((value) => value !== props.postId);
      // 같은게 없다면 추가
      if (judge) {
        const array = [...parsed, props.postId];
        localStorage.setItem("postId", JSON.stringify(array));
      } else {
        // 같은게 있다면 삭제
        parsed = parsed.filter((value) => value !== props.postId);
        localStorage.setItem("postId", JSON.stringify(parsed));
      }
    } else {
      localStorage.setItem("postId", JSON.stringify([props.postId]));
    }
  };

  const handleDislikeStorage = () => {
    const postId = localStorage.getItem("post-Dislike");
    if (postId !== null) {
      let parsed = JSON.parse(postId);
      const judge = parsed.every((value) => value !== props.postId);
      if (judge) {
        const array = [...parsed, props.postId];
        localStorage.setItem("post-Dislike", JSON.stringify(array));
      } else {
        // 같은게 있다면 삭제
        parsed = parsed.filter((value) => value !== props.postId);
        localStorage.setItem("post-Dislike", JSON.stringify(parsed));
      }
    } else {
      localStorage.setItem("post-Dislike", JSON.stringify([props.postId]));
    }
  };
  useEffect(() => {
    axios.post("/api/likedislike/getlikes", variable).then((res) => {
      if (res.data.try) {
        setLikes(res.data.doc.length);
        // if (localStorage.length !== 0) {
        //   for (var i = 0; i < localStorage.length; i++) {
        //     if (localStorage.key(i) === props.postId) {
        //       setLikeAction(true);
        //     }
        //   }
        // }

        let prevLocal = localStorage.getItem("postId");
        if (prevLocal !== null) {
          //문자열 -> 배열화
          const postIds = JSON.parse(prevLocal);

          postIds.forEach((value) => {
            if (value === props.postId) {
              setLikeAction(true);
            }
          });
        }
      } else {
        message.error("좋아요 개수 불러오는거에 실패했습니다");
      }
    });

    axios.post("/api/likedislike/getDislikes", variable).then((res) => {
      if (res.data.try) {
        setDislikes(res.data.doc.length);
        let prevLocal = localStorage.getItem("post-Dislike");
        if (prevLocal !== null) {
          //문자열 -> 배열화
          const postIds = JSON.parse(prevLocal);

          postIds.forEach((value) => {
            if (value === props.postId) {
              setDislikeAction(true);
            }
          });
        }
      } else {
        message.error("싫어요 개수 불러오는거에 실패했습니다");
      }
    });
  }, []);

  const onLike = () => {
    // 좋아요 누르지 않은 경우(좋아요 등록)
    if (!LikeAction) {
      //-1 근데, 싫어요가 눌러져 있는 경우
      if (DislikeAction) {
        axios.post("/api/likedislike/unDislike", variable);
        handleDislikeStorage();
        setDislikes(Dislikes - 1);
        setDislikeAction(false);
      }

      //-2 그냥, 좋아요가 눌러져 있지 않은 경우
      axios.post("/api/likedislike/uplike", variable).then((res) => {
        if (res.data.try) {
          // dispatch(likeRegister(props.postId));
          handleLikeStorage();

          setLikes(Likes + 1);
          setLikeAction(true);
          message.info("Like Up !");
        } else {
          message.error("좋아요 실패했습니다");
        }
      });
    } else {
      //좋아요 눌러져 있는 경우(좋아요 취소)
      axios.post("/api/likedislike/unlike", variable).then((res) => {
        if (res.data.try) {
          handleLikeStorage();
          setLikes(Likes - 1);
          setLikeAction(false);
          message.info("Like down !");
        } else {
          message.error("좋아요 취소 실패했습니다");
        }
      });
    }
  };

  const onDislike = () => {
    // 싫어요 누르지 않은 경우(싫어요 등록)
    if (!DislikeAction) {
      //-1 근데, 좋아요가 눌러져 있는 경우
      if (LikeAction) {
        axios.post("/api/likedislike/unlike", variable);
        handleLikeStorage();
        setLikes(Likes - 1);
        setLikeAction(false);
      }
      //-2 그냥, 싫어요가 눌러져 있지 않은 경우
      axios.post("/api/likedislike/upDislike", variable).then((res) => {
        if (res.data.try) {
          handleDislikeStorage();
          setDislikes(Dislikes + 1);
          setDislikeAction(true);
          message.info("Dislike Up !");
        } else {
          message.error("싫어요 실패했습니다");
        }
      });
    } else {
      //싫어요 눌러져 있는 경우(싫어요 취소)
      axios.post("/api/likedislike/unDislike", variable).then((res) => {
        if (res.data.try) {
          handleDislikeStorage();
          setDislikes(Dislikes - 1);
          setDislikeAction(false);
          message.info("Dislike down !");
        } else {
          message.error("좋아요 취소 실패했습니다");
        }
      });
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
      <Button
        title="좋아요"
        onClick={onLike}
        type={LikeAction ? "primary" : ""}
      >
        좋아요 {Likes}
      </Button>
      <Button
        title="싫어요"
        onClick={onDislike}
        type={DislikeAction ? "primary" : ""}
      >
        싫어요 {Dislikes}
      </Button>
    </div>
  );
}

export default LikeDislike;
