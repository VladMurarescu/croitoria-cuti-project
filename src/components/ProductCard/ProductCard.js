import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <div className="product-card-container">
      <div className="product-photo">
        <img
          src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img"
        />
      </div>
      <div className="product-info">
        <h4>Titlu produs</h4>
        <h5>Categorie: categorie produs</h5>
      </div>
    </div>
  );
};

export default ProductCard;
