import React from "react";
import HeaderPage from "./component/Header/HeaderPage";
import HomePage from "./component/Home/HomePage";
import "./App.css";
import "./assets/Scss/Common.css";

function App() {
  return (
    <div className="theme">
      <div>
        <HeaderPage />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
