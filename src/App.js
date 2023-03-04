import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderPage from "./component/Header/HeaderPage";
import HomePage from "./component/Home/HomePage";
import TechStackPage from "./component/TechStack/TechStackPage";
import ProjectsPage from "./component/Projects/ProjectsPage";
import "./App.css";
import FooterPage from "./component/Footer/FooterPage";
import About from "./component/About/About";
import ResumePage from "./component/Resume/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <div className="theme">
        <HeaderPage />
        <HomePage />
        <TechStackPage />
        <ProjectsPage />
        <About/>
        <ResumePage/>
        <FooterPage />
      </div>
     
    </BrowserRouter>
  );
}

export default App;
