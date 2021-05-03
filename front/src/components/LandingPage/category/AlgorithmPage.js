import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Row, Col } from "antd";
import { Link } from "react-router-dom";
function AlgorithmPage() {
  const [AlgorithmDetail, setAlgorithmDetail] = useState([]);

  useEffect(() => {
    axios.get("/api/post/getAlgorithmPage").then((res) => {
      if (res.data.try) {
        setAlgorithmDetail(res.data.doc);
      } else {
        message.error("useEffect 오류입니다");
      }
    });
  }, []);

  const renderList = AlgorithmDetail.map((value, index) => {
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

export default AlgorithmPage;
