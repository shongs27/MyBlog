import React from "react";

function LandingPage() {
  return (
    <article id="content">
      <div className="post-header">
        <h2>전체 글</h2>
      </div>
      <div className="inner">
        <div className="post-item">
          <a href="/156">
            <span className="title">렌딩</span>
            <span className="excerpt">여기가 렌딩페이지</span>
            <span className="more">더보기 ::after</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default LandingPage;
