import React from "react";
import "./NavBar.css";
import LeftMenu from "./section/LeftMenu";
import RightMenu from "./section/RightMenu";

const NavBar = () => {
  return (
    <>
      <nav className="menu">
        <div className="menu__inner">
          <div className="menu__logo">
            <span>
              <a href="/">발전하는 동적사이트</a>
            </span>
            &nbsp; &nbsp;
            <a href="https://github.com/shongs27">
              <i class="fab fa-github" />
            </a>
            &nbsp;
            <a href="mailto:shongs27@naver.com">
              <i class="fas fa-at" />
            </a>
          </div>
          <div className="menu__left">
            <LeftMenu />
          </div>
          <div className="menu__right">
            <RightMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
