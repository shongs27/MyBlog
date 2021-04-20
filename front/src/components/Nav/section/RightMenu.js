import React from "react";
import { Menu } from "antd";

function RightMenu() {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="personal">
          <a href="/post/personal">개인적인 이야기</a>
        </Menu.Item>
        <Menu.Item key="something">
          <a href="/post/something">이것저것</a>
        </Menu.Item>
        <Menu.Item key="javascript">
          <a href="/post/javascript">JavaScript</a>
        </Menu.Item>
        <Menu.Item key="react">
          <a href="/post/react">React</a>
        </Menu.Item>
        <Menu.Item key="git">
          <a href="/post/git">Git</a>
        </Menu.Item>
        <Menu.SubMenu title="Algorithm">
          <Menu.Item>
            {" "}
            <a href="/post/algorithm1">이론</a>
          </Menu.Item>
          <Menu.Item>
            {" "}
            <a href="/post/algorithm2">문제풀이</a>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="book">
          <a href="/post/book">도서</a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default RightMenu;
