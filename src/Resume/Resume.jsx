import React from "react";
import "./Resume.scss";

const Resume = (props) => {
  return (
    <div className="resume-container">
      <div className="card-content">
        <div className="role">{props.role}</div>
        <div className="years">{props.years}</div>
        <div className="desc">{props.desc}</div>
        <div className="skills">
          {props.skills.map((item, index) => (
            <div key={index} className="skill">
              {item}
            </div>
          ))}
        </div>
        <div className="availability">
          <span>Availability:</span> {props.availability}
        </div>
        <div className="salary">
          <span>Salary:</span> US{props.salary}{" "}
          <span className="month">/month</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
