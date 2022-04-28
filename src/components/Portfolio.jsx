import React from "react";
import { Port } from "../global";
import { blogimg, stpeople, football, Quire, freshkeeper } from "../img/index";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);
const slides = [
  {
    img: blogimg,
    alt: "blogimg",
    text: "Blog",
  },
  {
    img: stpeople,
    alt: "stpeople",
  },
  {
    img: football,
    alt: "football",
  },
  {
    img: Quire,
    alt: "quire",
  },
  {
    img: freshkeeper,
    alt: "freshkeeper",
  },
];

const Portfolio = () => {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: { true: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Port>
      <h1 className="port-title">Portfolio</h1>
      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
      <Swiper {...swiperOptions}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.alt}>
            <img src={slide.img} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Port>
  );
};
export default Portfolio;
