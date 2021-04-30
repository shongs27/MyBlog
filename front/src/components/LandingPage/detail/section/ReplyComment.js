import React, { useDebugValue, useEffect, useState } from "react";
import SingleComment from "./SingleComment";

function ReplyComment(props) {
  const [IsOpen, setIsOpen] = useState(false);
  const [Views, setViews] = useState(0);

  const OpenReply = () => {
    setIsOpen(!IsOpen);
  };

  useEffect(() => {
    let views = 0;

    props.commentList.map((value, index) => {
      if (value.responseId === props.commentId) views++;
    });

    setViews(views);
  }, [props.commentList]);

  return (
    <>
      {Views > 0 && (
        <div
          style={{ fontWeight: "500", marginLeft: "20px" }}
          onClick={OpenReply}
        >
          View {Views} replies...{" "}
          {IsOpen ? (
            <span style={{ color: "green" }}>[close]</span>
          ) : (
            <span style={{ color: "green" }}>[open]</span>
          )}
        </div>
      )}
      {IsOpen &&
        props.commentList.map(
          (value, index) =>
            value.responseId === props.commentId && (
              <div style={{ marginLeft: "20px" }}>
                <SingleComment
                  postId={props.postId}
                  comment={value}
                  refresh={props.refresh}
                />
                <ReplyComment
                  postId={props.postId}
                  commentList={props.commentList}
                  refresh={props.refresh}
                  commentId={value._id}
                />
              </div>
            )
        )}
    </>
  );
}

export default ReplyComment;
