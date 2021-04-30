import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Button } from "antd";
import moment from "moment";
import Comment from "./section/Comment";
import OrderBar from "./section/OrderBar";
import LikeDislike from "./section/LikeDislike";

function PersonalDetailPage(props) {
  const [postId, setpostId] = useState(`${props.match.params.postId}`);
  const [PersonalDetail, setPersonalDetail] = useState([]);
  const [PersonalAnother, setPersonalAnother] = useState([]);
  const [Comments, setComments] = useState([]);
  const refreshComments = (newComment) => {
    setComments((Comments) => [...Comments, ...newComment]);
  };

  useEffect(() => {
    // 무한 렌더링 문제 -
    // const variable이 상위 컨텍스트에 있음으로서 오류 발생
    // hook으로서의 state가 아닌 값은 렌더링 다시 할때마다 값이 변한다
    const variable = { postId };

    axios.get("/api/post/getPersonalPage").then((res) => {
      if (res.data.try) {
        setPersonalAnother(res.data.doc);
      } else {
        console.log(res.data.err);
      }
    });

    axios.post("/api/post/getPersonalDetail", variable).then((res) => {
      if (res.data.try) {
        setPersonalDetail(res.data.doc);
      } else {
        message.error("개인적인 이야기를 볼 수 없습니다");
      }
    });

    axios.post("/api/comment/getComment", variable).then((res) => {
      if (res.data.try) {
        setComments(res.data.comments);
      }
    });
  }, [postId]);

  //state값으로 주어야 하는건가???
  const AnotherPostId = [];
  // console.log(AnotherPostId);
  const AnotherList = PersonalAnother.map((value, index) => {
    AnotherPostId.push(value._id);
    return (
      <li key={index}>
        <a href={`${value._id}`}>{value.title}</a>
      </li>
    );
  });

  return (
    <article id="content">
      <div className="post-header">
        <h2>개인적인 이야기</h2>
        <h1>{PersonalDetail.title}</h1>
        <p>
          {PersonalDetail.createdAt === PersonalDetail.updatedAt
            ? moment(PersonalDetail.createdAt).format("MMMM Do YYYY, a h:mm")
            : `${moment(PersonalDetail.createdAt).format(
                "MMM Do YY"
              )} | ${moment(PersonalDetail.updatedAt).format("MMM Do YY")}`}
        </p>
      </div>
      <div className="inner">
        <div className="post-item">
          <br />
          <br />
          <p>{PersonalDetail.content}</p>
        </div>
        {/* 좋아요 버튼 */}
        <LikeDislike postId={postId} />

        <br />
        <br />
        <br />
        <div
          className="anotherCategory"
          style={{ border: "2px solid #e6e6e6" }}
        >
          <div className="anotherCategory__title">
            <a href="/post/personal" style={{ color: "blue" }}>
              '개인적인 이야기'
            </a>
            카테고리의 다른 글
          </div>

          <div className="anotherCategory__list">
            <hr />
            <ul>{AnotherList}</ul>
          </div>
        </div>
        <Comment
          postId={postId}
          commentList={Comments}
          refresh={refreshComments}
        />
        <OrderBar
          postId={postId}
          setpostId={setpostId}
          AnotherPostId={AnotherPostId}
        />
      </div>
    </article>
  );
}

export default PersonalDetailPage;
