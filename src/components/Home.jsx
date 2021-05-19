import React from 'react';
import "../components/Home.scss";
import Navbar from './Navbar';
import ImgSlider from './ImgSlider';
import Showcase from './Showcase';
import Trending from './Trending';
import Movies from './Movies';
import MostViewed from './MostViewed';
import Recomend from './Recomend';
import Originals from './Originals';
import New from './New';
import MainFooter from './MainFooter';
import EyeCatchy from './EyeCatchy';
import Evergreen from './Evergreen';
import Watchlist from './Watchlist';
import Later from './Later';
import Favourite from './Favourite';
import Inspired from './Inspired';

const Home = () => {
    return (
        <>
        <div className="home">
           <Navbar/>
           <ImgSlider/>
           <Showcase/>
           <Trending/>
           <MostViewed/>
           <Recomend/>
           <Evergreen/>
           <Originals/>
           <New/>
           <EyeCatchy/>
           <Watchlist/>
           <Inspired/>
           <Movies />
           <Favourite/>
           <Later/>
        </div>
        <MainFooter/>
        
        </>
    )
}

export default Home;
