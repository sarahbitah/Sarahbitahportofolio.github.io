import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color, link}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{link}</span>
    </div>
  );
};

export default Card;
