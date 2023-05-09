import { DetailedHTMLProps, HTMLAttributes } from "react"
import { StaticImageData } from "next/image"

export interface AboutBuildCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  description: string
  img: string | StaticImageData
  positionImg: "left" | "right"
}
