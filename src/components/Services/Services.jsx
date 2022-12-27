import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/uiux.png";
import Glasses from "../../img/wd.png";
import Humble from "../../img/bd.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './cv.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          What I Offer
          <br />
        </spane>
        <a href={Resume} open>
          <button className="button s-button">Open CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#FFEAEA" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX"}
            detail={""}
            link={<a href="https://dribbble.com/shots/19762460-Example-Major-Profile"><button className="c-button">VIEW MORE</button></a>}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={""}
            link={<a href="https://sarahbitah.github.io/cuscard.website/"><button className="c-button">VIEW MORE</button></a>}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Branding Designer"}
            detail={""}
            link={<a href="https://drive.google.com/drive/folders/1VpPcmZ8HoWJfJ11_o_roX5ZQgbVM7LQH"><button className="c-button">VIEW MORE</button></a>}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
