import React, { useContext } from "react";
import "./ProductsList.css";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../context/productsContext";
import Loading from "../Loading/Loading";

const ProductsList = () => {
  let { filteredProducts, loadingProducts } = useContext(ProductsContext);

  if (loadingProducts) {
    return <Loading />;
  }

  return (
    <div className="product-list-container">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          img={product.photo.url}
        />
      ))}

      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </div>
  );
};

export default ProductsList;
