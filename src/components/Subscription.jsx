import React from "react";
import { Link } from "react-router-dom";
import "../components/Subscription.scss";
import logo from "../images/logo.svg";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MainFooter from "./MainFooter";

const Subscription = () => {
  return (
    <>
    <div className="subs">
      <div className="subs__logo">
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="subs__login">
          LogIn
        </Link>
      </div>
      <div className="subs__main">
        <h4>Subscribe to get more out of Disney</h4>
        <div className="subs__mainBox">
          <div>
            <h5>Unlimited Live Sports </h5>
            <hr />
            <h5>Hotstar Specials & Star serials before TV </h5>
            <hr />
            <h5>Multiplex & new Indian movies </h5>
            <hr />
            <h5>Disney+ movies, Hollywood movies & Kids content</h5>
            <hr />
            <h5>English shows & Disney+ Originals</h5>
            <hr />
            <h5>Ad free entertainment </h5>
            <hr />
            <h5>Screens you can watch </h5>
            <hr />
            <h5>Video quality</h5>
            <hr />
          </div>
          <div className="subs__maindownBox">
            <div className="subs__cardBox">
              <h6>VIP</h6>
              <p>$50/year</p>
            </div>
            <div className="subs__cardBox">
              <h6>premium</h6>
              <p>$25/year</p>
            </div>
            <div className="subs__cardBox">
              <h6>normal</h6>
              <p>$15/year</p>
            </div>
          </div>

          <Link to="/home" className="subs__link">
            Continue
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
    <MainFooter/>
</>
  );
};

export default Subscription;
