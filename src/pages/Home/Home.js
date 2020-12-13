import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import "./Home.css";
import HomeTop from "../../components/HomeTop/HomeTop";
import ServicesList from "../../components/ServicesList/ServicesList";
import Title from "../../components/Title/Title";
import LogoImg from "./logo.jpg";
const Home = () => {
  return (
    <Wrapper>
      <HomeTop />
      <div className="home-img">
        <img src={LogoImg} alt="img" />
      </div>
      <Title title="Serviciile noastre" />
      <ServicesList />
    </Wrapper>
  );
};

export default Home;
