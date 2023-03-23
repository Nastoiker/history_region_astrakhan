export const CardGuider = ({name, date, yearsOld, number, email}: ) => {
    return <div className="mx-auto p-2 rounded-2xl">
        <Image src={} alt="profile_guider" className="rounded-full" />
        <div className="text-center">
            <h4>{name}</h4>
            <span>{yearsOld}</span>
            <span className={""}>{number}</span>
            <span className={""}>{email}</span>
        </div>
    </div>
}