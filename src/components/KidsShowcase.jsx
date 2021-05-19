import React from 'react';
import "../components/KidsShowcase.scss";
import ScrolCard from "./ScrollCard";
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import card1 from "../images/kidsshow/kidsshow-1.png";
import card2 from "../images/kidsshow/kidsshow-2.png";
import card3 from "../images/kidsshow/kidsshow-3.png";
import card4 from "../images/kidsshow/kidsshow-4.png";
import card5 from "../images/kidsshow/kidsshow-5.png";
import card6 from "../images/kidsshow/kidsshow-6.png";

const KidsShowcase = () => {
    return (
         <div className="kidsShowcase">
         <div className="kidsshowcase__heading">
             <h3>Guess Your Favourite Series</h3>
             <TrackChangesOutlinedIcon/>
         </div>
        <div className="kidsShowcase__card">
         <ScrolCard img={card1}/>
         <ScrolCard img={card2}/>
         <ScrolCard img={card3}/>
         <ScrolCard img={card4}/>
         <ScrolCard img={card5}/>
         <ScrolCard img={card6}/>
        </div>
        </div>
    )
}

export default KidsShowcase
