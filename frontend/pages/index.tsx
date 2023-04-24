import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import {Header} from "@/components/Header/Header";
import {AboutUs} from "@/page-component/About";
import {SliderComponent} from "@/components/Slider/Slider";
import {ISlider} from "@/components/Slider/Slider.props";
import SliderOpera from "@/components/Header/SliderOpera.png";

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
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <Header />
        <AboutUs />

      </section>
    </Layout>
  )
}
