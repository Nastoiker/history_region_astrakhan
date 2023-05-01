"use client"

import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';
import SliderOpera  from './SliderOpera.png';
import GerbCenter from './GERBCENTER.png';
import gerb from './gerbAstr.png';
import {SliderComponent} from "@/components/Slider/Slider";
import {ISlider} from "@/components/Slider/Slider.props";
import Slider2 from './Slider2.jpg';
export const Header = () : JSX.Element => {
  const sliders:ISlider[] = [{name: 'asdasd', img:  SliderOpera}, {name: 'asdasd', img:  SliderOpera}];
  return (
    <div>


    <div className={"relative my-0"} >

      <Image className={"object-cover  absolute   z-10 top-1/3 " + styles.Logo} alt='slider' src={GerbCenter}/>

      <div className={"bg-black bg-opacity-50 top-0 py-5 z-10 w-full right-0  fixed space-y-7 "}>
      <div className={'mx-auto text-center'}>
        <div className={"flex items-center"}>
          <Image className={"w-12 left-60"} alt='slider' src={GerbCenter}/>
          <h1 className={"mx-auto  text-3xl word-breaks font-bolds"}>АСТРАХАНСКИЙ</h1>
        </div>
        <h1 className={"mx-auto  text-3xl word-breaks font-bolds"}>ТУРИСТИЧЕСКИЙ ПОРТАЛ</h1>

      </div>
      <div className={'flex justify-center space-x-8 pb-5'}><Link className={styles.Link} href={'OurHistory'}>НАША ИСТОРИЯ</Link><Link className={styles.Link} href={'Advantages'}>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</Link><Link className={styles.Link} href={'EventsAstrakhan'}>МЕРОПРИЯТИЯ</Link> <Link className={styles.Link} href={'tourGuiders'}>ЭКСКУРСОВОДЫ</Link></div>
    </div>
      <SliderComponent slidersContent={sliders}/>s
    </div>     </div>
);
};
