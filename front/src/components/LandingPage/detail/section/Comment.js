import React, { useState } from "react";
import { Typography, Button, message } from "antd";
import { MessageOutlined } from "@ant-design/icons";

import SingleComment from "./SingleComment";
import axios from "axios";
import ReplyComment from "./ReplyComment";

const { Title } = Typography;

function Comment(props) {
  //formik으로 체인지 해야겠다
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

  const onRegisterText = () => {
    const variable = {
      name: name,
      password: password,
      content: CommentValue,
      postId: props.postId,
      //여기서는 리스폰스Id없다
    };

    axios.post("/api/comment/saveComment", variable).then((res) => {
      if (res.data.try) {
        props.refresh(res.data.newComment);
        message.info("잘 저장했습니다");
      } else {
        message.error("잘 저장못했습니다");
      }
    });
  };

  return (
    <>
      <Title level={2}>Replies</Title>
      <hr />
      {props.commentList.map(
        (value, index) =>
          value.postId._id === props.postId &&
          !value.responseId && (
            <div key={index}>
              <SingleComment
                postId={props.postId}
                comment={value}
                refresh={props.refresh}
              />
              <ReplyComment
                postId={props.postId}
                commentList={props.commentList}
                refresh={props.refresh}
                //추가
                commentId={value._id}
              />
            </div>
          )
      )}

      <form style={{ position: "relative" }} className="replies">
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
          rows="8"
          style={{
            width: "100%",
            borderRadius: "5px",
          }}
          placeholder="댓글을 입력해주세요"
          onChange={onChangeContent}
          value={CommentValue}
        />

        <Button
          style={{
            margin: "0 0 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          type="primary"
          size="large"
          onClick={onRegisterText}
        >
          <div>
            {" "}
            <MessageOutlined />
            <span style={{ position: "relative", bottom: "4px", right: "4px" }}>
              등록
            </span>
          </div>
        </Button>
      </form>
    </>
  );
}

export default Comment;
