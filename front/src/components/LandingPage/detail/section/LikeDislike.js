import React, { useEffect, useState } from "react";
import { Button, message } from "antd";
import axios from "axios";

function LikeDislike(props) {
  const [Likes, setLikes] = useState(0);
  const [Disikes, setDislikes] = useState(0);
  const [LikeAction, setLikesAction] = useState(false);
  const [DislikeAction, setDislikeAction] = useState(false);

  //commentId도 추가할 것
  const variable = { postId: props.postId, commentId: props.commentId };

  useEffect(() => {
    axios.post("/api/post/LikesDislikes", variable).then((res) => {
      if (res.data.try) {
      } else {
        message.error("좋아요 개수 불러오는거에 실패했습니다");
      }
    });
  }, []);

  const onLike = () => {
    if (!LikeAction) {
      setLikes(Likes + 1);
      setLikesAction(!LikeAction);
    }
  };
  const onDislike = () => {};

  return (
    <div style={{ display: "inline-block", background: "rgb(190, 200, 200)" }}>
      <Button
        ghost
        title="좋아요"
        onClick={onLike}
        theme={LikeAction ? "primary" : ""}
      >
        좋아요
      </Button>
      <Button
        ghost
        title="싫어요"
        onClick={onDislike}
        theme={DislikeAction ? "primary" : ""}
      >
        싫어요
      </Button>
    </div>
  );
}

export default LikeDislike;
