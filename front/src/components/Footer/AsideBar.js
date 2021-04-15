import React from "react";
import PopularPost from "./section/PopularPost";
import RecentPost from "./section/RecentPost";
import Search from "./section/Search";
import Statics from "./section/Statics";

function AsideBar() {
  return (
    <div
      style={{
        borderTop: "solid 1px #e8e8e8",
      }}
    >
      <div
        className="aside__inner"
        style={{
          minHeight: "280px",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "1rem",
        }}
      >
        <RecentPost />
        <PopularPost />
        <Search />
        <Statics />
      </div>
    </div>
  );
}

export default AsideBar;
