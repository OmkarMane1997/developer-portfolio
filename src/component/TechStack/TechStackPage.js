import React from "react";
import { Col, Row, Tooltip } from "antd";
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
import sass from "../../assets/image/sass.png";
function TechStackPage() {
  return (
    <div className="container text-center">
      <div className="tech-stack my-5">My Tech Stack</div>
      <p className="tech-stack-sub my-4">
        Technologies I’ve been working with recently
      </p>
      <br />
      <div>
        <Row className="">
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="HTML / HTML5">
              <img src={html} alt="html" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="CSS / CSS3">
              <img src={css} alt="css" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="JS / ES6">
              <img src={js} alt="js" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="Bootstrap">
              <img src={bootstrap} alt="bootstrap" className=" img-fluid" style={{marginTop:"14px"}} />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="GitBash">
              <img
                src={logosGitIcon}
                alt="logosGitIcon"
                className=" img-fluid"
              />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="NodeJs">
              <img src={nodejs} alt="nodejs" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="React Js">
              <img src={react} alt="react" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="GitHub">
              <img src={githubFill} alt="githubFill" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="VSCode">
              <img src={vscode} alt="vscode" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="jQuery">
              <img src={jQuery} alt="jQuery" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="AntD lib">
              <img src={AntD} alt="AntD" className=" img-fluid" />
            </Tooltip>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <Tooltip title="Sass">
              <img src={sass} alt="Sass" className=" img-fluid" style={{marginTop:"14px"}} />
            </Tooltip>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TechStackPage;
