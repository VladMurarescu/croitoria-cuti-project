import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  return (
    <div className="product-card-container">
      <div className="product-photo">
        <img src={props.img} alt="img" />
      </div>
      <div className="product-info">
        <h4>{props.title}</h4>
        <h5>Categorie: {props.category}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
