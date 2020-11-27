import React, { Component, createContext } from "react";
import axios from "axios";
import { productsUrl } from "../Url";

export const ProductsContext = createContext();

export default class ProductsProvider extends Component {
  state = {
    products: [],
    loadingProducts: true,
    productSearch: "",
    productCategory: "",
    filteredProducts: [],
  };

  componentDidMount() {
    this.setState({ ...this.state, loadingProducts: true });
    axios.get(`${productsUrl}`).then((response) => {
      let currentProducts = response.data;
      currentProducts = currentProducts.reverse();
      console.log("produse de pe strapi: ", currentProducts);
      this.setState({
        ...this.state,
        products: currentProducts,
        filteredProducts: currentProducts,
        loadingProducts: false,
      });
    });
  }

  inputChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let { products, productSearch } = this.state;
    let tempProducts = [...products];
    if (productSearch !== "") {
      tempProducts = tempProducts.filter((product) =>
        product.title.toUpperCase().includes(productSearch.toUpperCase())
      );
    }
    this.setState({
      ...this.state,
      filteredProducts: tempProducts,
      productCategory: "Selectează",
    });
  };

  selectHandler = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ ...this.state, [name]: value }, this.filterProducts);
  };

  filterProducts = () => {
    let { products, productCategory } = this.state;
    let tempProducts = [...products];
    if (productCategory === "All") {
      this.setState({
        ...this.state,
        filteredProducts: tempProducts,
        productSearch: "",
      });
    }
    if (productCategory !== "All") {
      tempProducts = tempProducts.filter(
        (item) => item.category === productCategory
      );
      this.setState({
        ...this.state,
        filteredProducts: tempProducts,
        productSearch: "",
      });
    }
  };
  render() {
    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          inputChangeHandler: this.inputChangeHandler,
          submitHandler: this.submitHandler,
          selectHandler: this.selectHandler,
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
