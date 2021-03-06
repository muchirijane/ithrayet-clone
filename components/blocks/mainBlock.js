import Elements from "../elements";
import useTranslation from "next-translate/useTranslation";
import { CMSPath } from "../../helpers/imageCMSPath";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { ChunkArray } from "../../helpers/arrayHelper";

const getEditonsBlock = (val, key, id) => {
  const { locale } = useRouter();
  return (
    <Elements.EditionHomepage
      key={key}
      id={id}
      imgUrl={`${CMSPath}${val.cover?.formats?.medium?.url}`}
      title={val.title}
      subTitle={`${format(new Date(val.publishDate), "MMMM yyyy")}`}
      hrefUrl={`${locale === "ar" ? "/ar" : ""}/articles/${val.slug}`}
    />
  );
};
const MainBlock = ({ editions, sectionData, dataUrl }) => {
  const { t } = useTranslation("common");
  const { title, quote } = sectionData;
  // console.log(editions);
  let articleChunk = ChunkArray(editions[0]?.articles, 5);
  // console.log(articleChunk, "articleChunk");
  return (
    <section id="main" style={{ visibility: "hidden" }} data-url={dataUrl}>
      <div className="main_heading flex full_bg">
        {title ? <p>{title}</p> : null}
        <h3 dangerouslySetInnerHTML={{ __html: quote }} />
      </div>

      <div id="container"></div>

      <div className="main_wrap scale">
        <div className="main_wrap_animated full_bg">
          {articleChunk.reverse().map((chunk, keyChunk) => {
            if (articleChunk.length > 1) {
              if (keyChunk === 0) {
                return chunk.map((val, key) => {
                  return getEditonsBlock(val, key, 6 + key);
                });
              } else {
                return chunk.map((val, key) => {
                  return getEditonsBlock(val, key, 5 - key);
                });
              }
            } else {
              return chunk.map((val, key) => {
                return getEditonsBlock(val, key, chunk.length - key);
              });
            }
          })}
        </div>
      </div>

      <div
        className="circle_set no-select buildup"
        dangerouslySetInnerHTML={{ __html: t("explore_text_single") }}
      />
    </section>
  );
};

export default MainBlock;
