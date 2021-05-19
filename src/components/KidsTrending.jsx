import React from 'react';
import "../components/KidsTrending.scss";
import Card from "./Card";
import StreetviewOutlinedIcon from '@material-ui/icons/StreetviewOutlined';
import card2 from "../images/kids-trend/kids-trend-2.png";
import card3 from "../images/kids-trend/kids-trend-3.png";
import card4 from "../images/kids-trend/most-1.png";

const KidsTrending = () => {
    return (
        <div className="kidsTrending">
        <div className="kidsTrending__heading">
        <h3>Top Picks For You</h3>
          <StreetviewOutlinedIcon/>
            </div>
            <div className="kidsTrending__card">
                <Card img={card4}/>
                <Card img={card2}/>
                <Card img={card3}/>
            </div>
        </div>
    )
}

export default KidsTrending;
