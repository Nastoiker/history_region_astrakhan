import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import {Header} from "@/components/MainHomeSlider/MainHomeSlider";
import {AboutUs} from "@/page-component/About";
import {SliderComponent} from "@/components/Slider/Slider";
import {ISlider} from "@/components/Slider/Slider.props";
import SliderOpera from "@/components/MainHomeSlider/SliderOpera.png";
import {MeropContainer} from "@/page-component/Merop.container";
import {AdvantagesGallery} from "@/components/AdvantangesGallery/AdvantagesGallery";
import {CardGuider} from "@/components/cardGuide/CardGuiders";
import { Footer } from "@/components/footer"
import Image from "next/image";
import GerbCenter from "@/components/MainHomeSlider/GERBCENTER.png";
  const sliders:ISlider[] = [{name: 'asdasd', img:  SliderOpera}, {name: 'asdasd', img:  SliderOpera}];

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Astrakhan</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container  max-w-screen-2xl  ">

        <SliderComponent slidersContent={sliders}/>


        <AboutUs />
        <MeropContainer MeropCards={[{date: '123123', name: 'vasya', img:'', description:'asdasdasd'}]}/>
        <AdvantagesGallery />


      {/*  <CardGuider  cardGuiders={{img: 'asdasd', number: '++12i8318231', email: 'asdasdas', yearsOld: '123123', name: 'Ivan'}}/>*/}

      </section>
    </Layout>
  )
}
