"use client"
import {useEffect, useRef, useState} from "react";
import SliderOpera  from '../Header/SliderOpera.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import {SliderProps} from "@/components/Slider/Slider.props";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
export const SliderComponent = ({ slidersContent } : SliderProps) => {


  return (
    <div className={"z-10"}>

      <Swiper  spaceBetween={1}

               slidesPerView={1}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
              >
        {slidersContent.map( s =>  <SwiperSlide key={s.name}>
          <Image className="object-cover brightness-50 relative" alt='slider' src={s.img}/>
          <h1>ИНФОРМАЦИЯ</h1>
        </SwiperSlide>)}

      </Swiper>
    </div>

  );
}
