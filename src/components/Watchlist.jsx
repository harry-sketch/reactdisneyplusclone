import React from 'react';
import "../components/Watchlist.scss";
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import Card from "./Card";
import card1 from "../images/watch/watch-1.png";
import card2 from "../images/watch/watch-2.png";
import card3 from "../images/watch/watch-3.png";
import card4 from "../images/watch/watch-4.png";

const Watchlist = () => {
    return (
        <div className="watchlist">
        <div className="watchlist__heading">
            <h3>WatchList</h3>
            <LoyaltyOutlinedIcon/>
        </div>
        <div className="watchlist__card">
            <Card img={card1}/>
            <Card img={card2}/>
            <Card img={card3}/>
            <Card img={card4}/>
        </div>
            
        </div>
    )
}

export default Watchlist;
