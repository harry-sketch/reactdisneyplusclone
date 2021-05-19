import React from 'react';
import Card from "./Card";
import "../components/Magic.scss";
import card1 from "../images/magic/mag-1.png"
import card2 from "../images/magic/mag-2.png"
import card3 from "../images/magic/mag-3.png"
import card4 from "../images/trending/trend-4.png";
import card5 from "../images/ever/ever-4.png";
import card6 from "../images/ever/ever-6.png";
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';

const Magic = () => {
    return (
        <div className="magic">
        <div className="magic__header">
        <h3>Magic & Fairy Tales</h3>
        <BrushOutlinedIcon/>
            </div>
            <div className="magic__card">
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

export default Magic;
