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

      <a href="tel:7007614801">
        <p className="numbar-call">Call at +91-7007614801</p>
      </a>
      <a href="mailto:support@dumpitnow.in">
        <p className="numbar-call">support@dumpitnow.in</p>
      </a>
    </div>
  );
}

export default Footer;
