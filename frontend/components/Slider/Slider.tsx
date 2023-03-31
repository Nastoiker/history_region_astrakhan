"use client"
import {useEffect, useRef, useState} from "react";
import SliderOpera  from '../Header/SliderOpera.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import {SliderProps} from "@/components/Slider/Slider.props";
export const SliderComponent = ({ slidersContent } : SliderProps) => {
  const [translateValue, setTranslateValue] = useState(0);
  const cardWidth = 240; // ширина одной карточки

  const handlePrev = () => {
    if (translateValue < 0) {
      setTranslateValue((prevValue) => prevValue + cardWidth * 5);
    }
  };

  const handleNext = () => {
    if (translateValue >= -(cardWidth * (phoneCards.length - 5))) {
      setTranslateValue((prevValue) => prevValue - cardWidth * 5);
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${translateValue}px)` }}
      >
        {phoneCards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.name} />
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={"z-10"}>

      <Slider
        // @ts-ignore

                {...settings }
              >
        {slidersContent.map( s =>  <div key={s.name}>
          <Image className="object-cover brightness-50 relative" alt='slider' src={s.img}/>
          <h1>ИНФОРМАЦИЯ</h1>
        </div>)}

      </Slider>
    </div>

  );
}
