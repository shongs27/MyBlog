import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Row, Col } from "antd";
function GitPage() {
  const [GitDetail, setGitDetail] = useState([]);

  useEffect(() => {
    axios.get("/api/post/getGitPage").then((res) => {
      if (res.data.try) {
        setGitDetail(res.data.doc);
      } else {
        message.error("useEffect 오류입니다");
      }
    });
  }, []);

  const renderList = GitDetail.map((value, index) => {
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
        <a className="more" href={`/post/${value.category}/${value._id}`}>
          더보기&gt;
        </a>
      </div>
    );
  });

  return (
    <article id="content">
      <div className="post-header">
        <h2>Git</h2>
      </div>
      <div className="inner">{renderList}</div>
    </article>
  );
}

export default GitPage;
