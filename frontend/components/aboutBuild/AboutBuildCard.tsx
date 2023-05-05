import {AboutBuildCardProps} from "@/components/aboutBuild/AboutBuildCardProps";
import Image from "next/image";
import cn from "classnames";
import { Htag } from "../Htag/Htag";
export const AboutBuildCard = ({img, description, title, positionImg}: AboutBuildCardProps): JSX.Element => {
  return <div className={cn("sm:flex mx-auto space-x-5", {
    "flex-row-reverse": positionImg==='left',
  })}>

    <div>
      <Htag type='h1'>
        {title}
      </Htag>
      <p>
{description}
    </p>
    </div>
    <div>
      <hr className="rotate-90 my-28 w-48"/>

    </div>

     <Image src={img} alt=""/>
  </div>
  ;
}
