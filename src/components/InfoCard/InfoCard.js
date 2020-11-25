import React from "react";
import "./InfoCard.css";
const InfoCard = () => {
  return (
    <div className="info-card-container">
      <div className="info-photo">
        <img
          src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img"
        />
      </div>
      <div className="info-description">
        <h4>info title</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iste
          illo sequi quod rerum beatae quam, aut dignissimos optio repudiandae.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
