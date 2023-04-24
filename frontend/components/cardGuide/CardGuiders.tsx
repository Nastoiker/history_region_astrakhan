import Image from "next/image";

export const CardGuider = ({name, date, yearsOld, number, email, img}) => {
    return <div className="mx-auto p-2 rounded-2xl">
        <Image src={img} alt="profile_guider" className="rounded-full" />
        <div className="text-center">
            <h4>{name}</h4>
            <span>{yearsOld}</span>
            <span className={"text-gray"}>{number}</span>
            <span className={"text-gray"}>{email}</span>
        </div>
    </div>
}
