import Image from 'next/image';
import icon from 'public/GERBCENTER.png';
export const Footer = () => {
    return (<div className="py-10 bg-black bottom-0  mx-auto">
        <div className="flex max-w-screen-xl justify-center space-x-10 ">
            <Image alt="Logo"  src={icon} />
          <div>
            <h1 className={"mb-10 text-3xl"}>ОФИЦИАЛЬНЫЙ АСТРАХАНСКИЙ ТУРИСТИЧЕСКИЙ ПОРТАЛ</h1>
            <div className={"flex space-x-10"}>
              <div className={""}>
                <h2> МЫ ВАС ЖДЕМ  —</h2>
                <p className={"ml-0"}>г.Астрахань,
                </p>
                <p className={"ml-0"}>
                  ул.Набережная Пр.З.35
                </p>
              </div>
              <div>
                <h2> СВЯЖИТЕСЬ С НАМИ:</h2>
                <p className={"ml-0"}>
                  Email: ________@mile.ru
                </p>
                <p className={"ml-0"}>
                  Phone: +7 (905) 000-00-00
                </p>
              </div>
            </div>

          </div>

        </div>
        <h3 className={"text-center"}>© 2023 Астраханский Туристический Портал</h3>
    </div>)
}
