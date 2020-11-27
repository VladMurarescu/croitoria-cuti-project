import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <p>Croitoria Cuti</p>
        </Link>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <Link to="/" className="a">
            Acasă
          </Link>
        </li>
        <li>
          <Link to="/products" className="a">
            Produse
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="a">
            Despre noi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
