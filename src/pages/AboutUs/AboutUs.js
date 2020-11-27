import React from "react";
import "./AboutUs.css";
import AboutUsTop from "../../components/AboutUsTop/AboutUsTop";
import InfosList from "../../components/InfosList/InfosList";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
const AboutUs = () => {
  return (
    <Wrapper>
      <AboutUsTop />
      <Title title="Despre noi" />
      <div className="general-description">
        <p>
          Croitoria CUTI oferă cele mai bune servicii, utilizând mașini
          performante și materiale de cea mai bună calitate. Firma noastră
          dispune de un personal profesionist, înțelegător și cel mai important,
          care se gândește la nevoile / sugestiile / preferințele clienților.
          Croitoria reprezintă un spațiu unde creativitatea este evidențiată
          pentru realizarea costumelor dorite. De asemenea, îmbrăcămintea poate
          fi personalizată, modificată sau retușată, în funcție de cerințele
          clienților.
        </p>
      </div>
      <Title title="Ce vei găsi aici" />
      <InfosList />
    </Wrapper>
  );
};

export default AboutUs;
