import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";
import "../Styles/CustomSwiper.scss";

const slides = [
  {
    image: "/swiper/jm00.jpg",
    text: "INDUSTRIJA MEHANIZACIJE I TRAKTORA je ekskluzivni distributer kompanije Tractors and Farm Equipment Limited - TAFE za brend traktora IMT i TAFE za tržište Srbije.",
  },
  {
    image: "/swiper/jm01.jpg",
    text: "Sklapamo traktore u pogonima IMT u Jarkovcu, opština Sečanj. Traktori se dopremaju u nesastavljenom stanju i namenjeni su za industrijsku montažu.",
  },
  {
    image: "/swiper/jm00.jpg",
    text: "Najbolji izbor za sve Vaše potrebe! Traktori od 26KS - 85KS za korišćenje u ratarstvu, vinogradarstvu kao i komunalnoj delatnosti.",
  },
  {
    image: "/swiper/jm01.jpg",
    text: "Najbolji izbor za sve Vaše potrebe! Garantni period od dve godine ili 2000h.",
  },
];

const CustomSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      navigation
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="custom-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <img src={slide.image} alt="" />
            <div className="slide-text">
              <h2>IMT TRAKTORI</h2>
              {slide.text}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
