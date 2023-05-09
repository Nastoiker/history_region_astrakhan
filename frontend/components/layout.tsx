import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { Header } from "./MainHomeSlider/MainHomeSlider"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/*<SiteHeader />*/}
      <main className={"Container relative min-h-full h-auto"}>
        <Header />
        <div className={"Content"}>{children}</div>

        <Footer />
      </main>
    </>
  )
}
