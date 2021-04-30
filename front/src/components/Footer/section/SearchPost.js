import React from "react";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

function SearchPost() {
  axios.get("/api/post/getLandingPage").then((res) => {
    const targetText = "개인적인이야기11";
    res.data.doc.map((posts) => {
      const text = Object.values(posts);
      //text는 배열이 된 내용값
      console.log(text);
      console.log(text.find((v) => v === targetText));
      //완전히 일치해야만 하는 find
      //포함되었는지만 확인하려면 for문을 직접 돌리자=> 배열 특정 문자 확인 검색
    });
  });

  const onSearch = () => {};

  return (
    <Search
      placeholder="찾을 포스트 내용을 입력하세요"
      allowClear
      onSearch={onSearch}
      style={{ width: "305px" }}
    />
  );
}

export default SearchPost;
