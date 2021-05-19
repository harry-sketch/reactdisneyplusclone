import React from "react";
import "../components/Showcase.scss";
import card1 from "../images/card-1.png";
import card2 from "../images/card-2.png";
import card3 from "../images/card-3.png";
import card4 from "../images/card-4.png";
import card5 from "../images/card-5.png";
import video1 from "../videos/disney.mp4";
import video2 from "../videos/marvel.mp4";
import video3 from "../videos/ng.mp4";
import video4 from "../videos/pixar.mp4";
import video5 from "../videos/star-wars.mp4";

const Card = () => {
  return (
    <div className="showcase">
      <div className="box">
        <img src={card1} alt="card_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="box">
        <img src={card2} alt="card_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
      <div className="box">
        <img src={card3} alt="card_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video3} type="video/mp4" />
        </video>
      </div>
      <div className="box">
        <img src={card4} alt="card_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video4} type="video/mp4" />
        </video>
      </div>
      <div className="box">
        <img src={card5} alt="card_img" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video5} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Card;
