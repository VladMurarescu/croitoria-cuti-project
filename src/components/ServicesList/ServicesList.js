import React, { useContext } from "react";
import "./ServicesList.css";
import ServiceCard from "../ServicesCard/ServicesCard";
import { ServicesContext } from "../../context/servicesContext";
import Loading from "../Loading/Loading";
const ServicesList = () => {
  let { services, loadingServices } = useContext(ServicesContext);

  if (loadingServices) {
    return <Loading />;
  }
  return (
    <div className="services-section">
      <div className="inner-width">
        <div className="services-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              photo={service.photo}
            />
          ))}
          {/* <ServiceCard />
          <ServiceCard />
          <ServiceCard /> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
