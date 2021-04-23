import React, { useState, useEffect } from "react";
import axios from "axios";

function RecentPost() {
  const [RecentList, setRecentList] = useState([]);

  useEffect(() => {
    axios.get("/api/post/getLandingPage").then((res) => {
      if (res.data.try) {
        setRecentList(res.data.doc);
      }
    });
  }, []);

  const renderList = RecentList.map((value, index) => (
    <li style={{ borderBottom: "1px solid #e6e6e6" }}>
      <a
        style={{
          fontSize: "14px",
          fontWeight: "400",
          padding: "8px 0",
        }}
        href={`/post/${value.category}/${value._id}`}
      >
        {value.title}
      </a>
    </li>
  ));
  return (
    <div className="sidebar1" sytle={{ display: "flex" }}>
      <h2>최근포스트</h2>
      <ul
        style={{
          listStyle: "none",
          paddingLeft: "0px",
        }}
      >
        {renderList}
      </ul>
    </div>
  );
}

export default RecentPost;
