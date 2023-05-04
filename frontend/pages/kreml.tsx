import {Layout} from "@/components/layout";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {AboutUs} from "@/page-component/About";
import {MeropContainer} from "@/page-component/Merop.container";
import {AdvantagesGallery} from "@/components/AdvantangesGallery/AdvantagesGallery";
import {CardGuider} from "@/components/cardGuide/CardGuiders";
import { AboutBuildCard } from "@/components/aboutBuild/AboutBuildCard";
import { AbouldBuildMain } from "@/components/aboutBuild/AboutBuildMain";
import MainImage from '@/public/kremlAstrakhan/mainPicture/Rectangle 3658.png';
import Img1 from '@/public/kremlAstrakhan/image 3 (1).png';
export default function IndexPage() {
  const MainData = {
    title: 'АСТРАХАНСКИЙ КРЕМЛЬ',
    description: 'Одна из главных исторических и архитектурных достопримечательностей Астрахани, — это местный кремль, уникальный образец военно-инженерного искусства второй половины 16 в., памятник федерального значения. Он располагается на острове, берега которого омываются водами Волги, Царёва, Кутума и Казачьего ерика. Первый деревянные постройки Астраханского кремля появились в 1558 г. Уже через четыре года на холме стояла боевая башня и проездные ворота, но еще не было высокой колокольни и каменных стен. Строительство каменного кремля было начато в царствование Иоанна IV Грозного, а закончено уже при его сыне Федоре Иоанновиче и непосредственном участии Бориса Годунова. Именно в разгар Смуты из-за постоянных военных конфликтов и междоусобиц появилась необходимость в постройке каменной крепости для обороны. Башня стала обрастать постройками — самые первые стены кремля возводились из кирпича бывшей столицы Золотой Орды.'
  }
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
      <section className="container  max-w-screen-2xl grid items-center gap-6 pb-8 ">
        <AbouldBuildMain description={MainData.description} img={MainImage} title={MainData.title} />
        <AboutBuildCard positionImg="right" description="sdasdasdasdasdasd" img={Img1} title="sadasdasdasd"/>
      </section>
    </Layout>
  )
}
