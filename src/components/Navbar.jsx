import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.scss";
import main__logo from "../images/logo.svg";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import watch from "../images/watchlist-icon.svg";
import home from "../images/home-icon.svg";
import movie from "../images/movie-icon.svg";
import original from "../images/original-icon.svg";
import series from "../images/series-icon.svg";
import kids from "../images/kids-icon.svg";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={main__logo} alt="home" className="main__logo" />
        </Link>
        <ul className="nav_links">
          <li className="nav_items">
            <Link to="/subs">
              <div className="nav_linksIcons">
                <img src={home} alt="nav" className="nav_logo" />
                <span> Home</span>
              </div>
            </Link>
          </li>
          <li className="nav_items">
            <Link to="/subs">
              <div className="nav_linksIcons">
                <img src={watch} alt="nav" className="nav_logo" />
                <span> WatchList</span>
              </div>
            </Link>
          </li>
          <li className="nav_items">
            <Link to="/subs">
              <div className="nav_linksIcons">
                <img src={movie} alt="nav" className="nav_logo" />
                <span> Movies</span>
              </div>
            </Link>
          </li>
          <li className="nav_items">
            <Link to="/subs">
              <div className="nav_linksIcons">
                <img src={original} alt="nav" className="nav_logo" />
                <span> Original</span>
              </div>
            </Link>
          </li>
          <li className="nav_items">
            <Link to="/subs">
              <div className="nav_linksIcons">
                <img src={series} alt="nav" className="nav_logo" />
                <span> Series</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <div className="navbar__search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <Link to="/subs" className="navbar__subscribe">
          SubsCribe
        </Link>
        <Link to="/" className="navbar__login">
          LogIn
        </Link>

        <Link to="/kids" >
          <img src={kids} alt="nav" className="nav_logo  kids_logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
