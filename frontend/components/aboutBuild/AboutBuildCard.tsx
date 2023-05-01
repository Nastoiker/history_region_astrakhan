import {AboutBuildCardProps} from "@/components/aboutBuild/AboutBuildCardProps";
import Image from "next/image";

export const AboutBuildCard = ({img, description, title, postImg}: AboutBuildCardProps): JSX.Element => {
  return <div className={"flex"}>
    {
      postImg==='left' ?  <Image className={"self-start"} src={img} alt=""/> :  <Image className={"self-end"} src={img} alt=""/>
    }
  </div>
  ;
}
