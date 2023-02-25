import React from "react";
import "./Dynamic.scss";

import Typed from "react-typed";

import dynamicAnime from "../assets/dynamic/Interview-amico.svg";

const Dynamic = () => {
  return (
    <div className="dynamic-container">
      <div className="dynamic-left-section">
        <img className="dynamic-animation" src={dynamicAnime} alt="text logo" />
      </div>
      <div className="dynamic-right-section">
        <div className="main-text">Advance Your Team and Hire Top Notch</div>
        <Typed
          className="dyna-text"
          strings={[
            "Frontend Developers",
            "Backend Developers",
            "QA Engineers",
            "UI/UX Designers",
            "Android Developers",
            "iOS Developers",
            "Product Managers",
          ]}
          typeSpeed={90}
          backSpeed={60}
          loop
        />
        <div>
          <button type="button" class="btn btn-primary btn-lg">
            Hire Talents
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
