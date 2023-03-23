import React from "react";
import "./website.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
// font
const logoIcon = <i className="fa-solid fa-earth-americas"></i>;

export default function WebsiteApp() {
  return (
    <div className="website">
      <header>
        <Navbar logo={logoIcon} />
      </header>
      <Main logo={logoIcon} />
      <Footer />
    </div>
  );
}
