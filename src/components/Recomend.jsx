import React from 'react';
import "../components/Recomend.scss";
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import Card from "./Card";
import reco1 from "../images/recomend/reco-1.png";
import reco2 from "../images/recomend/reco-2.png";
import reco3 from "../images/recomend/reco-3.png";
import reco4 from "../images/recomend/reco-4.png";
import reco5 from "../images/recomend/reco-5.png";
import reco6 from "../images/recomend/reco-6.png";

const Recomend = () => {
    return (
        <div className="recomend">
        <div className="recomend__heading">
        <h3>Recommended</h3>
        <FeaturedPlayListIcon/>
        </div>
        <div className="recomend__card">
            <Card img={reco1}/>
            <Card img={reco2}/>
            <Card img={reco3}/>
            <Card img={reco4}/>
            <Card img={reco5}/>
            <Card img={reco6}/>
        </div>
        </div>
    )
}

export default Recomend;
