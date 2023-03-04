import React from "react";
import { Col, Row, Typography } from "antd";
import "./HomePage.css";
import profile from "../../assets/image/profile.png";
function HomePage() {
  return (
    <div className="container my-5" style={{ color: "white" }} id='home'>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="">
          <Typography className="home-left ">
            Hi 👋, <br /> My name is <br />{" "}
            <span className="first-name">Omkar Mane</span> <br /> I build things
            for web
          </Typography>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="text-center">
            <img src={profile} alt="profile" className="image " />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
