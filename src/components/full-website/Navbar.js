import React from "react";

const toggleMenu = () => {
  const navigationMenu = document.querySelector(".navigation-container");
  const Website = document.querySelector("#Website");
  navigationMenu.classList.toggle("open");
  Website.classList.toggle("overflow-hidden");
  // const isOpen = navigationMenu.classList.contains("open");
  // console.log(isOpen);
};

// const setTheme = () => {
//   const query = document.querySelector(".theme");
//   console.log(query);
// };

export default function Navbar(props) {
  return (
    <nav>
      <div className="navigation-container theme">
        {/* button */}
        <button className="toggle-btn" onClick={toggleMenu}>
          <span className="fa fa-bars"></span>
        </button>
        {/* brand */}
        <div className="brand">
          <a className="brand-link" href="#">
            <div className="brand-logo">{props.logo}</div>
            <h1 className="brand-name">World</h1>
          </a>
        </div>
        {/* menu */}
        <div className="navigation-menu">
          <div className="navigation-collapse">
            <ul className="navigation-links">
              <li className="navigation-item">
                <a href="#1" className="link">
                  <span>HOME</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#2">
                  <span>PRODUCT</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#3">
                  <span>USEFUL LINKS</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#4">
                  <span>ABOUT</span>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#5">
                  <span>CONTACT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
