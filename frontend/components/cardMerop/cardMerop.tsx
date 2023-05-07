import Image from "next/image";
import {MeropContainerProps} from "@/page-component/Merop.container.props";

export const CardMerop = ({date, name, description, img}): JSX.Element => {
    return <div className={"mx-auto m-10 md:flex max-w-screen-lg justify-between border p-5 rounded-3xl bg-zinc-900 items-center hover:scale-110 transition-all hover:bg-zinc-800 hover:border-none "}>
        <div className="mx-auto space-y-8 w-80">
            <span className="text-sm text-gray-400">{date}</span>
            <h1 className="text-4xl">{name}</h1>
            <p className={"w-22 text-gray-400 break-words ml-0"}>{description}</p>
        </div>
        <Image  alt={'Man'} src={img} className="mx-auto p-4 rounded-3xl"/>
    </div>
}
