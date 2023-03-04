import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./HeaderPage.css";
import { Link } from "react-scroll";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div id="header">
      <div
        className="Header"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
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

        <Button
          onClick={showDrawer}
          className="menu-theme"
          style={{ marginTop: "8px", verticalAlign: "2px !important" }}
        >
          <MenuOutlined />
        </Button>
        <Drawer
          placement={"left"}
          width={"200"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
          className="menu-theme"
        >
          <Menu
            mode="vertical"
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
        </Drawer>
      </div>
    </div>
  );
}

export default MobileHeader;
