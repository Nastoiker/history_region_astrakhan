import Image from "next/image"

import { Htag } from "@/components/Htag/Htag"
import { CartMeropProps } from "./CardGuiderProps"

export const CardGuider = ({ cardGuiders }: CartMeropProps): JSX.Element => {
  return (
    <div className="m-5 mx-auto hover:scale-125 transition-all space-y-5  py-5 px-10 bg-zinc-900 hover:bg-zinc-800 w-fit p-2 rounded-2xl">
      {/*<Image src={cardGuiders.img} alt="profile_guider" className="rounded-full" />*/}
      <div className={"bg-gray-200  h-64 w-64 rounded-full"}></div>
      <div className="text-center">
        <Htag type={"h1"}>{cardGuiders.name}</Htag>
        <span className={"block"}>{cardGuiders.yearsOld}</span>
        <span className={" text-gray-400 block "}>{cardGuiders.number}</span>
        <span className={" text-gray-400 block "}>{cardGuiders.email}</span>
      </div>
    </div>
  )
}
