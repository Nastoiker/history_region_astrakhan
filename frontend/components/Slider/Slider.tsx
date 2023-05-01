import {useEffect, useRef, useState} from "react";


import Image from "next/image";
import {SliderProps} from "@/components/Slider/Slider.props";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/css';

export const SliderComponent = ({ slidersContent } : SliderProps) => {


  return (
<div className={"max-w-screen-2xl w-full"}>
  <Swiper  spaceBetween={1}
           slidesPerView={1}
           centeredSlidesBounds={true}
           onSlideChange={() => console.log('slide change')}
           onSwiper={(swiper) => console.log(swiper)}
  >
    {slidersContent.map( s =>
      <SwiperSlide  className="w-full h-full" key={s.name}>
      <div className="w-full">
        <img className="w-full h-full" alt='slider'  src={s.img.src}/>
      </div>
    </SwiperSlide>)}
  </Swiper>
</div>


  );
}
