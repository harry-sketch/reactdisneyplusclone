import React from 'react';
import "../components/Footer.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../images/logo.svg";
import google from "../images/google.png";
import apple from "../images/apple.png";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer id="kids__footer">
           <div className="footer__first">
               <p> &copy; All rights reserved {year} | Made by Aloof Programmer </p>
           </div>
           <div className="footer__second">
               <h4>Connect with us</h4>
               <div>
               
                   <GitHubIcon/>
                
                   <LinkedInIcon/>
               </div>
           </div>
           <div className="footer__third">
               <img src={logo} alt="logo" />
               <div>
                   <img src={google} alt="google" className="google__img"/>
                   <img src={apple} alt="apple" className="footer__img"/>
               </div>
           </div>
        </footer>
    )
}

export default Footer;
