import { DetailedHTMLProps, HTMLAttributes } from "react"
import { StaticImageData } from "next/image"

export interface SliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  slidersContent: ISlider[]
}
export interface ISlider {
  name: string
  img: StaticImageData
}
