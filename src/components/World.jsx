import React from 'react';
import "../components/World.scss";
import Card from "./Card";
import card1 from "../images/watch/watch-1.png";
import card2 from "../images/move/movie-1.png";
import card3 from "../images/move/movie-15.png";
import card4 from "../images/move/movie-13.png";
import card5 from "../images/move/movie-10.png";
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

const World = () => {
    return (
        <div className="world">
        <div className="world__heading">
            <h3>Out of this World</h3>
            <LanguageOutlinedIcon/>
        </div>
        <div className="world__card">
            <Card img={card1}/>
            <Card img={card2}/>
            <Card img={card3}/>
            <Card img={card4}/>
            <Card img={card5}/>
        </div>
            
        </div>
    )
}

export default World;
