import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./component/Header/HeaderPage";
import HomePage from "./component/Home/HomePage";
import TechStackPage from "./component/TechStack/TechStackPage";
import ProjectsPage from "./component/Projects/ProjectsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
        <div className="theme">
          <HeaderPage />
          <HomePage />
          <TechStackPage />
          <ProjectsPage />
        </div>
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
