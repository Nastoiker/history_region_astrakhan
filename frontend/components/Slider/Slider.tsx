import {useEffect, useRef, useState} from "react";


import Image from "next/image";
import {SliderProps} from "@/components/Slider/Slider.props";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/css';

export const SliderComponent = ({ slidersContent } : SliderProps) => {


  return (
<div className={"max-w-screen-xl w-fit"}>
  <Swiper  spaceBetween={1}
           slidesPerView={1}
           centeredSlidesBounds={true}
           onSlideChange={() => console.log('slide change')}
           onSwiper={(swiper) => console.log(swiper)}
  >
    {slidersContent.map( s =>
      <SwiperSlide key={s.name}>
      <div>
        <img className="" alt='slider' src={s.img.src}/>
      </div>
    </SwiperSlide>)}
  </Swiper>
</div>


  );
}
