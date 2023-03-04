import React from "react";
import { Link } from "react-router-dom";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="sub-banner">
        <div className="sub-text">
          Start getting top notch talents for your startup
        </div>
        <div>
          <Link to="/HireTalents">
            <button type="button" className="btn btn-primary btn-lg">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
