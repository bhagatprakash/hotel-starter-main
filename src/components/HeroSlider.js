import React from "react";

// import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT SWIPER STYLE
import "swiper/css";
import "swiper/css/effect-fade";

// import requred module

import { EffectFade, Autoplay } from "swiper";

// images

import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "Show our Room ",
  },
  {
    title: "your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "Show our Room ",
  },
  {
    title: "your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "Show our Room ",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 300,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        // destureslide
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="h-ful relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Just Injoy And Relax
              </div>
              <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                src={slide.bg}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>

            {/* overlay  */}

            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
