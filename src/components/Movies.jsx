import React from "react";
import "../components/Movies.scss";
import MovieFilterOutlinedIcon from "@material-ui/icons/MovieFilterOutlined";
// import Card from "./Card";
import ScrollCard from "./ScrollCard";
import Card1 from "../images/move/movie-1.png";
import Card2 from "../images/move/movie-2.png";
import Card3 from "../images/move/movie-3.png";
import Card4 from "../images/move/movie-4.png";
import Card5 from "../images/move/movie-5.png";
import Card6 from "../images/move/movie-6.png";
import Card7 from "../images/move/movie-7.png";
import Card8 from "../images/move/movie-8.png";
import Card9 from "../images/move/movie-9.png";
import Card10 from "../images/move/movie-10.png";
import Card11 from "../images/move/movie-11.png";
import Card12 from "../images/move/movie-12.png";
import Card13 from "../images/move/movie-13.png";
import Card14 from "../images/move/movie-14.png";
import Card15 from "../images/move/movie-15.png";
import Card16 from "../images/move/movie-16.png";
import Card17 from "../images/move/movie-17.png";
import Card18 from "../images/move/movie-18.png";

const Movies = () => {
  return (
    <div id="movies">
      <div className="movies__heading">
        <h3>Click the Finest Movies</h3>
        <MovieFilterOutlinedIcon />
      </div>
      <div className="movies__card">
        <ScrollCard img={Card1} />
        <ScrollCard img={Card2} />
        <ScrollCard img={Card3} />
        <ScrollCard img={Card4} />
        <ScrollCard img={Card5} />
        <ScrollCard img={Card6} />
        <ScrollCard img={Card7} />
        <ScrollCard img={Card8} />
        <ScrollCard img={Card9} />
        <ScrollCard img={Card10} />
        <ScrollCard img={Card11} />
        <ScrollCard img={Card12} />
        <ScrollCard img={Card13} />
        <ScrollCard img={Card14} />
        <ScrollCard img={Card15} />
        <ScrollCard img={Card16} />
        <ScrollCard img={Card17} />
        <ScrollCard img={Card18} />
      </div>
    </div>
  );
};

export default Movies;
