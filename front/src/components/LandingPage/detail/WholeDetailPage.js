import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Button } from "antd";
import moment from "moment";
import Comment from "./section/Comment";
import OrderBar from "./section/OrderBar";

function WholeDetailPage(props) {
  const [postId, setpostId] = useState(`${props.match.params.postId}`);
  const [WholeDetail, setWholeDetail] = useState([]);
  const [WholeAnother, setWholeAnother] = useState([]);

  // console.log("세부적인 항목", WholeDetail);
  // console.log("다른 것들", WholeAnother);
  useEffect(() => {
    // 무한 렌더링 문제 -
    // const variable이 상위 컨텍스트에 있음으로서 오류 발생
    // hook으로서의 state가 아닌 값은 렌더링 다시 할때마다 값이 변한다
    const variable = { postId };

    axios.post("/api/post/getWholeAnother", variable).then((res) => {
      if (res.data.try) {
        setWholeAnother(res.data.doc);
      } else {
        console.log(res.data.err);
      }
    });

    axios.post("/api/post/getWholeDetail", variable).then((res) => {
      if (res.data.try) {
        setWholeDetail(res.data.doc);
      } else {
        message.error("개인적인 이야기를 볼 수 없습니다");
      }
    });
  }, [postId]);

  return (
    <article id="content">
      <div className="post-header">
        <h2>개인적인 이야기</h2>
        <h1>{WholeDetail.title}</h1>
        <p>
          {WholeDetail.createdAt === WholeDetail.updatedAt
            ? moment(WholeDetail.createdAt).format("MMMM Do YYYY, a h:mm")
            : `${moment(WholeDetail.createdAt).format("MMM Do YY")} | ${moment(
                WholeDetail.updatedAt
              ).format("MMM Do YY")}`}
        </p>
      </div>
      <div className="inner">
        <div className="post-item">
          <br />
          <br />
          <p>{WholeDetail.content}</p>
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
              {WholeAnother.map((value, index) => (
                // <a href={`${value._id}`}>
                //   <li key={index}>{value.title}</li>
                // </a>
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

export default WholeDetailPage;
