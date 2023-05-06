import { SiteHeader } from "@/components/site-header"
import {Footer} from "@/components/footer";
import { Header } from "./MainHomeSlider/MainHomeSlider";

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/*<SiteHeader />*/}
      <main>
          <Header />
        {children}

            <Footer />

      </main>
    </>
  )
}
