import React from "react";
import "./Nav.scss";

import textLogo from "../assets/logo/logo-text-black.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home">
        <img className="nav-logo" src={textLogo} alt="text logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/HireTalents" className="nav-link">
              Hire Talents
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              Apply as a Talent
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
