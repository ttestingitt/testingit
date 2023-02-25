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
          <i class="ri-twitter-fill"></i>
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-linkedin-box-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
