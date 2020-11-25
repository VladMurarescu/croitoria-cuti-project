import React from "react";
import "./ProductsFilters.css";
const ProductsFilters = () => {
  return (
    <div className="products-filters-container">
      <form className="form-group">
        <div className="products-search">
          <label htmlFor="productInput">Produs</label>
          <div className="search-input">
            <input
              type="text"
              id="productInput"
              name="productSearch"
              placeholder="Introduceti numele"
            />
            <button>
              <i className="search-icon fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="products-category">
          <label htmlFor="productsSelect">Categorie</label>
          <select name="productsCategory" id="productsSelect">
            <option value="optiune1">optiune1</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductsFilters;
