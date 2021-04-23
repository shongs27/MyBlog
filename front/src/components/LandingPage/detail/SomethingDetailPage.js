import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Button } from "antd";
import moment from "moment";
import Comment from "./section/Comment";
import OrderBar from "./section/OrderBar";

function SomethingDetailPage(props) {
  const [postId, setpostId] = useState(`${props.match.params.postId}`);
  const [SomethingDetail, setSomethingDetail] = useState([]);
  const [SomethingAnother, setSomethingAnother] = useState([]);

  // console.log(SomethingDetail);
  // console.log(SomethingAnother);
  useEffect(() => {
    const variable = { postId };

    axios.post("/api/post/getSomethingAnother", variable).then((res) => {
      if (res.data.try) {
        setSomethingAnother(res.data.doc);
      } else {
        console.log(res.data.err);
      }
    });

    axios.post("/api/post/getSomethingDetail", variable).then((res) => {
      if (res.data.try) {
        setSomethingDetail(res.data.doc);
      } else {
        message.error("개인적인 이야기를 볼 수 없습니다");
      }
    });
  }, [postId]);

  return (
    <article id="content">
      <div className="post-header">
        <h2>개인적인 이야기</h2>
        <h1>{SomethingDetail.title}</h1>
        <p>
          {SomethingDetail.createdAt === SomethingDetail.updatedAt
            ? moment(SomethingDetail.createdAt).format("MMMM Do YYYY, a h:mm")
            : `${moment(SomethingDetail.createdAt).format(
                "MMM Do YY"
              )} | ${moment(SomethingDetail.updatedAt).format("MMM Do YY")}`}
        </p>
      </div>
      <div className="inner">
        <div className="post-item">
          <br />
          <br />
          <p>{SomethingDetail.content}</p>
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
            <a href="/post/something" style={{ color: "blue" }}>
              '개인적인 이야기'
            </a>
            카테고리의 다른 글
          </div>

          <div className="anotherCategory__list">
            <hr />
            <ul>
              {SomethingAnother.map((value, index) => (
                <li key={index}>
                  <a href={`${value._id}`}>{value.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Comment />
        <OrderBar postId={postId} setpostId={setpostId} />
      </div>
    </article>
  );
}

export default SomethingDetailPage;
