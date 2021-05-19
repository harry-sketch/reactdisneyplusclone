import React from 'react';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import "../components/Sing.scss";
import Card from "./Card";
import card1 from "../images/sing/sing-1.png";
import card2 from "../images/sing/sing-2.png";
import card3 from "../images/eyecatch/eye-3.png";
import card4 from "../images/ever/ever-2.png";
import card5 from "../images/ever/ever-3.png";


const Sing = () => {
    return (
        <div className="sing">
        <div className="sing__header">
            <h3>Sing Your Heart Out</h3>
                <MusicNoteOutlinedIcon/>
        </div>
        <div className="sing__card">
            <Card img={card1}/>
            <Card img={card2}/>
            <Card img={card3}/>
            <Card img={card4}/>
            <Card img={card5}/>
        </div>
            
        </div>
    )
}

export default Sing
