import React, { useState } from "react";
import Nav from "../../Nav/Nav";
import "../../Hero/Hero.scss";
import "./HireTalents.scss";
import NLogo from "../../assets/logo/letter-only-black.svg";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const HireTalents = () => {
  const navigate = useNavigate();
  const [talentsInfo, setTalentsInfo] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    size: "",
  });

  const handleTextValues = (e) => {
    let { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleTalents = (e) => {
    let name = e.target.name;
    if (e.target.checked) {
      talentsInfo.push(name);
    } else {
      if (talentsInfo?.includes(name)) {
        let index = talentsInfo.indexOf(name);
        talentsInfo.splice(index, 1);
      }
    }
  };

  const handleSubmit = (e) => {
    talentsInfo?.forEach((item, index) => {
      details[`talent${index + 1}`] = item;
    });
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        details,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setDetails({
            name: "",
            email: "",
            company: "",
            phone: "",
            website: "",
            size: "",
          });
          setTalentsInfo([]);
          alert(
            "Thank you for submitting your request! We will get in touch with you as soon as possible."
          );
          navigate("/home");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero-container">
      <Nav />
      <div className="wrapper">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleTextValues}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  name="email"
                  onChange={handleTextValues}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCompany">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCompany"
                  placeholder="Company Name"
                  name="company"
                  onChange={handleTextValues}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPhone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhone"
                  name="phone"
                  onChange={handleTextValues}
                  placeholder="00 61 2 9876 5432"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputWeb">Website</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputWeb"
                  name="website"
                  onChange={handleTextValues}
                  placeholder="www.venotch.com.au"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputSize">Company Size</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSize"
                  name="size"
                  onChange={handleTextValues}
                  placeholder="10-50 employees..."
                />
              </div>
            </div>
            <div className="form-group talents">
              <label for="inputLocation">Talents you are looking for</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                  onChange={handleTalents}
                  name="frontend"
                />
                <label className="form-check-label" for="gridCheck2">
                  Frontend Developers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck2"
                  onChange={handleTalents}
                  name="backend"
                />
                <label className="form-check-label" for="gridCheck2">
                  Backend Developers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck3"
                  onChange={handleTalents}
                  name="qa"
                />
                <label className="form-check-label" for="gridCheck3">
                  QA Engineers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck4"
                  onChange={handleTalents}
                  name="designer"
                />
                <label className="form-check-label" for="gridCheck4">
                  UI/UX Designers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck5"
                  onChange={handleTalents}
                  name="mobile"
                />
                <label className="form-check-label" for="gridCheck5">
                  Mobile Developers
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </form>
        </div>
        <div className="right">
          <img className="n-logo" src={NLogo} alt="text logo" />
        </div>
      </div>
    </div>
  );
};

export default HireTalents;
