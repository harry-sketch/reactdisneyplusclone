import React from 'react';
import "../components/Friends.scss";
import Card from "./Card";
import card1 from "../images/move/movie-4.png";
import card2 from "../images/move/movie-8.png";
import card3 from "../images/move/movie-12.png";
import card4 from "../images/move/movie-16.png";
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';

const Friends = () => {
    return (
        <div className="friend">
        <div className="friend__heading">
            <h3>Best Friends Forever</h3>
            <SupervisorAccountOutlinedIcon/>
        </div>
        <div className="friend__card">
            <Card img={card1}/>
            <Card img={card2}/>
            <Card img={card3}/>
            <Card img={card4}/>
        </div>
            
        </div>

    )
}

export default Friends
