import React from "react";
import "../css/Footer.css";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <h2>Dump It Now</h2>
      <div className="social-logos">
        <a href="/">
          <img src={facebook} alt="social-pages" />
        </a>
        <a href="/">
          <img src={instagram} alt="social-pages" />
        </a>
        <a href="/">
          <img src={twitter} alt="social-pages" />
        </a>
      </div>

      <a href="tel:8604837789">
        <p className="numbar-call">+8604837789</p>
      </a>
      <a href="mailto:dumpitmow@gmail.com">
        <p className="numbar-call">dumpitmow@gmail.com</p>
      </a>
    </div>
  );
}

export default Footer;
