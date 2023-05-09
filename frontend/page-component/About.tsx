import { CardAbout } from "@/components/CardAbout/CardAbout"
import styles from "./About.module.css"

export const AboutUs = (): JSX.Element => {
  return (
    <div className={"mx-20 space-y-18 mb-10 w-fit "}>
      <h1 className={"text-center"}>НАША ИСТОРИЯ</h1>
      <div className={styles.P}>
        <h1 className={"italic font-bold"}> Астрахань в период ВОВ.</h1>
        <p className={"break-words w-fit"}>
          Период Великой Отечественной войны дался городу легче, чем другим
          населенным пунктам страны, можно сказать, что основные битвы прошли
          рядом с Астраханью. Благодаря этому и было сохранено множество
          исторических и культурных ценностей XIX века. В годы боевых действий
          Астрахань была, скорее всего, тылом, чем войском. Здесь
          сосредотачивалось множество больниц и госпиталей, откуда свозились
          раненые с разных уголков страны. Также Астрахань являлась
          промежуточным пунктом, обеспечивающим доставку горюче-смазочных
          материалов с Каспия на фронт.
        </p>
      </div>

      <CardAbout id={1} name={"ИСТОРИЯ\n" + "АСТРАХАНИ"} />
    </div>
  )
}
