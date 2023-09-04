import React, { useState } from "react";
import "./home.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// const components = {
//   About: <About />,
//   Skills: <Skills />,
//   Contact: <Contact />,
// };

// const [content, setContent] = useState(<Profile />);

// const changeContent = (event) => {
//   const str = event.target.innerText.split(" ")[0];
//   setContent(
//     components[str[0].charAt(0).toUpperCase() + str.slice(1).toLowerCase()]
//   );
// };

const toggleMenu = () => {
  const navigationMenu = document.querySelector("#sidebar");
  navigationMenu.classList.toggle("open");
};

export default function Home() {
  return (
    <div id="Home">
      <div className="bg-img"></div>
      <div className="creator">
        <span>Sam abulafia</span>
      </div>
      <div id="resume">
        <header>
          <h1>
            <span>RESUME /</span>
            <br />
            <span> PORTFOLIO</span>
          </h1>
        </header>
        <main>
          <nav>
            <ul>
              <li>
                <button>
                  <a href="#about-me">ABOUT ME</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="#skills">SKILLS</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="#contact">CONTACT</a>
                </button>
              </li>
            </ul>
          </nav>
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
      <footer>
        <button onClick={toggleMenu}>
          <span>Open portfolio sidebar</span>
        </button>
      </footer>
    </div>
  );
}
