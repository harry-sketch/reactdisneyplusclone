import React from 'react';
import "../components/Inspired.scss";
import Card from "./Card";
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import card1 from "../images/inspired/ins-1.png";
import card2 from "../images/inspired/ins-2.png";
import card3 from "../images/inspired/ins-3.png";
import card4 from "../images/inspired/ins-4.png";
import card5 from "../images/inspired/ins-5.png";

const Inspired = () => {
    return (
        <div className="inspired">
            <div className="inspired__heading">
                <h3>Inspired By True Stories</h3>
                <AccessibilityNewOutlinedIcon/>
            </div>
            <div className="inspired__card">
                <Card img={card1}/>
                <Card img={card2}/>
                <Card img={card3}/>
                <Card img={card4}/>
                <Card img={card5}/>
            </div>
        </div>
    )
}

export default Inspired
