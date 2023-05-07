import Image from "next/image";
import AstrKreml from './pictures/Rectangle 3653.png'
import Opera from './pictures/Rectangle 3652.png'
import Arka from './pictures/Rectangle 3655.png'
import spenskSobor from './pictures/Rectangle 3654.png'
import Vladimir from './pictures/Rectangle 3652-1.png'
import ElderAbusa from './pictures/Rectangle 3657.png'
import {Htag} from "@/components/Htag/Htag";
import { redirect } from "next/navigation";


export const AdvantagesGallery = ({}): JSX.Element => {
  return <div className="my-10 lg:mx-72 sm:space-y-0 space-y-5 sm:grid grid-flow-row grid-rows-3 grid-cols-3 gap-2">
    <div className={"col-span-2 "}>
      <Image className={"  sm:w-full hover:scale-95 transition-all h-full"}  src={AstrKreml}  alt="" loading="lazy" />
      <div className={" px-2 pt-4 bg-gradient-to-t from-black rounded-l-lg to-1% transparent left-auto right-auto  -my-[43px]  absolute z-10 "}>
        <Htag className=" 	"type={'h2'}>Астраханский кремль</Htag>
      </div>

    </div>
    <div >
      <Image  className={"  sm:w-full hover:scale-95 transition-all h-full"}  src={Opera} alt="" loading="lazy" />
      <div className={" px-2 pt-4 bg-gradient-to-t from-black rounded-l-lg to-1% transparent left-auto right-auto  -my-[43px]  absolute z-10 "}>
        <Htag className=" 	"type={'h2'}>Театр оперы и балета</Htag>
      </div>

    </div>
    <div className={""}>
      <Image  className={"  sm:w-full hover:scale-95 transition-all h-full"}  src={Arka} alt="" loading="lazy" />
      <div className={" px-2 pt-4 bg-gradient-to-t from-black rounded-l-lg to-1% transparent left-auto right-auto  -my-[43px]  absolute z-10 "}>
        <Htag className=" 	"type={'h2'}>Триумфальная арка</Htag>
      </div>

    </div>
    <div className={"col-span-2"}>
      <Image  className={" sm:w-full hover:scale-95 transition-all h-full"}  src={spenskSobor} alt="" loading="lazy"/>
      <div className={" px-2 pt-4 bg-gradient-to-t from-black rounded-l-lg to-1% transparent left-auto right-auto  -my-[43px]  absolute z-10 "}>
        <Htag className=" 	"type={'h2'}>Успенский собор</Htag>
      </div>

    </div>
    <div className={"col-span-2"}>
      <Image  className={" sm:w-full hover:scale-95 transition-all  h-full shadow-b-2xl"}  src={Vladimir} alt="" loading="lazy"/>
      <div className={" px-2 pt-4 bg-gradient-to-t from-black rounded-l-lg to-1% transparent left-auto right-auto  -my-[43px]  absolute z-10 "}>
        <Htag className=" 	"type={'h2'}>ХРАМ СВ. ВЛАДИМИРА</Htag>
      </div>
    </div>





    <div className={""}>
      <Image  className={"  w-full hover:scale-95 transition-all h-full"} src={ElderAbusa} alt="" loading="lazy"/>
      <div className={" px-2 pt-4 bg-gradient-to-t from-black rounded-l-lg to-1% transparent left-auto right-auto  -my-[43px]  absolute z-10 "}>
        <Htag className=" 	"type={'h2'}>ФОНТАН</Htag>
      </div>

    </div>
  </div>
}
// className="row-start-1 col-start-2 col-span-2"
