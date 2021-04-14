import React from "react";
import { Menu } from "antd";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="menu">
        <div className="menu__inner">
          <div className="menu__logo">
            <a href="/">icon</a>
            &nbsp;
            <span>발전가능한 개발 블로그</span>
          </div>

          <div className="menu__container">
            <Menu mode="horizontal">
              <Menu.Item key="personal">
                <a href="/personal">개인적인 이야기</a>
              </Menu.Item>
              <Menu.Item key="something">
                <a href="/something">이것저것</a>
              </Menu.Item>
              <Menu.Item key="javascript">
                <a href="/javascript">JavaScript</a>
              </Menu.Item>
              <Menu.Item key="react">
                <a href="/react">React</a>
              </Menu.Item>
              <Menu.Item key="git">
                <a href="/git">Git</a>
              </Menu.Item>
              <Menu.SubMenu title="Algorithm">
                <Menu.Item>이론</Menu.Item>
                <Menu.Item>문제풀이</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="book">
                <a href="/book">도서</a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
