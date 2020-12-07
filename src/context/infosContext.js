import React, { Component, createContext } from "react";
import axios from "axios";
import { infosUrl } from "../Url";
import { dataUrl } from "../Url";

export const InfosContext = createContext();

export default class InfosProvider extends Component {
  state = {
    infos: [],
    loadingInfos: true,
    data: [],
    loadingData: true,
  };

  componentDidMount() {
    this.setState({ ...this.state, loadingInfos: true, loadingData: true });
    axios.get(`${infosUrl}`).then((response) => {
      let currentInfos = response.data;
      console.log("Informatii de pe strapi: ", currentInfos);
      this.setState({
        ...this.state,
        infos: currentInfos,
        loadingInfos: false,
      });
    });
    axios.get(`${dataUrl}`).then((response) => {
      let currentData = response.data;
      console.log("Datele de pe strapi: ", currentData);
      this.setState({ ...this.state, data: currentData, loadingData: false });
    });
  }

  render() {
    return (
      <InfosContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </InfosContext.Provider>
    );
  }
}
