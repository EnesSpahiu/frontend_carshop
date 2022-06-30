import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
            style={{ width: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
            style={{ width: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.ichkoche.at/data/image/variations/250x167/1/apfel-img-9270.jpg"
            style={{ width: "400px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
