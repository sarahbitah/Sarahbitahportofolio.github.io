import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import profilePic1 from "../../img/magang.png";
import profilePic2 from "../../img/bebras.png";
import profilePic3 from "../../img/jb.png";
import profilePic4 from "../../img/sitcom.png";
import profilePic5 from "../../img/sm.png";
import profilePic6 from "../../img/zeta.png";
import profilePic7 from "../../img/arab.png";
import profilePic8 from "../../img/tsdn.png";
import profilePic9 from "../../img/sv.png";
import profilePic10 from "../../img/ruji.png";
import profilePic11 from "../../img/mb.png";
import profilePic12 from "../../img/ss.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Participants in the Internship Period (June 28 - July 7, 2022) at PT. National Housing Consumers.",
    },
    {
      img: profilePic2,
      review:
        "Enforcer Category Participants",
    },
    {
      img: profilePic3,
      review:
        "Online Class Participants",
    },
    {
      img: profilePic4,
      review:
        "2nd winner at Lomba Sitcom 2022",
    },
    {
      img: profilePic5,
      review:
        "3nd winner at Lomba Short Movie SMART FC 2022",
    },
    {
      img: profilePic6,
      review:
        "National Gold Medalist",
    },
    {
      img: profilePic7,
      review:
        "Online Class Participants",
    },
    {
      img: profilePic8,
      review:
        "Top 5 Turnamen Sains Data Nasional 2022",
    },
    {
      img: profilePic9,
      review:
        "Vocal Solo Competition",
    },
    {
      img: profilePic10,
      review:
        "Rujie Participants",
    },
    {
      img: profilePic11,
      review:
        "Mayoral Cup Marching Band Participant",
    },
    {
      img: profilePic12,
      review:
        "School Digitization Committee",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span></span>
        <span>Experience </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "pink" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination,]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centerSlide={true}
        fade={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;