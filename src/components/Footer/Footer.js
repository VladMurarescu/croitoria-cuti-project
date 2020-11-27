import React, { useContext } from "react";
import "./Footer.css";
import Loading from "../Loading/Loading";
import { InfosContext } from "../../context/infosContext";
const Footer = () => {
  let { data, loadingData } = useContext(InfosContext);
  if (loadingData) {
    return <Loading />;
  }
  return (
    <footer>
      <div className="nav-col">
        <h4>Contact</h4>
        <ul>
          <li>Program: {data[0].program}</li>
          <li>Telefon: {data[0].phone}</li>
          <li>Email: {data[0].email}</li>
        </ul>
      </div>
      <div className="nav-col">
        <h4>Locatie</h4>
        <ul>
          <li>Adresă: {data[0].address}</li>
          <li>Indicații: {data[0].indications}</li>
        </ul>
      </div>
      <div className="nav-social-icons">
        <h4>Social media</h4>
        <div className="icons">
          <a href="https://www.facebook.com/CroitoriaCuti/" className="icon">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/croitoriacuti/" className="icon">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
