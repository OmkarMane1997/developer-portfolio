import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderPage from "./component/Header/HeaderPage";
import HomePage from "./component/Home/HomePage";
import TechStackPage from "./component/TechStack/TechStackPage";
import ProjectsPage from "./component/Projects/ProjectsPage";
import "./App.css";
import FooterPage from "./component/Footer/FooterPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
        <div className="theme">
          <HeaderPage />
          <HomePage />
          <TechStackPage />
          <ProjectsPage />
          <FooterPage/>
        </div>
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
