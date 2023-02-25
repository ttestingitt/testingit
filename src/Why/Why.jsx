import React from "react";
import "./Why.scss";

import Card from "../Card/Card";
import Cards from "../assets/data/why-cards";

const Why = () => {
  return (
    <div className="why-container">
      <div className="title-part">
        <div className="title">Why Companies Choose Venotch</div>
        <div className="desc">
          Venotch is exclusively focused on matching top notch talents with
          rapid growing Australian tech companies.
        </div>
      </div>
      <div className="cards-part">
        {Cards.map((card, index) => (
          <Card
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Why;
