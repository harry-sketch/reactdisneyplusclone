import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import "../components/Favourite.scss";
import Card from "./Card";
import card1 from "../images/fav/fav-1.png";
import card2 from "../images/fav/fav-2.png";
import card3 from "../images/fav/fav-3.png";
import card4 from "../images/fav/fav-4.png";

const Favourite = () => {
    return (
        <div className="favourite">
            <div className="favourite__heading">
                <h3>Favourites</h3>
                <FavoriteBorderOutlinedIcon/>
            </div>
            <div className="favourite__card">
                <Card img={card1}/>
                <Card img={card2}/>
                <Card img={card3}/>
                <Card img={card4}/>
            </div>
        </div>
    )
}

export default Favourite;
