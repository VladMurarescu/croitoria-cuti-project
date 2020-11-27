import React from "react";
import "./InfoCard.css";
const InfoCard = (props) => {
  return (
    <div className="info-card-container">
      <div className="info-photo">
        <img src={props.img} alt="img" />
      </div>
      <div className="info-description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
