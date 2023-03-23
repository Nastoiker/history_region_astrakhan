import Image from 'next/image';
export const Footer = () => {
    return (<div className="bg-black bottom-0">
        <div className="flex">
            <Image alt="Logo"  src={'Icon.svg'} />
            <div>
                <h1>ОФИЦИАЛЬНЫЙ АСТРАХАНСКИЙ ТУРИСТИЧЕСКИЙ ПОРТАЛ</h1>
                <div>
                    <p>
                    МЫ ВАС ЖДЕМ  —
г.Астрахань,
ул.Набережная Пр.З.35
                    </p>

                    <p>
                    СВЯЖИТЕСЬ С НАМИ: Email: ________@mile.ru Phone: +7 (905) 000-00-00      
                    </p>
                </div>
            </div>
        </div>
        <h3>© 2023 Астраханский Туристический Портал</h3>
    </div>)
}