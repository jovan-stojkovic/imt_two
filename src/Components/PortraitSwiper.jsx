import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

const headline = "IMT TRAKTORI";

const slidesPortrait = [
  { image: "/logos/bg-portrait.jpg" },
  {
    image: "/swiper/jm00 portrait.jpg",
    headline: headline,
    text: "INDUSTRIJA MEHANIZACIJE I TRAKTORA je ekskluzivni distributer kompanije Tractors and Farm Equipment Limited - TAFE za brend traktora IMT i TAFE za tržište Srbije.",
  },
  {
    image: "/swiper/jm01 portrait.jpg",
    headline: headline,
    text: "Sklapamo traktore u pogonima IMT u Jarkovcu, opština Sečanj. Traktori se dopremaju u nesastavljenom stanju i namenjeni su za industrijsku montažu.",
  },
  {
    image: "/swiper/jm02 portrait.jpg",
    headline: headline,
    text: "Najbolji izbor za sve Vaše potrebe! Traktori od 26KS - 85KS za korišćenje u ratarstvu, vinogradarstvu kao i komunalnoj delatnosti.",
  },
  {
    image: "/swiper/jm03 portrait.jpg",
    headline: headline,
    text: "Najbolji izbor za sve Vaše potrebe! Garantni period od dve godine ili 2000h.",
  },
];

const PortraitSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      navigation
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="custom-swiper portrait-swiper"
    >
      {slidesPortrait.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <img src={slide.image} alt="" />
            {slide.headline && (
              <div className="slide-text">
                <h2>{slide.headline}</h2>
                <p>{slide.text}</p>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortraitSwiper;
