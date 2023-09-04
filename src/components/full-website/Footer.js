import React from "react";

export default function Footer() {
  return (
    <footer className="theme">
      <section>
        <h2>follow us</h2>
        <ul>
          <li>
            <a href="#icon1" role="link">
              <span className="fab fa-facebook-f footer-icon"></span>
            </a>
          </li>
          <li>
            <a href="#icon2" role="link">
              <span className="fab fa-twitter footer-icon"></span>
            </a>
          </li>
          <li>
            <a href="#icon3" role="link">
              <span className="fab fa-google footer-icon"></span>
            </a>
          </li>
          <li>
            <a href="#icon4" role="link">
              <span className="fab fa-instagram footer-icon"></span>
            </a>
          </li>
          <li>
            <a href="#icon5" role="link">
              <span className="fab fa-linkedin-in footer-icon"></span>
            </a>
          </li>
          <li>
            <a href="#icon6" role="link">
              <span className="fab fa-github footer-icon"></span>
            </a>
          </li>
        </ul>
      </section>
      {/* copyright */}
      <div className="copyright">
        <p>&copy;Copyright</p>
      </div>
    </footer>
  );
}
