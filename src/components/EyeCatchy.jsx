import React from 'react';
import "../components/EyeCatchy.scss";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Card from "./Card";
import card1 from "../images/eyecatch/eye-1.png";
import card2 from "../images/eyecatch/eye-2.png";
import card3 from "../images/eyecatch/eye-3.png";
import card4 from "../images/eyecatch/eye-4.png";
import card5 from "../images/eyecatch/eye-5.png";
import card6 from "../images/eyecatch/eye-6.png";

const EyeCatchy = () => {
    return (
        <div className="eyeCatchy">
            <div className="eyeCatchy__heading">
                <h3>Eye Catchy</h3>
                <VisibilityOutlinedIcon/>
            </div>
            <div className="eyeCatchy__card">
                   <Card img={card1}/>
                   <Card img={card2}/>
                   <Card img={card3}/>
                   <Card img={card4}/>
                   <Card img={card5}/>
                   <Card img={card6}/>
            </div>
        </div>
    )
}

export default EyeCatchy;
