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

    //리렌더링이 일어나지 않는다.. 어떻게 해주어야 할까??

    // props.setpostId(`${PostId[index]._id}`);
    // props.history.push(`/post/personal/${PostId[index]._id}`);
    props.history.push("/");
  };
  // const onHandleRight = () => {
  //   const index = PostId.findIndex((value) => value._id === props.postId) + 1;
  //   props.setpostId(`${PostId[index]._id}`);
  //   props.history.push(`/post/personal/${PostId[index]._id}`);
  //   console.log("여기예요 ", PostId[index]._id);
  //   return PostId[index]._id;
  // };

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
        <RightOutlined style={{ paddingTop: "8px", fontSize: "1.5rem" }} />
      </div>
    </>
  );
}

export default withRouter(OrderBar);
