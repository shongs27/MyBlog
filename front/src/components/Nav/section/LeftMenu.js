import React from "react";
import { Menu } from "antd";

function LeftMenu() {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="upload">
          <a href="/post/upload">업로드</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a href="/user/logout">로그아웃</a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default LeftMenu;
