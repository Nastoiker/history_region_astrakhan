"use client"

import Image from "next/image"
import Link from "next/link"

import { SliderComponent } from "@/components/Slider/Slider"
import { ISlider } from "@/components/Slider/Slider.props"
import GerbCenter from "./GERBCENTER.png"
import styles from "./Header.module.css"
import Slider2 from "./Slider2.jpg"
import SliderOpera from "./SliderOpera.png"
import gerb from "./gerbAstr.png"

export const Header = (): JSX.Element => {
  const sliders: ISlider[] = [
    { name: "asdasd", img: SliderOpera },
    { name: "asdasd", img: SliderOpera },
  ]
  return (
    <div>
      <div className={"relative my-0"}>
        <div
          className={
            "bg-black bg-opacity-50 top-0 py-5 z-10 w-full right-0  fixed space-y-7 "
          }
        >
          <div className={"mx-auto text-center"}>
            <div className={"flex justify-center items-center"}>
              <Image
                className={
                  "object-cover    left-48     w-10 z-10 " + styles.Logo
                }
                alt="slider"
                src={GerbCenter}
              />
              <h1 className={"mx-auto ml-auto text-3xl word-breaks font-bolds"}>
                АСТРАХАНСКИЙ
              </h1>
            </div>
            <h1 className={"mx-auto  text-3xl word-breaks font-bolds"}>
              ТУРИСТИЧЕСКИЙ ПОРТАЛ
            </h1>
          </div>
          <div
            className={
              "md:flex block justify-center text-center md:space-x-8 pb-5"
            }
          >
            <Link className={styles.Link + " block"} href={"OurHistory "}>
              НАША ИСТОРИЯ
            </Link>
            <Link className={styles.Link + " block"} href={"Advantages"}>
              ДОСТОПРИМЕЧАТЕЛЬНОСТИ
            </Link>
            <Link className={styles.Link + " block"} href={"EventsAstrakhan"}>
              МЕРОПРИЯТИЯ
            </Link>{" "}
            <Link className={styles.Link + " block"} href={"tourGuiders"}>
              ЭКСКУРСОВОДЫ
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  )
}
