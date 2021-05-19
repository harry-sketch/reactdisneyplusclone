import React from 'react';
import "../components/Evergreen.scss";
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import ScrollCard from "./ScrollCard";
import card1 from "../images/ever/ever-1.png";
import card2 from "../images/ever/ever-2.png";
import card3 from "../images/ever/ever-3.png";
import card4 from "../images/ever/ever-4.png";
import card5 from "../images/ever/ever-5.png";
import card6 from "../images/ever/ever-6.png";

const Evergreen = () => {
    return (
        <div className="evergreen">
        <div className="evergreen__heading">
            <h3>EverGreen</h3>
            <AcUnitOutlinedIcon/>
        </div>
            <div className="evergreen__card">
                <ScrollCard img={card1}/>
                <ScrollCard img={card2}/>
                <ScrollCard img={card3}/>
                <ScrollCard img={card4}/>
                <ScrollCard img={card5}/>
                <ScrollCard img={card6}/>
            </div>
        </div>
    )
}

export default Evergreen;
