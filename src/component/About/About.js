import React from "react";
import "./About.css";
import {
  BankOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
function About() {
  return (
    <div className="container">
      <div className="text-center">
        <div className="aboutMe my-5">About Me</div>
      </div>
      <br />
      <div>
        <p className="aboutMe-info ">
          Worked as a Web Developer. Extensively worked developing Responsive
          Web Applications. Experience in developing web page effectively using
          HTML5, CSS3, Javascript , Bootstrap, React-js and Nodejs in making web
          pages cross-browser compatible. Well understanding on MVC Structure
        </p>
      </div>
      <br />
      <div className="text-center">
        <div className="aboutMe my-5">Work Experience</div>
      </div>
      <br />
      <div className="work-experience ">
        <div className="work-experience-left">
          Web Developer
          <br />
          <p>
            <BankOutlined />
            <span> Comtranse Technology</span> <br /> <EnvironmentOutlined />{" "}
            Kolhapur, Maharashtra.
          </p>
        </div>
        <div className="work-experience-right">
          <div className="full-time-badge">
            <p className="full-time">Full Time</p>
          </div>
          <div className="date-work-experience">
            <CalendarOutlined /> 10-May-2023 To 31-Jun-2023
          </div>
        </div>
      </div>
      <div className="work-experience ">
        <div className="work-experience-left">
          Software Development Engineer - I
          <br />
          <p className="work-experience-info">
            <BankOutlined />
            <span> Prestious IT Solution</span> <br /> <EnvironmentOutlined />{" "}
            Surat, Gujarat.
          </p>
        </div>
        <div className="work-experience-right">
          <div className="full-time-badge">
            <p className="full-time">Full Time</p>
          </div>
          <div className="date-work-experience">
            <CalendarOutlined /> 06-Feb-2023 To 01-Mar-2023
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="aboutMe my-5">Education</div>
      </div>
      <br />
      <div className="work-experience ">
        <div className="work-experience-left">
          Msc Computer Science
          <br />
          <p>
            <BankOutlined />
            <span> Shivaji University</span> <br /> <EnvironmentOutlined />{" "}
            Kolhapur, Maharashtra.
          </p>
        </div>
        <div className="work-experience-right">
          <div className="full-time-badge">
            <p className="full-time">Full Time</p>
          </div>
          <div className="date-work-experience">
            <CalendarOutlined /> 15-Jun-2019 To 15-May-2021
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
