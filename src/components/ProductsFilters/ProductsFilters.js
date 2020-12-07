import React, { useContext } from "react";
import "./ProductsFilters.css";
import { ProductsContext } from "../../context/productsContext";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const ProductsFilters = () => {
  let {
    products,
    productSearch,
    productCategory,
    inputChangeHandler,
    submitHandler,
    selectHandler,
  } = useContext(ProductsContext);

  let tempProductsCategory = getUnique(products, "category");
  tempProductsCategory = ["Selectează...", "All", ...tempProductsCategory];
  tempProductsCategory = tempProductsCategory.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <div className="products-filters-container">
      <form className="form-group">
        {/* <div className="products-search">
          <label htmlFor="productInput">Produs</label>
          <div className="search-input">
            <input
              type="text"
              id="productInput"
              value={productSearch}
              name="productSearch"
              placeholder="Introduceti numele"
              onChange={inputChangeHandler}
            />
            <button onClick={submitHandler}>
              <i className="search-icon fas fa-search"></i>
            </button>
          </div>
        </div> */}
        <div className="products-category">
          <label htmlFor="productsSelect">Categorie</label>
          <select
            name="productCategory"
            id="productsSelect"
            value={productCategory}
            onChange={selectHandler}
          >
            {tempProductsCategory}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductsFilters;
