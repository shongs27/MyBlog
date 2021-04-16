import React, { useState } from "react";
import { Typography, Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";

import SingleComment from "./SingleComment";

const { Title } = Typography;

function Comment() {
  const [CommentValue, setCommentValue] = useState("");

  const onHandleChange = (e) => {
    setCommentValue(e.target.value);
  };

  return (
    <>
      <Title level={2}>Replies</Title>
      <hr />
      <SingleComment />

      <form style={{ position: "relative" }} className="replies">
        <input type="text" maxLength="8" size="10" placeholder="이름" />
        <input type="text" maxLength="8" size="10" placeholder="암호" />

        <textarea
          rows="8"
          style={{ width: "100%", borderRadius: "5px" }}
          placeholder="댓글을 입력해주세요"
          onChange={onHandleChange}
          value={CommentValue}
        />
        <div id="di" style={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          <Button type="primary" icon={<MessageOutlined />} size="large">
            등록
          </Button>
        </div>
      </form>
    </>
  );
}

export default Comment;
