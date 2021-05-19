import React from "react";
import "../components/Trending.scss";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import Card from "./Card";
import Card1 from "../images/trending/trend-1.png";
import Card2 from "../images/trending/trend-2.png";
import Card3 from "../images/trending/trend-3.png";
import Card4 from "../images/trending/trend-4.png";


const Trending = () => {
  return (
    <div className="trending">
      <div className="trending__heading">
        <h3 className="">Trending</h3>
        <WhatshotOutlinedIcon />
      </div>
      <div className="trending__card">
             <Card img = {Card1}/>
             <Card img = {Card2}/>
             <Card img = {Card3}/>
             <Card img = {Card4}/>
      </div>
    </div>
  );
};

export default Trending;
