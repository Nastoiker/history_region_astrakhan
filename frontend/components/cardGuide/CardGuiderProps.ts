import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface CartMeropProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardGuiders: CardMerop
}

interface CardMerop {
  name: string
  yearsOld: string
  number: string
  email: string
  img: string
}
