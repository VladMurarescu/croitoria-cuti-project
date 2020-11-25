import React from "react";
import "./ServicesList.css";
import ServiceCard from "../ServicesCard/ServicesCard";
const ServicesList = () => {
  return (
    <div className="services-section">
      <div className="inner-width">
        <div className="services-container">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
