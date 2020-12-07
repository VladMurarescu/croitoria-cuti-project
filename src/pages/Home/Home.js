import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./Home.css";
import HomeTop from "../../components/HomeTop/HomeTop";
import ServicesList from "../../components/ServicesList/ServicesList";
import Title from "../../components/Title/Title";

const Home = () => {
  return (
    <Wrapper>
      <HomeTop />
      <div className="home-img">
        <img
          src="https://res.cloudinary.com/dphkz2umf/image/upload/v1607375226/logo_4add8f9a69.jpg"
          alt="img"
        />
      </div>
      <Title title="Serviciile noastre" />
      <ServicesList />
    </Wrapper>
  );
};

export default Home;
