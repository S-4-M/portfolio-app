import React, { useEffect, useRef } from "react";
import "./sidebar.css";

export default function Sidebar(props) {
  const toggleMenu = () => {
    const navigationMenu = document.querySelector("#sidebar");
    navigationMenu.classList.toggle("open");
  };

  const radioEvent = (event) => {
    const query = document.querySelector("#theme");
    const appearance = `${event.target.id}-mode`;
    if (appearance !== "dark-mode") {
      const value = query.className.replace("dark-mode", "light-mode");
      return query.setAttribute("class", value);
    }
    const value = query.className.replace("light-mode", "dark-mode");
    return query.setAttribute("class", value);
  };

  const count = useRef(0);
  useEffect(() => {
    if (count.current === 0) {
      count.current = count.current + 1;
    } else {
      toggleMenu();
    }
  }, [props.changeContent]);

  return (
    <div className="sidebar" id="sidebar">
      {/* button */}

      <div className="sidebar-button">
        <button className="button" type="button" onClick={toggleMenu}>
          <span className="fa-solid fa-bars"></span>
        </button>
      </div>

      {/* sidebar */}

      <div className="sidebar-body dark-mode" id="theme">
        {/* header */}

        <div className="menu-header" id="header-toggle">
          <div className="brand">
            <button
              className="button"
              name="HomePage"
              onClick={props.changeContent}
            >
              {/* <span className="fa-solid fa-arrow-right"></span> */}
              <span className="fa-solid fa-house "></span>
              <span>PORTFOLIO</span>
            </button>
          </div>
        </div>

        {/* navigation */}

        <div className="menu-nav">
          <ul>
            <li className="menu-nav-item">
              <button
                className="button"
                name="LandingPage"
                onClick={props.changeContent}
              >
                <span className="fa-solid fa-briefcase menu-nav-icon"></span>
                <span className="menu-nav-text">landing page</span>
              </button>
            </li>
            <li className="menu-nav-item">
              <button
                className="button"
                name="WeatherApp"
                onClick={props.changeContent}
              >
                <span className="fa-solid fa-cloud-sun-rain menu-nav-icon"></span>
                <span className="menu-nav-text">Weather app</span>
              </button>
            </li>
            <li className="menu-nav-item">
              <button
                className="button"
                name="FullWebsite"
                onClick={props.changeContent}
              >
                <span className="fa-solid fa-globe menu-nav-icon"></span>
                <span className="menu-nav-text">website</span>
              </button>
            </li>
          </ul>
        </div>

        {/* footer */}

        <hr className="sidebar-hr" />
        <div className="menu-footer">
          <div className="">
            <span>APPEARANCE: </span>
            <label htmlFor="dark">
              <input
                id="dark"
                value="dark"
                type="radio"
                name="color-mode"
                onClick={radioEvent}
                defaultChecked
              />
              <span>DARK</span>
            </label>
            <span>/</span>
            <label htmlFor="light">
              <input
                id="light"
                value="light"
                type="radio"
                name="color-mode"
                onClick={radioEvent}
              />
              <span>LIGHT</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// change link to button
// scroll inside side bar
// role="navigation"
