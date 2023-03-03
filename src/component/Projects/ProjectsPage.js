import React from "react";
import { Card, Col, Image, Row, Typography } from "antd";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import "./ProjectsPage.css";
import PetWEB from "../../assets/image/PetWEB.png";
import Demo from "../../assets/image/Demo.png";
import GYM from "../../assets/image/GYM.png";
import OmkarPortfoilo from "../../assets/image/OmkarPortfoilo.png";
function ProjectsPage() {
  const data = [
    {
      id: "1",
      image: PetWEB,
      name: "PET Website",
      info: "Translated PSD designs into responsive Web Design",
      techStack: "HTML5, Bootstrap, CSS3",
      liveLink: "https://omkarmane1997.github.io/petWeb/",
      githubLink: "https://github.com/OmkarMane1997/petWeb",
    },
    {
      id: "2",
      image: Demo,
      name: "Single Page App",
      info: " Created  Single Page Application using AntD React Library",
      techStack: "HTML5, CSS3, ReactJs, AntD ",
      liveLink: "https://demo-omkar.netlify.app",
      githubLink: "https://github.com/OmkarMane1997/Demo-Single-Page",
    },
    {
      id: "3",
      image:GYM,
      name: "GYM Website",
      info: "Created Site and implements this Lib framer-motion,number-counter",
      techStack: "HTML5, CSS3, ReactJs,emailjs ",
      liveLink: "https://19fc7d52.gmysite.pages.dev/",
      githubLink: "https://github.com/OmkarMane1997/GYM-Website",
    },
    {
      id: "4",
      image: OmkarPortfoilo,
      name: "Owen Portfolio WebSite",
      info: "Translated Figma designs into responsive Web Design",
      techStack: "ReactJs, AntD Lib, emailjs",
      liveLink: "https://marvelous-cucurucho-b69924.netlify.app/",
      githubLink: "https://github.com/OmkarMane1997/developer-portfolio",
    },
  ];
  return (
    <div className="container ">
      <div className="text-center">
        <div className="tech-stack my-5">Projects</div>
        <p className="tech-stack-sub my-4">Things I’ve built so far</p>
      </div>
      <br />

      <Row gutter={[24, 24]} className="container-sm">
        {data.map((item, index) => {
          return (
            <Col xs={24} sm={12} md={12} lg={8} xl={8} key={index}>
              <Card
                hoverable
                cover={<Image src={item.image} className="rounded" />}
                
                className="Project-card"
              >
                <Typography className="Project-title">{item.name}</Typography>
                <div className="Project-info">{item.info}</div>
                <div className="Project-techStack">
                  <p>Tech Stack:- {item.techStack}</p>
                </div>
                <div className="Project-last">
                  <div>
                    <LinkOutlined style={{ marginRight: "5px" }} /> Live Preview
                  </div>
                  <div>
                    <GithubOutlined style={{ marginRight: "5px" }} /> View Code
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProjectsPage;
