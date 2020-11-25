import React from "react";
import "./ProductsList.css";
import ProductCard from "../ProductCard/ProductCard";
const ProductsList = () => {
  return (
    <div className="product-list-container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsList;
