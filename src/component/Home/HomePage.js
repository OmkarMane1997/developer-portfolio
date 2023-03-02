import React from "react";
import { Col, Row } from "antd";
import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
