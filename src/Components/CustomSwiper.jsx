import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import "../Styles/CustomSwiper.scss";
import { motion } from "framer-motion";

const headline = "IMT TRAKTORI";

const slides = [
  {
    image: "/swiper/jm03.jpg",
    headline: headline,
    text: "Najbolji izbor za sve Vaše potrebe! Garantni period od dve godine ili 2000h.",
  },
  {
    image: "/swiper/jm00.jpg",
    headline: headline,
    text: "INDUSTRIJA MEHANIZACIJE I TRAKTORA je ekskluzivni distributer kompanije Tractors and Farm Equipment Limited - TAFE za brend traktora IMT i TAFE za tržište Srbije.",
  },
  {
    image: "/swiper/jm01.jpg",
    headline: headline,
    text: "Sklapamo traktore u pogonima IMT u Jarkovcu, opština Sečanj. Traktori se dopremaju u nesastavljenom stanju i namenjeni su za industrijsku montažu.",
  },
  {
    image: "/swiper/jm02.jpg",
    headline: headline,
    text: "Najbolji izbor za sve Vaše potrebe! Traktori od 26KS - 85KS za korišćenje u ratarstvu, vinogradarstvu kao i komunalnoj delatnosti.",
  },
];

const swiperMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 0.5,
    },
  },
};

const CustomSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      navigation
      loop={true}
      autoplay={{
        delay: 3800,
        disableOnInteraction: false,
      }}
      className="custom-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="slide-content"
            variants={swiperMotion}
            initial="hidden"
            animate="visible"
          >
            <img src={slide.image} alt="" />
            <div className="slide-text">
              <h2>{slide.headline}</h2>
              {slide.text}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
