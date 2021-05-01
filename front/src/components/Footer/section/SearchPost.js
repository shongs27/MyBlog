import React, { useEffect, useState, useRef } from "react";
import { Input } from "antd";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
const { Search } = Input;

function SearchPost(props) {
  const [TargetText, setTargetText] = useState(null);
  const SearchPost = useRef([]);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      //업데이트 시에만 !!
      axios.get("/api/post/getLandingPage").then((res) => {
        //**프론트에서 원하는 포스트 검색하기**
        const searched = res.data.doc.map((post) => {
          //text 배열 - 각 포스트 내용을 모아둠
          const text = Object.values(post);
          // 1번 방법 - text 합친다음에 string.includes하고 있으면 return post
          const realText = text.join("").toUpperCase();
          return realText.includes(TargetText) && post;
        });
        SearchPost.current = searched.filter((v) => v !== false);
        props.history.push({
          pathname: "/post/searchedPage/",
          state: { SearchPost },
        });
      });
    }
  }, [TargetText]);

  const onSearch = (t) => {
    setTargetText(t);
  };

  return (
    <Search
      placeholder="찾을 포스트 내용을 입력하세요"
      allowClear
      onSearch={onSearch}
      style={{ width: "305px" }}
    />
  );
}

export default withRouter(SearchPost);
