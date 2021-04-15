import React from "react";

function FooterBar() {
  return (
    <div
      style={{
        minHeight: "60px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <span> Design By 홍원배 | 작성자</span>
    </div>
  );
}

export default FooterBar;
