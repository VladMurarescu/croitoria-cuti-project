import React, { Component, createContext } from "react";
import axios from "axios";
import { servicesUrl } from "../Url";

export const ServicesContext = createContext();

export default class ServicesProvider extends Component {
  state = {
    services: [],
    loadingServices: true,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      loadingServices: true,
    });
    axios.get(`${servicesUrl}`).then((response) => {
      let currentServices = response.data;
      console.log("Servicii de pe strapi: ", currentServices);
      this.setState({
        ...this.state,
        services: currentServices,
        loadingServices: false,
      });
    });
  }
  render() {
    return (
      <ServicesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ServicesContext.Provider>
    );
  }
}
