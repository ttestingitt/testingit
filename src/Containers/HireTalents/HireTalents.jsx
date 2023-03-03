import React from "react";
import Nav from "../../Nav/Nav";
import "../../Hero/Hero.scss";
import NLogo from "../../assets/logo/letter-only-black.svg";

const HireTalents = () => {
  return (
    <div className="hero-container">
      <Nav />
      <div className="hero-content">
        <div className="hero-left-sec">
          <div className="title">Grow Your Team With</div>
          <div className="sub-title">Remote Top-Notch Talents</div>
          <button type="button" class="btn btn-primary btn-lg">
            Hire Talents
          </button>
          <div className="seek-job">
            Seeking jobs instead? <span>Apply as a talent</span>
          </div>
        </div>
        <div className="hero-right-sec">
          <img className="n-logo" src={NLogo} alt="text logo" />
        </div>
      </div>
    </div>
  );
};

export default HireTalents;
