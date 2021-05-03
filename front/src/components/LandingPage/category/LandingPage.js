import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Row, Col } from "antd";
import { Link } from "react-router-dom";
function LandingPage() {
  const [LandingDetail, setLandingDetail] = useState([]);

  useEffect(() => {
    // 입장권 나눠주기
    // axios.get("https://api.ipify.org/?format=json").then((res) => {
    //   const ip = res.data;
    //   axios.post("/api/user/whoami", ip).then((res) => {
    //     if (res.data.try) {

    //     } else {
    //       message.error('유저정보 저장 안됐음')
    //     }
    //   })
    // });

    if (!document.cookie) {
      let date = new Date(Date.now() + 86400e3);
      date = date.toGMTString();
      document.cookie = "userId=hongs; expires=" + date;
    }

    axios.get("/api/post/getUserID").then((res) => {
      if (res.data.try) {
        localStorage.setItem("userId", res.data.doc);
      } else {
        message.error("User값을 받아오지 못했습니다");
      }
    });

    axios.get("/api/post/getLandingPage").then((res) => {
      if (res.data.try) {
        setLandingDetail(res.data.doc);
      } else {
        message.error("useEffect 오류입니다");
      }
    });
  }, []);

  const renderList = LandingDetail.map((value, index) => {
    let excerpt = value.content;
    if (excerpt.length > 200) {
      excerpt = excerpt.substring(0, 200) + "...";
    }
    return (
      <div className="post-item">
        <span
          style={{
            padding: "10px 0 0",
            fontSize: "18px",
            fontWeight: "700",
          }}
          className="title"
        >
          {value.title}
        </span>
        <p style={{ color: "#666" }} className="excerpt">
          <span>{excerpt}</span>
        </p>
        <Link className="more" to={`/post/${value.category}/${value._id}`}>
          더보기&gt;
        </Link>
      </div>
    );
  });

  return (
    <article id="content">
      <div className="post-header">
        <h2>전체 글</h2>
      </div>
      <div className="inner">{renderList}</div>
    </article>
  );
}

export default LandingPage;
