import React from 'react';
import "../components/ScrollCard.scss";

const ScrollCard = ({img}) => {
    return (
        <div className="scrollCard">
        
        <div className="scroll__wrap">
            <img src={img} alt="img" />
            </div>   
        </div>
    )
}

export default ScrollCard;
