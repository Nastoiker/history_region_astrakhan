import { StaticImageData } from "next/image";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AboutBuildCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  description: string,
  img: string | StaticImageData;
  positionImg: 'left' | 'right';
}
