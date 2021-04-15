import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

function PersonalDetailPage(props) {
  console.log(props.match.params.postId);
  const postId = props.match.params.postId;
  const variable = { postId };

  const [PersonalDetail, setPersonalDetail] = useState({});

  useEffect(() => {
    axios.post("/api/post/getPersonalDetail", variable).then((res) => {
      if (res.data.try) {
        setPersonalDetail(res.data.personalDetail);
      } else {
        message.error("개인적인 이야기를 볼 수 없습니다");
      }
    });
  });

  return (
    <article id="content">
      <div className="post-header">
        <h2>개인적인 이야기</h2>
        <h1></h1>
        <p>사용자 </p>
      </div>
      <div className="inner">
        <div className="post-item">
          <a href="/156">
            <span className="title">자바스크립트의 불변성</span>
            <span className="excerpt">
              일단 대충 이런이 이야기들을 하고 있다고
              알아주세요어배ㅑ러뱌ㅐ러배러ㅐ뱌ㅓ래ㅑ버랩더래ㅑ버대랴ㅓ배랴ㅓ댜배러ㅐㅂ더ㅐ랴버ㅐㄷ러ㅐ뱌ㅓㄷ래ㅑ벌
            </span>
            <span className="more">더보기 ::after</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default PersonalDetailPage;
