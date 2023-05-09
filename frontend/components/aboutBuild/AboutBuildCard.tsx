import Image from "next/image"
import cn from "classnames"

import { AboutBuildCardProps } from "@/components/aboutBuild/AboutBuildCardProps"
import { Htag } from "../Htag/Htag"

export const AboutBuildCard = ({
  img,
  description,
  title,
  positionImg,
}: AboutBuildCardProps): JSX.Element => {
  return (
    <div
      className={cn("content-center xl:flex mx-auto space-y-10 items-center", {
        "flex-row-reverse": positionImg === "left",
      })}
    >
      <div className="mx-10 space-y-5">
        <Htag type="h1">{title}</Htag>
        <p className="ml-0 leading-10	">{description}</p>
      </div>
      <div>
        <hr className="hidden xl:block rotate-90 my-28 w-48" />
      </div>

      <Image src={img} className="mx-auto" alt="" />
    </div>
  )
}
