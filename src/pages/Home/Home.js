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
      <Title title="Serviciile noastre" />
      <ServicesList />
    </Wrapper>
  );
};

export default Home;
