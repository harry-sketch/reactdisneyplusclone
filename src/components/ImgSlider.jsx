import React from "react";
import { Link } from "react-router-dom";
import "../components/ImgSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../images/slider/slider-1.png";
import slider2 from "../images/slider/slider-2.png";
import slider3 from "../images/slider/slider-3.png";
import slider4 from "../images/slider/slider-4.png";
import slider5 from "../images/slider/slider-5.png";

const ImgSlider = () => {
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
          <img src={slider2} alt="slider" />
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
          <img src={slider5} alt="slider" />
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

export default ImgSlider;
