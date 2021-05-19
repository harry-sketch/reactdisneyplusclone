import React from "react";
import { Link } from "react-router-dom";
import "../components/KidsSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../images/kids/kids-1.png";
import slider2 from "../images/kids/kids-2.png";
import slider3 from "../images/kids/kids-3.png";
import slider4 from "../images/kids/kids-4.png";
import slider5 from "../images/kids/kids-5.png";


const KidsSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <Slider {...settings} className="slider">
      <div className="wrap">
        <Link to="">
          <img src={slider5} alt="slider" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="">
          <img src={slider4} alt="slider" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="">
          <img src={slider3} alt="slider" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="">
          <img src={slider2} alt="slider" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="">
          <img src={slider1} alt="slider" />
        </Link>
      </div>

    </Slider>
  );
};

export default KidsSlider;
