import Image from "next/image"

import { Htag } from "@/components/Htag/Htag"

export const AbouldBuildMain = ({ description, img, title, description1 }) => {
  return (
    <div>
      <Image src={img} className={"w-full"} alt={"mainImg"} />
      <Htag className="mx-72 text-7xl -my-10 absolute " type={"h1"}>
        {" "}
        {title}
      </Htag>
      <p className={"my-20 px-10 leading-10 break-all"}>{description1}</p>
      <p className={"my-20 px-10 leading-10 break-all"}>{description}</p>
    </div>
  )
}
