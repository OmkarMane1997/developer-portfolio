import React from "react";
import "./FooterPage.css";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import { NavLink } from "react-router-dom";

function FooterPage() {
  return (
    <div className="footer container">
      <div className="footer-sub">
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
        <div className="social-accounts">
          <NavLink
            to={"https://github.com/OmkarMane1997"}
            className="footer-link"
          >
            <GithubOutlined />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/omkar-0177-mane"}
            className="footer-link"
          >
            <LinkedinOutlined />
          </NavLink>
          <NavLink
            to={"https://github.com/OmkarMane1997"}
            className="footer-link"
          >
            <InstagramOutlined />
          </NavLink>
          <NavLink
            to={"https://instagram.com/0177omkar?igshid=NmQ2ZmYxZjA="}
            className="footer-link"
          >
            <FacebookOutlined />
          </NavLink>
        </div>
      </div>
      <Divider style={{ borderColor: "white" }} />
      <div className="footer-company">
        Designed and built by <span className="footer-name">Omkar Mane</span>
      </div>
    </div>
  );
}

export default FooterPage;
