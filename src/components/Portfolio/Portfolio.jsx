import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import pkk from "../../img/pkk.png";
import major from "../../img/jurusan.png";
import Vector from "../../img/mtk.png";
import LevSiOne from "../../img/lso.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Portofolio</span>
      <span>Project</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={major} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Vector} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LevSiOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pkk} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
