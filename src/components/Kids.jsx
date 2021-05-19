import React from 'react';
import "../components/Kids.scss";
import KidsNav from './KidsNav';
import KidsSlider from './KidsSlider';
import Showcase from './Showcase';
import Later from './Later';
import Footer from "./Footer";
import KidsTrending from './KidsTrending';
import KidsPopular from './KidsPopular';
import Sing from './Sing';
import Magic from './Magic';
import Animals from './Animals';
import World from './World';
import Friends from './Friends';
import KidsSpecial from './KidsSpecial';
import KidsShowcase from './KidsShowcase';


const Kids = () => {
    return (
        <>
        <div className="kids">
            <KidsNav/>
            <KidsSlider/>
            <Showcase/>
            <KidsShowcase/>
            <KidsTrending/>
            <KidsPopular/>
            <Sing/>
            <Magic/>
            <Animals/>
            <World/>
            <Friends/>
            <KidsSpecial/>
            <Later/>
        </div>
        <Footer/>
        </>
    )
}

export default Kids;
