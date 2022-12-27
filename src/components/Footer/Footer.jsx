import React from "react";
import "./Footer.css";
import Wave from "../../img/Vector5n.png";
import Wa from "@iconscout/react-unicons/icons/uil-whatsapp";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twt from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>2014502.sarahtsabitah@gmail.com</span>
        <div className="f-icons">
          <a href="https://web.whatsapp.com/"><Wa color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/sarah.tsabitah.1"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://twitter.com/swgyoonra"><Twt color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
