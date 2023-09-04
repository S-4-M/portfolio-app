import React from "react";
import { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./components/home-page/Home";
import LandingPage from "./components/landing-page/LandingPage";
import FullWebsite from "./components/full-website/WebsiteApp";
import WeatherApp from "./components/weather-app/WeatherApp";

const test = () => {
  console.log("Test!");
};

export default function App() {
  const [content, setContent] = useState("HomePage");

  const contents = {
    HomePage: <HomePage />,
    LandingPage: <LandingPage />,
    FullWebsite: <FullWebsite />,
    WeatherApp: <WeatherApp />,
  };

  const Display = () => {
    return <div className="display">{contents[content]}</div>;
  };

  const changeContent = (event) => {
    const getContent = event.target.name;
    const checkContent = getContent
      ? event.target.name
      : event.target.parentElement.name;
    if (Object.keys(contents).indexOf(checkContent) !== -1) {
      return setContent(() => checkContent);
    }
    return setContent(() => "HomePage");
  };

  return (
    <div className="app">
      <Display />
      <Sidebar changeContent={changeContent} />
    </div>
  );
}
