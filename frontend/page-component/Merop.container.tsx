import {MeropContainerProps} from "@/page-component/Merop.container.props";
import {Htag} from "@/components/Htag/Htag";
import {CardMerop} from "@/components/cardMerop/cardMerop";
import img from './image 2 (1).png';
export const MeropContainer = (MeropCards :MeropContainerProps) => {
  return <div>
    <Htag className={"text-center"} type={'h1'}>Мероприятия</Htag>
    <CardMerop date={'23123'} img={img} description={'sadsdadsakjdsddkkkkkkkkkkkkkkkkssssssssssssssssssssssssssssssssssssssssssk'} name={'someName'} />
  </div>
}
