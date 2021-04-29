import React, { useState } from "react";
import { Comment, Button, Tooltip, message } from "antd";
import moment from "moment";
import LikeDislike from "./LikeDislike";
import axios from "axios";

function SingleComment(props) {
  const { comment } = props;
  const [OpenReply, setOpenReply] = useState(false);

  const [CommentValue, setCommentValue] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeContent = (e) => {
    setCommentValue(e.target.value);
  };

  const HandleReply = () => {
    setOpenReply(!OpenReply);
  };

  const onRegisterText = (e) => {
    e.preventDefault();

    const variable = {
      name: name,
      password: password,
      content: CommentValue,
      postId: props.postId,
      responseId: comment._id,
    };

    axios.post("/api/comment/saveComment", variable).then((res) => {
      if (res.data.try) {
        props.refresh(res.data.newComment);
        message.info("comment 저장 잘됐어요");
      } else {
        message.error("comment2 저장 실패했어요");
      }
    });
  };

  return (
    <div>
      <Comment
        actions={[
          <LikeDislike />,
          <span key="comment-nested-reply-to" onClick={HandleReply}>
            Reply to
          </span>,
        ]}
        author={<a>{comment.name}</a>}
        content={comment.content}
        datetime={
          <Tooltip
            title={moment(comment.createdAt).format("YYYY-MM-DD H:mm:ss")}
          >
            <span>{moment(comment.createdAt).fromNow()}</span>
          </Tooltip>
        }
      />
      {OpenReply && (
        <div
          style={{
            width: "420px",
            height: "200px",
            marginLeft: "60px",
            border: "1px solid gray",
          }}
        >
          {" "}
          <form style={{ display: "block" }} className="replies">
            <input
              type="text"
              maxLength="8"
              size="10"
              placeholder="이름"
              value={name}
              onChange={onChangeName}
            />
            <input
              type="text"
              maxLength="8"
              size="10"
              placeholder="암호"
              value={password}
              onChange={onChangePassword}
            />
            <textarea
              rows="5"
              cols="60"
              style={{
                display: "block",
                borderRadius: "5px",
              }}
              placeholder="댓글을 입력해주세요"
              onChange={onChangeContent}
              value={CommentValue}
            />

            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
              }}
              type="primary"
              onClick={onRegisterText}
            >
              등록
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SingleComment;
