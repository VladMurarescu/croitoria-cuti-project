import React from "react";
import "./HomeTop.css";
import { Link } from "react-router-dom";
const HomeTop = () => {
  return (
    <div className="home-top-container">
      <p className="home-title">Loream inotosada ascmnasc sauda</p>
      <Link to="/products" className="home-button">
        Vezi produse
      </Link>
    </div>
  );
};

export default HomeTop;
