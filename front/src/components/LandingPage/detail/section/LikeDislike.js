import React, { useEffect, useState } from "react";
import { Button, message } from "antd";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { likeRegister } from "../../../../__redux/user_action";

function LikeDislike(props) {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const [Likes, setLikes] = useState(0);
  const [Disikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(false);
  const [DislikeAction, setDislikeAction] = useState(false);

  const variable = { postId: props.postId, commentId: props.commentId };
  console.log(LikeAction);

  useEffect(() => {
    axios.post("/api/likedislike/getlikes", variable).then((res) => {
      if (res.data.try) {
        setLikes(res.data.doc.length);
        if (localStorage.length !== 0) {
          for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === props.postId) {
              setLikeAction(true);
            }
          }
        }

        // let prevLocal = localStorage.getItem("postId");
        // if (prevLocal !== null) {

        // const postIds = JSON.parse(prevLocal);

        // postIds.forEach((value) => {
        //   if (value === props.postId) {
        //     setLikeAction(true);
        //   }
        // });
        // }
      } else {
        message.error("좋아요 개수 불러오는거에 실패했습니다");
      }
    });
  }, []);

  const onLike = () => {
    // 좋아요 누르지 않은 경우
    if (!LikeAction) {
      axios.post("/api/likedislike/uplike", variable).then((res) => {
        if (res.data.try) {
          // dispatch(likeRegister(props.postId));

          localStorage.setItem(`${props.postId}`, "");

          setLikes(Likes + 1);
          setLikeAction(true);
          message.info("Like Up !");
        } else {
          message.error("좋아요 실패했습니다");
        }
      });

      // 좋아요 누르지 않았지만, 싫어요가 눌러져있는 경우
    }
  };
  const onDislike = () => {};

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
        싫어요
      </Button>
    </div>
  );
}

export default LikeDislike;
