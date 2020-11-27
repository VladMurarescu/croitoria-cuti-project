import React, { useContext } from "react";
import "./InfosList.css";
import InfoCard from "../InfoCard/InfoCard";
import Loading from "../Loading/Loading";
import { InfosContext } from "../../context/infosContext";

const InfosList = () => {
  let { infos, loadingInfos } = useContext(InfosContext);
  if (loadingInfos) {
    return <Loading />;
  }
  return (
    <div className="info-list-container">
      {infos.map((info) => (
        <InfoCard
          key={info.id}
          title={info.title}
          description={info.description}
          img={info.photo.url}
        />
      ))}

      {/* <InfoCard />
      <InfoCard />
      <InfoCard /> */}
    </div>
  );
};

export default InfosList;
