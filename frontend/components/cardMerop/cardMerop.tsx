export const CardMerop = ({date, name, description, img}) => {
    return <div className={"border rounded-3xl bg-black flex align-items-center hover:scale-1.2 bg-white"}>
        <div className="space-y-8 w-80">
            <span className="">{date}</span>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
        <Image  alt={'Man'} src={img} className="p-4 rounded-3xl"/>
    </div>
}