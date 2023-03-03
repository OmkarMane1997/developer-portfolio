import React from "react";
import { Menu } from "antd";

import "./HeaderPage.css";

function DesktopHeader() {
  return (
    <>
      <div className="container Header">
        <div className="Logo">
          <span>&#123;</span>
          <span>O</span>
          <span>m</span>
          <span>k</span>
          <span>a</span>
          <span>r</span> <span>M</span>
          <span>a</span>
          <span>n</span>
          <span>e</span>
          <span>&#125;</span>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          className="menu-theme"
        >
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="TechStack">Tech Stack</Menu.Item>
          <Menu.Item key="Project">Project</Menu.Item>
          <Menu.Item key="About">About</Menu.Item>
          <Menu.Item key="Contact">Contact</Menu.Item>
          <Menu.Item key="Resume">Resume</Menu.Item>
        </Menu>
      </div>
    </>
  );
}

export default DesktopHeader;
