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
      <Title title="section title" />
      <div className="general-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          officiis, aliquam velit nesciunt et rem porro harum at minus nemo?
          Dolores unde reprehenderit fugit voluptates sequi illo molestiae quis
          officiis dolorem nemo fuga magnam perferendis recusandae nisi
          laboriosam quisquam totam blanditiis repudiandae, minima porro,
          aperiam cupiditate. Explicabo facere qui ea voluptates earum illum,
          vitae fuga blanditiis quos labore autem, odit aperiam modi, sunt
          possimus delectus. Voluptatibus eos provident explicabo sapiente.
          Laudantium, exercitationem libero rerum, veniam iure voluptatibus
          maxime blanditiis corrupti non et repellat maiores. Cupiditate numquam
          voluptate suscipit, assumenda reprehenderit, dicta quasi facilis, non
          ratione minus maxime fugiat quod perspiciatis?
        </p>
      </div>
      <Title title="section title" />
      <InfosList />
    </Wrapper>
  );
};

export default AboutUs;
