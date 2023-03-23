import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-bg">
        {/* <img src="./homeBg.jpg" alt="home background" /> */}
        <div className="home-card"></div>
      </div>
      <div className="home-content">
        <h1>Home</h1>
      </div>
    </div>
  );
}
