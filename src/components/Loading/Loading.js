import React from "react";
import Title from "../Title/Title";
import "./Loading.css";
import Gif from "./loading.gif";
const Loading = () => {
  return (
    <div className="loading-container">
      <Title title="se încarcă..." />
      <img src={Gif} alt="gif" />
    </div>
  );
};

export default Loading;
