import React from "react";
import "./Footer.scss";

import textLogo from "../assets/logo/logo-text-black.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="splitter"></div>
      <div className="footer-content">
        <div className="name">© 2023 Venotch, Inc</div>
        <div className="logo">
          <img className="nav-logo" src={textLogo} alt="text logo" />
        </div>
        <div className="social">
          <i className="ri-twitter-fill"></i>
          <a
            href="https://www.facebook.com/VENOTCH"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/venotch/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
