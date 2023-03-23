import React from "react";
import { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

export default function App() {
  const [content, setContent] = useState("home");

  const contents = {
    home: <Home />,
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
    return setContent(() => "home");
  };

  return (
    <div className="app">
      <Display />
      <Sidebar replace={changeContent} />
    </div>
  );
}
