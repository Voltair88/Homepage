import React from "react";
import { Port } from "../global";
import { blogimg, stpeople, football, Quire, freshkeeper } from "../img/index";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
const Portfolio = () => {
  return (
    <Port>
      <h1 className="port-title">Portfolio</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <img src={blogimg} alt="blogimg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={stpeople} alt="stpeople" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={football} alt="football" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Quire} alt="Quire" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={freshkeeper} alt="freshkeeper" />
        </SwiperSlide>
      </Swiper>
    </Port>
  );
};
export default Portfolio;
