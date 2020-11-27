import React from "react";
import "./ServicesCard.css";
const ServicesCard = (props) => {
  return (
    <div className="service-box">
      <div className="service-icon">
        <i className={props.icon}></i>
      </div>
      <div className="service-title">{props.title}</div>
      <div className="service-desc">{props.description}</div>
    </div>
  );
};

export default ServicesCard;
