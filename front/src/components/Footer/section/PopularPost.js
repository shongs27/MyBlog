import React, { useState, useEffect } from "react";
import axios from "axios";

function PopularPost() {
  const [PopularList, setPopularList] = useState([]);

  useEffect(() => {
    axios.get("/api/post/getPopularPage").then((res) => {
      if (res.data.try) {
        setPopularList(res.data.popular);
      }
    });
  }, []);

  const renderList = PopularList.map((value, index) => (
    <li key={index} style={{ borderBottom: "1px solid #e6e6e6" }}>
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
      <h2>인기 포스트</h2>
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

export default PopularPost;
