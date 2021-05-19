import React from 'react';
import "../components/Card.scss";

const Card = (props) => {
    return (
        <div className="card">
        <div className="card__wrap">
        
            <img src={props.img} alt="card__img" />
            
            </div>
        </div>
    )
}

export default Card;
