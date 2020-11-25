import React from "react";
import "./InfosList.css";
import InfoCard from "../InfoCard/InfoCard";
const InfosList = () => {
  return (
    <div className="info-list-container">
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  );
};

export default InfosList;
