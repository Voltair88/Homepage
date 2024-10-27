import React from "react";
import { Port } from "../global";
import { blogimg, ZeldaArena, football, freshkeeper } from "../img/index";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
  return (
    <Port>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <img src={slide.img} alt={slide.alt} loading="lazy" />
              <div className="card-info">
                <h2 className="card-title">{slide.title}</h2>
                <p className="card-text">{slide.text}</p>
                <div className="card-stack">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Port>
  );
};
export default Portfolio;
