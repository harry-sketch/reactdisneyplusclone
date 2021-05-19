import React from 'react';
import {Link} from "react-router-dom";
import "../components/KidsNav.scss";
import logo1 from "../images/logo.svg";
import logo2 from "../images/kids-icon.svg";
import YoutubeSearchedForOutlinedIcon from '@material-ui/icons/YoutubeSearchedForOutlined';

const KidsNav = () => {
    return (
        <nav className="kidsnav">
        <Link to="/">
        <div className="kidsnav__logo">
            <img src={logo1} alt="logo" className="main__logo" />
            <img src={logo2} alt="logo" className="kids__logo"/>
            </div>
            </Link>
            <div className="kidsnav__search">
                <div className="kids__search">
                        <input type="text" placeholder="Search" />
                        <YoutubeSearchedForOutlinedIcon/>
                </div>
                <Link to="/home" className="kids__link">
                    Exit Kids
                </Link>
                <Link to="/" className="kids__login">
                    LogIn
                </Link>
            </div>

        </nav>
    )
}

export default KidsNav;
