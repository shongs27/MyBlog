import React, { useState, useEffect } from "react";
import { message, Row, Col } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchPage(props) {
  const state = props.location.state;
  const [TargetText, setTargetText] = useState();
  const [SearchDetail, setSearchDetail] = useState([]);

  useEffect(() => {
    setTargetText(state.TargetText);
    setSearchDetail(state.SearchPost.current);
  }, [state]);

  const renderList = SearchDetail.map((value, index) => {
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
    <>
      <article id="content">
        <div className="post-header">
          <h2>{TargetText}</h2>
        </div>
        <div className="inner">{renderList}</div>
      </article>
    </>
  );
}

export default SearchPage;
