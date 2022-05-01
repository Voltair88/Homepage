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
    title: "Blog",
    text: "A blog made with node and ejs.",
    href: "https://github.com/Voltair88/node-test",
  },
  {
    img: stpeople,
    alt: "stpeople",
    title: "Star Wars API",
    text: "A simple API for Star Wars data.",
    href: "https://github.com/Voltair88/star-wars-app",
  },
  {
    img: football,
    alt: "football",
    title: "Football API",
    text: "Powered by Football-Data and API-Sports.",
    href: "https://github.com/Voltair88/fe20tp2_bev_-5-",
  },
  {
    img: Quire,
    alt: "quire",
    title: "Quire",
    text: "Quire is an online note-taking application.",
    href: "https://github.com/Voltair88/fe20tp1_-Vellum-",
  },
  {
    img: freshkeeper,
    alt: "freshkeeper",
    title: "Freshkeeper",
    text: "An app that helps you keep track of you'r food items",
    href: "https://github.com/Voltair88/freshkeeper-dev",
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
      <h1 className="port-title">Portfolio</h1>
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
