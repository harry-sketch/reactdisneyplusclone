import React from 'react';
import "../components/Originals.scss";
import Card from "./Card";
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import Card1 from "../images/origi/ori-1.png";
import Card2 from "../images/origi/ori-2.png";
import Card3 from "../images/origi/ori-3.png";
import Card4 from "../images/origi/ori-4.png";
import Card5 from "../images/origi/ori-5.png";
import Card6 from "../images/origi/ori-6.png";

const Originals = () => {
    return (
        <div className="original">
        <div className="original__heading">
            <h3>Originals</h3>
            <StarsOutlinedIcon/>
        </div>
            <div className="original__card">
                <Card img={Card1}/>
                <Card img={Card2}/>
                <Card img={Card3}/>
                <Card img={Card4}/>
                <Card img={Card5}/>
                <Card img={Card6}/>
            </div>
        </div>
    )
}

export default Originals;
