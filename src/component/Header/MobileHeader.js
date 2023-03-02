import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./HeaderPage.css";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        className="Header"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
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
          icon={<MenuOutlined />}
          className="menu-theme"
          style={{ marginTop: "8px" }}
        ></Button>
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
            <Menu.Item key="Home">Home</Menu.Item>
            <Menu.Item key="About">About</Menu.Item>
            <Menu.Item key="TechStack">Tech Stack</Menu.Item>
            <Menu.Item key="Project">Project</Menu.Item>
            <Menu.Item key="Contact">Contact</Menu.Item>
            <Menu.Item key="Resume">Resume</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileHeader;
