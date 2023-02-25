import React from "react";
import "../App.scss";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-header">
          <div>
            <i class={props.icon}></i>
          </div>
          <div className="card-title">{props.title}</div>
        </div>
        <div className="card-desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default Card;
