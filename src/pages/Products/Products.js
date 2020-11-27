import React from "react";
import "./Products.css";
import ProductsTop from "../../components/ProductsTop/ProductsTop";
import ProductsFilters from "../../components/ProductsFilters/ProductsFilters";
import ProductsList from "../../components/ProductsList/ProductsList";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
const Products = () => {
  return (
    <Wrapper>
      <ProductsTop />
      <Title title="Inspiră-te din creațiile noastre" />
      <ProductsFilters />
      <ProductsList />
    </Wrapper>
  );
};

export default Products;
