import React from "react";
import { Port } from "../global";
import { blogimg, ZeldaArena, football, freshkeeper } from "../img/index";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);
const slides = [
  {
    img: ZeldaArena,
    alt: "Zelda Arena",
    title: "Zelda Arena",
    text: "A game made in Typescript and Javascript where you eliminate the enemy to get the highest score",
    href: "https://github.com/Voltair88/Zelda_Arena",
  },
  {
    img: football,
    alt: "football",
    title: "Football API",
    text: "Powered by Football-Data and API-Sports.",
    href: "https://github.com/Voltair88/fe20tp2_bev_-5-",
  },
  {
    img: freshkeeper,
    alt: "Freshkeeper mobile App",
    title: "Freshkeeper mobile App",
    text: "An app that helps you keep track of your food items",
    href: "https://github.com/Voltair88/freshkeeperApp",
  },
  {
    img: freshkeeper,
    alt: "Freshkeeper Web App",
    title: "Freshkeeper Web App",
    text: "A webbapp that helps you keep track of your food items",
    href: "https://github.com/Voltair88/freshkeeper-dev",
  },
  {
    img: blogimg,
    alt: "blogimg",
    title: "Blog",
    text: "A blog made with node and ejs.",
    href: "https://github.com/Voltair88/node-test",
  },
];

const Portfolio = () => {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
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
      <Swiper {...swiperOptions}>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="card">
              <img src={slide.img} alt={slide.alt} loading="lazy" />
              <div className="card-info">
                <h2 className="card-title">{slide.title}</h2>
                <p className="card-text">{slide.text}</p>
                <a
                  href={slide.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="card-button"
                >
                  View
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Port>
  );
};
export default Portfolio;
