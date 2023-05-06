import {useEffect, useRef, useState} from "react";

import GerbCenter from '../MainHomeSlider/GERBCENTER.png';

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
      <SwiperSlide  className="w-fit h-fit" key={s.name}>
        <div className="w-full relative">
                    <Image className={"mx-auto w-fit absolute z-10 left-0 right-0 w-20 top-0 bottom-0 my-auto"} alt='slider' src={GerbCenter}/>

        <img className="w-fit h-fit" alt='slider'  src={s.img.src}/>
      </div>
    </SwiperSlide>)}
  </Swiper>
</div>


  );
}
