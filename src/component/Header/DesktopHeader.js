import React from "react";
import { Menu } from "antd";

import "./HeaderPage.css";
import { Link } from "react-scroll";

function DesktopHeader() {
  return (
    <>
      <div className="container Header" id="header">
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
          <Menu.Item key="Home">
            <Link to={"home"}>Home</Link>
          </Menu.Item>
          <Menu.Item key="echStack">
            <Link to={"techStack"}>Tech Stack</Link>
          </Menu.Item>
          <Menu.Item key="Project">
            <Link to={"Project"}> Project</Link>
          </Menu.Item>
          <Menu.Item key="About">
            <Link to={"About"}> About</Link>
          </Menu.Item>
          <Menu.Item key="Resume">
            <Link to={"Resume"}> Resume</Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
}

export default DesktopHeader;
