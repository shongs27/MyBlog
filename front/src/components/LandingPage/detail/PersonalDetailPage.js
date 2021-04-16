import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Button } from "antd";
import moment from "moment";
import Comment from "./section/Comment";
import OrderBar from "./section/OrderBar";

function PersonalDetailPage(props) {
  const postId = props.match.params.postId;
  const variable = { postId };

  const [PersonalDetail, setPersonalDetail] = useState([]);
  const [PersonalAnother, setPersonalAnother] = useState([]);
  // console.log("세부적인 항목", PersonalDetail);
  // console.log("다른 것들", PersonalAnother);
  useEffect(() => {
    axios.post("/api/post/getPersonalAnother", variable).then((res) => {
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
  }, []);

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

        {/* 구독 버튼 */}
        <Button type="primary" ghost>
          구독
        </Button>
        <br />
        <br />
        <br />
        <div
          className="anotherCategory"
          style={{ border: "2px solid #e6e6e6" }}
        >
          <div className="anotherCategory__title">
            <a href="/personal" style={{ color: "blue" }}>
              '개인적인 이야기'
            </a>
            카테고리의 다른 글
          </div>

          <div className="anotherCategory__list">
            <hr />
            <ul>
              {PersonalAnother.map((value, index) => (
                <a href={`${value._id}`}>
                  <li key={index}>{value.title}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <Comment />
        <OrderBar />
      </div>
    </article>
  );
}

export default PersonalDetailPage;
