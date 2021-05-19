import React from "react";
import "../components/MostViewed.scss";
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import Card from "./Card";
import Card1 from "../images/mostviewed/most-1.png";
import Card2 from "../images/mostviewed/most-2.png";
import Card3 from "../images/mostviewed/most-3.png";
import Card4 from "../images/mostviewed/most-4.png";
import Card5 from "../images/mostviewed/most-5.png";

const MostViewed = () => {
  return (
    <div className="mostViewed">
      <div className="mostViewed__heading">
        <h3>Most Viewed</h3>
        <FaceOutlinedIcon />
      </div>
      <div className="mostViewed__card">
        <Card img={Card1} />
        <Card img={Card2} />
        <Card img={Card3} />
        <Card img={Card4} />
        <Card img={Card5} />
      </div>
    </div>
  );
};

export default MostViewed;
