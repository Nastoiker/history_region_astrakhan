import {Layout} from "@/components/layout";
import Head from "next/head";
import {Header} from "@/components/Header/Header";
import {AboutUs} from "@/page-component/About";
import {MeropContainer} from "@/page-component/Merop.container";
import {AdvantagesGallery} from "@/components/AdvantangesGallery/AdvantagesGallery";
import {CardGuider} from "@/components/cardGuide/CardGuiders";

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
      <section className="container  max-w-screen-2xl grid items-center gap-6 pb-8 ">

      </section>
    </Layout>
  )
}
