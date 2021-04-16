import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";

function OrderBar() {
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
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LeftOutlined style={{ paddingTop: "8px", fontSize: "1.5rem" }} />
        {PostId.map((value, index) => (
          <>
            <a
              style={{ fontSize: "1.5rem" }}
              href={`/post/personal/${value._id}`}
            >
              {index + 1}
            </a>
            &nbsp;
          </>
        ))}
        <RightOutlined style={{ paddingTop: "8px", fontSize: "1.5rem" }} />
      </div>
    </>
  );
}

export default OrderBar;
