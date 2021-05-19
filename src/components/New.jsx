import React from 'react';
import "../components/New.scss";
import Card from "./Card";
import logo from "../images/logo.svg";
import card1 from "../images/new/new-1.png";
import card2 from "../images/new/new-2.png";
import card3 from "../images/new/new-3.png";
import card4 from "../images/new/new-4.png";
import card5 from "../images/new/new-5.png";
import card6 from "../images/new/new-6.png";

const New = () => {
    return (
        <div className="new">
            <div className="new__heading">
                <h3>New TO</h3>
                <img src={logo} alt="logo" />
            </div>
            <div className="new__card">
                <Card img={card1}/>
                <Card img={card2}/>
                <Card img={card3}/>
                <Card img={card4}/>
                <Card img={card5}/>
                <Card img={card6}/>
            </div>
        </div>
    )
}

export default New;
