import {DetailedHTMLProps, HTMLAttributes} from "react";
import {CardMeropProps} from "@/components/cardMerop/cardMerop.props";

export interface MeropContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  MeropCards: CardMeropProps[];
}
