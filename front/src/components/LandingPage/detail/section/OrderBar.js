import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";
import { withRouter } from "react-router-dom";

function OrderBar(props) {
  const [PostId, setPostId] = useState([]);

  useEffect(() => {
    axios.get("/api/post/getAnotherPostId").then((res) => {
      if (res.data.try) {
        setPostId(res.data.doc);
      } else {
        console.log("에러입니다");
      }
    });
  }, []);

  const onHandleLeft = () => {
    const index = PostId.findIndex((value) => value._id === props.postId) - 1;

    //it doesn't make re-redering... how can i do?

    //첫번째 방법
    props.setpostId(`${PostId[index]._id}`);
    props.history.push(`/post/personal/${PostId[index]._id}`);

    //두번쨰 방법 - <link>로 할 수 있나?
  };
  const onHandleRight = () => {
    const index = PostId.findIndex((value) => value._id === props.postId) + 1;

    //it doesn't make re-redering... how can i do?

    //첫번째 방법
    props.setpostId(`${PostId[index]._id}`);
    props.history.push(`/post/personal/${PostId[index]._id}`);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LeftOutlined
          onClick={onHandleLeft}
          style={{ paddingTop: "8px", fontSize: "1.5rem" }}
        />
        &nbsp;
        {PostId.map((value, index) => {
          if (value._id === props.postId) {
            return (
              <a
                key={index}
                style={{ color: "black", fontSize: "1.5rem" }}
                href={`/post/personal/${value._id}`}
              >
                {index + 1}
              </a>
            );
          } else {
            return (
              <a
                key={index}
                style={{ fontSize: "1.5rem" }}
                href={`/post/personal/${value._id}`}
              >
                {index + 1}
              </a>
            );
          }
        })}
        &nbsp;
        <RightOutlined
          onClick={onHandleRight}
          style={{ paddingTop: "8px", fontSize: "1.5rem" }}
        />
      </div>
    </>
  );
}

export default withRouter(OrderBar);
