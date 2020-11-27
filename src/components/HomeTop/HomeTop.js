import React from "react";
import "./HomeTop.css";
import { Link } from "react-router-dom";
const HomeTop = () => {
  return (
    <div className="home-top-container">
      <p className="home-title">
        Eleganța nu înseamnă să ieși în evidență, ci să fii de neuitat!
      </p>
      <Link to="/products" className="home-button">
        Vezi produse
      </Link>
    </div>
  );
};

export default HomeTop;
