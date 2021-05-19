import React from 'react';
import "../components/Later.scss";
import AddAlarmOutlinedIcon from '@material-ui/icons/AddAlarmOutlined';
import Card from "./Card";
import card1 from "../images/lat/later-1.png";
import card2 from "../images/lat/later-2.png";
import card3 from "../images/lat/later-3.png";
import card4 from "../images/lat/later-4.png";
import card5 from "../images/lat/later-5.png";
import card6 from "../images/lat/later-6.png";
import card7 from "../images/ever/ever-6.png";
import card8 from "../images/ever/ever-5.png";
import card9 from "../images/ever/ever-4.png";
import card10 from "../images/ever/ever-3.png";
import card11 from "../images/ever/ever-2.png";
import card12 from "../images/ever/ever-1.png";

const Later = () => {
    return (
        <div className="later">
        <div className="later__heading">
            <h3>Remind Me Later</h3>
            <AddAlarmOutlinedIcon/>
        </div>
        <div className="later__card">
        <Card img={card1}/>
        <Card img={card2}/>
        <Card img={card3}/>
        <Card img={card4}/>
        <Card img={card5}/>
        <Card img={card6}/>
        <Card img={card7}/>
        <Card img={card8}/>
        <Card img={card9}/>
        <Card img={card10}/>
        <Card img={card11}/>
        <Card img={card12}/>
        </div>   
        </div>
    )
}

export default Later
