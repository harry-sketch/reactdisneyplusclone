import React from "react";
import { Link } from "react-router-dom";
import "../components/Login.scss";
import top from "../images/login_top.svg";
import bottom from "../images/login_bottom.png";

const Login = () => {
  return (
    <div className="login">
      <img src={top} alt="login" className="login_img" />
      <Link to="/home" className="login_link">
        Want to Explore More !!
      </Link>

      <p className="login_para">
        Disney+ Hotstar is an online video streaming platform owned by Novi
        Digital Entertainment Private Limited, a wholly owned subsidiary of Star
        India Private Limited.Disney+ Hotstar currently offers over 100,000
        hours of TV content and movies across 9 languages, and every major sport
        covered.Disney+ is the one-stop destination for your favorite movies and
        series from Disney. Pixar, Marvel, Star Wars,Frozen,Piper,Agent
        Carter,The Phatom Menace,Elephant and National Geographic. Watch them
        all ...
      </p>

      <img src={bottom} alt="login" className="login_img" />
    </div>
  );
};

export default Login;
