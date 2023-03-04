import { Button } from "antd";
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import resumeFile from ".././../assets/resume/Omka_Mane_ReactJs.pdf";
import "./ResumePage.css";
function ResumePage() {
  const downloadHandler = () => {
    window.open(
      resumeFile,
      "_blank" // <- This is what makes it open in a new window.
    );
    console.log("first");
  };
  return (
    <div className="container text-center" id="Resume">
      <div className="text-center">
        <div className="aboutMe my-5">Resume</div>
      </div>
      <div>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size={"large"}
          onClick={downloadHandler}
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default ResumePage;
