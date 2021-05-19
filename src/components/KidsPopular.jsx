import React from 'react';
import "../components/KidsPopular.scss";
import Card from "./Card";
import card1 from "../images/pop/pop-1.png";
import card2 from "../images/pop/pop-2.png";
import card3 from "../images/pop/pop-3.png";
import card4 from "../images/pop/pop-4.png";
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

const KidsPopular = () => {
    return (
        <div className="popular">
            <div className="popular__heading">
                <h3>Popular</h3>
                <EventAvailableOutlinedIcon/>
            </div>
            <div className="popular__card">
                <Card img={card1}/>
                <Card img={card2}/>
                <Card img={card3}/>
                <Card img={card4}/>
            </div>

        </div>
    )
}

export default KidsPopular
