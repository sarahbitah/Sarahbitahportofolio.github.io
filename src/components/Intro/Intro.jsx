import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector2.png";
import Vector2 from "../../img/Vector3.png";
import boy from "../../img/girln.png";
import glassesimoji from "../../img/bunga.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/Vector4.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/Ghn.png";
import LinkedIn from "../../img/lin.png";
import Instagram from "../../img/ign.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Sarah Tsabitah</span>
          <span>
          Someone who is passionate and likes to learn new things. I have an interest in website development, especially on the front end. I have dedication and responsibility. It leads me to work on several projects.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/sarahbitah"><img src={Github} alt=""/></a>
          <a href="https://www.linkedin.com/in/sarah-tsabitah-15770b23b/"><img src={LinkedIn} alt=""/></a>
          <a href="https://www.instagram.com/sarahbitah/"><img src={Instagram} alt=""/></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Junior Frontend" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Trusted" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#FFEAEA",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
