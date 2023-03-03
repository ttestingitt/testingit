import React from "react";
import "./Nav.scss";

import textLogo from "../assets/logo/logo-text-black.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <img className="nav-logo" src={textLogo} alt="text logo" />
      </Link>
      <button
        class="navbar-toggler"
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
          <Link to="/HireTalents">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Hire Talents
              </a>
            </li>
          </Link>
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
