import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';
import SliderOpera  from './SliderOpera.png';
import GerbCenter from './GERBCENTER.png';
import gerb from './gerbAstr.png';

export const Header = () : JSX.Element => {
  return (
    <div className={"relative"} >
      <Image className="object-cover brightness-50 relative" alt='slider' src={SliderOpera}/>
      <Image className={"object-cover  absolute   z-10 top-1/3 " + styles.Logo} alt='slider' src={GerbCenter}/>

      <div className={"bg-black bg-opacity-50 top-0 z-10 w-full right-0  fixed space-y-7 "}>
      <div className={'text-center'}>
        <h1 className={"font-bolds"}><Image alt={'AstrakhanGerb'} className="cover-object " src={gerb}/>АСТРАХАНСКИЙ ТУРИСТИЧЕСКИЙ ПОРТАЛ</h1>
      </div>
      <div className={'flex justify-center space-x-8 pb-5'}><Link className={styles.Link} href={'OurHistory'}>НАША ИСТОРИЯ</Link><Link className={styles.Link} href={'Advantages'}>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</Link><Link className={styles.Link} href={'EventsAstrakhan'}>МЕРОПРИЯТИЯ</Link> <Link className={styles.Link} href={'tourGuiders'}>ЭКСКУРСОВОДЫ</Link></div>
    </div>

    </div>);
};
