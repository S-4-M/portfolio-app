import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-bg">
        <img src="./homeBg.jpg" alt="home background" />
        <div className="color-layer"></div>
      </div>
      <div className="home-content">
        <div className="heading">
          <h1>Home</h1>
        </div>
        <div className="creator">
          <span>PORTFOLIO /</span>
          <span>SAM ABULAFIA</span>
        </div>
      </div>
    </div>
  );
}

// portfolio app / sam (two colors)
