import React from "react";
import "./ErrorComponent.css";
import Wrapper from "../Wrapper/Wrapper";
import Tittle from "../Title/Title";
import { Link } from "react-router-dom";
const ErrorComponent = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <Tittle title="Pagina nu a fost găsită" />
        <Link to="/" className="error-btn">
          Inapoi acasă
        </Link>
      </div>
    </Wrapper>
  );
};

export default ErrorComponent;
