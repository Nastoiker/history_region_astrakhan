import {Htag} from "@/components/Htag/Htag";
import Image from "next/image";

export const AbouldBuildMain = ({description, img, title}) => {
  return <div>
    <Image src={img} alt={'mainImg'}/>
    <Htag className="absolute"type={'h1'}> {title}</Htag>
     <p>
       {description}
     </p>
  </div>
}
