import React from "react";

export default function Footer() {
  return (
    <footer className="theme">
      <div className="footer-container">
        {/* <div className="footer-"></div> */}
        <section>
          <a href="#icon1" role="link">
            <span className="fab fa-facebook-f footer-icon"></span>
          </a>
          <a href="#icon2" role="link">
            <span className="fab fa-twitter footer-icon"></span>
          </a>
          <a href="#icon3" role="link">
            <span className="fab fa-google footer-icon"></span>
          </a>
          <a href="#icon4" role="link">
            <span className="fab fa-instagram footer-icon"></span>
          </a>
          <a href="#icon5" role="link">
            <span className="fab fa-linkedin-in footer-icon"></span>
          </a>
          <a href="#icon6" role="link">
            <span className="fab fa-github footer-icon"></span>
          </a>
        </section>
        {/* copyright */}
        <div className="copyright">
          <span>&copy;Copyright</span>
        </div>
      </div>
    </footer>
  );
}
