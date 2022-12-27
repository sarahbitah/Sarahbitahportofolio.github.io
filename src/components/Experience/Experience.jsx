import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>SD</div>
        <span  style={{color: darkMode?'white':''}}>SDN PEGANGSAAN DUA 05 PAGI</span>
        <span>Elementary School</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>SMP</div>
        <span  style={{color: darkMode?'white':''}}>SMPN 170 JAKARTA</span>
        <span>Junior High School</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>SMK</div>
        <span  style={{color: darkMode?'white':''}}>SMKN 26 JAKARTA</span>
        <span>Vocational High School</span>
      </div>
    </div>
  );
};

export default Experience;
