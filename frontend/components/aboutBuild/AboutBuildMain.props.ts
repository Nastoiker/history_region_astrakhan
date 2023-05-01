import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface  AboutBuildMainProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string,
  description: string,
  img: string;
}
