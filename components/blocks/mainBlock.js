import Elements from "../elements";
import useTranslation from "next-translate/useTranslation";
import { CMSPath } from "../../helpers/imageCMSPath";
import { format } from "date-fns";
import { useRouter } from "next/router";

const MainBlock = ({ editions, sectionData, dataUrl }) => {
  const { t } = useTranslation("mainblock");
  const { title, quote } = sectionData;
  const {locale} = useRouter()
  return (
    <section id="main" style={{ visibility: "hidden" }} data-url={dataUrl}>
      <div className="main_heading flex full_bg">
        <p>{title}</p>
        <h3 dangerouslySetInnerHTML={{ __html: quote }} />
      </div>

      <div id="container"></div>

      <div className="main_wrap scale">
        <div className="main_wrap_animated full_bg">
          {editions.map((val, key) => {
            
            return (
              <Elements.EditionHomepage
                key={key}
                id={editions.length - (key + 1)}
                imgUrl={`${CMSPath}${val.cover.url}`}
                title={val.title}
                subTitle={`${format(new Date(val.publishedDate), "MMMM yyyy")}`}
                hrefUrl={`${locale === 'ar'  ? "/ar": ""}/editions/${val.slug}`}
              />
            );
          })}
        </div>
      </div>

      <div
        className="circle_set no-select buildup"
        dangerouslySetInnerHTML={{ __html: t("explore_text") }}
      />
    </section>
  );
};

export default MainBlock;
