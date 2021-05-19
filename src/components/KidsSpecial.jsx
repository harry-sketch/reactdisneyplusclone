import React from 'react';
import "../components/KidsSpecial.scss";
import Card  from "./Card";
import card1 from "../images/mostviewed/most-3.png";
import card2 from "../images/mostviewed/most-1.png";
import card3 from "../images/mostviewed/most-2.png";
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';

const KidsSpecial = () => {
    return (
        <div className="kidsspecial">
        <div className="kidsspecial__heading">
            <h3>Kids Special</h3>
            <ChildCareOutlinedIcon/>
        </div>
            <div className="kidsspecial__card">
                <Card img={card1}/>
                <Card img={card2}/>
                <Card img={card3}/>
            </div>
        </div>
    )
}

export default KidsSpecial;
