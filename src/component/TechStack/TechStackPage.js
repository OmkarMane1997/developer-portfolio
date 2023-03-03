import React from "react";
import { Space, Tooltip } from "antd";
import "./TechStackPage.css";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import js from "../../assets/image/js.png";
import bootstrap from "../../assets/image/bootstrap.png";
import jQuery from "../../assets/image/jQuery.png";
import AntD from "../../assets/image/AntD.png";
import react from "../../assets/image/react.png";
import nodejs from "../../assets/image/nodejs.png";
import githubFill from "../../assets/image/github-fill.png";
import vscode from "../../assets/image/vscode.png";
import logosGitIcon from "../../assets/image/logos_git-icon.png";
function TechStackPage() {
  return (
    <div className="container text-center">
      <div className="tech-stack my-5">My Tech Stack</div>
      <p className="tech-stack-sub my-4">
        Technologies I’ve been working with recently
      </p>
      <br />
      <div style={{ marginLeft: "3rem" }}>
        <Space size={[50, 10]} wrap>
          <Tooltip title="HTML / HTML5">
            <img src={html} alt="html" />
          </Tooltip>

          <Tooltip title="CSS / CSS3">
            <img src={css} alt="css" />
          </Tooltip>
          <Tooltip title="JS / ES6">
            <img src={js} alt="js" />
          </Tooltip>
          <Tooltip title="Bootstrap">
            <img src={bootstrap} alt="bootstrap" />
          </Tooltip>
          <Tooltip title="jQuery">
            <img src={jQuery} alt="jQuery" />
          </Tooltip>
          <Tooltip title="React Js">
            <img src={react} alt="react" />
          </Tooltip>
          <Tooltip title="AntD lib">
            <img src={AntD} alt="AntD" />
          </Tooltip>
          <Tooltip title="NodeJs">
            <img src={nodejs} alt="nodejs" />
          </Tooltip>
          <Tooltip title="GitHub">
            <img src={githubFill} alt="githubFill" />
          </Tooltip>
          <Tooltip title="VSCode">
            <img src={vscode} alt="vscode" />
          </Tooltip>
          <Tooltip title="GitBash">
            <img src={logosGitIcon} alt="logosGitIcon" />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
}

export default TechStackPage;
