import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"

import { SliderProps } from "@/components/Slider/Slider.props"
import GerbCenter from "../MainHomeSlider/GERBCENTER.png"
import "keen-slider/keen-slider.min.css"

export const SliderComponent = ({ slidersContent }: SliderProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      drag: true,
      loop: true,
      slides: {
        perView: 1,
      },
      slideChanged() {
        console.log("slide changed")
      },
    },
    [
      // add plugins here
    ]
  )
  return (
    <div ref={ref} className={"flex w-full keen-slider relative"}>
      {slidersContent.map((s, index) => (
        <div className={" keen-slider__slide w-full"}>
          <Image
            className={
              " object-fill mx-auto w-fit absolute z-10 left-0 right-0  top-0 bottom-0 my-auto"
            }
            alt="slider"
            src={GerbCenter}
          />

          <img
            className=" object-contain w-full h-fit"
            alt="slider"
            src={s.img.src}
          />
        </div>
      ))}
    </div>
  )
}
