import Elements from "../elements";
import useTranslation from "next-translate/useTranslation";

const MainBlock = ({ editions, sectionData }) => {
  const { t } = useTranslation("mainblock");
  const {title, quote} = sectionData;
  return (
    <section id="main">
      <div className="main_heading flex full_bg">
        <p>{title}</p>
        <h3 dangerouslySetInnerHTML={{__html: quote}}/>
      </div>

      <div id="container"></div>

      <div className="main_wrap scale">
        <div className="main_wrap_animated full_bg">
          {editions.map((val, key) => {
            return (
              <Elements.EditionHomepage
                key={key}
                id={key}
                imgUrl={val.cover.url}
                title={val.title}
                subTitle={"Febuary 2021"}
              />
            );
          })}
        </div>
      </div>

      <div className="circle_set no-select buildup" dangerouslySetInnerHTML={{__html: t('explore_text')}}/>
          
    </section>
  );
};

export default MainBlock;
