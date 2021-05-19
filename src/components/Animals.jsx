import React from 'react';
import "../components/Animals.scss";
import Card from "./Card";
import PetsIcon from '@material-ui/icons/Pets';
import card1 from "../images/animals/ani-1.png";
import card2 from "../images/animals/ani-2.png";
import card3 from "../images/animals/ani-3.png";
import card4 from "../images/animals/ani-4.png";
import card5 from "../images/animals/ani-5.png";
import card6 from "../images/animals/ani-6.png";

const Animals = () => {
    return (
        <div className="animals">
        <div className="animals__heading">
            <h3>Amazing Animals</h3>
            <PetsIcon/>
        </div>
            <div className="animals__card">
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

export default Animals;
