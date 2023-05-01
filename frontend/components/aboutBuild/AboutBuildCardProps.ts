import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface  AboutBuildCardProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  description: string,
  img: string;
  postImg: 'left' | 'right';
}
