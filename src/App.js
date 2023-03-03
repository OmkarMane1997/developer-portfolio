import React from "react";
import HeaderPage from "./component/Header/HeaderPage";
import HomePage from "./component/Home/HomePage";
import TechStackPage from "./component/TechStack/TechStackPage";
import ProjectsPage from "./component/Projects/ProjectsPage";
import "./App.css";

function App() {
  return (
    <div className="theme">
      <div>
        <HeaderPage />
        <HomePage />
        <TechStackPage />
        <ProjectsPage />
      </div>
    </div>
  );
}

export default App;
