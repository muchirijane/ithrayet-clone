import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { getTypeValue } from "../../helpers/api";
import { StripPTags } from "../../helpers/arrayHelper";
import { CMSPath } from "../../helpers/imageCMSPath";
import Elements from "../elements";

const EditionBlock = ({ featuredEdition, dataUrl }) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const { type, featuredTitle } = featuredEdition[0];
 
  return (
    <section id="editions" style={{ visibility: "hidden" }} data-url={dataUrl}>
      <div className="content_set">
        <div className="section_title flex">
          <h4 className="_inOut">{t("homepage.editions")}</h4>
          <a href={`${dataUrl}`} className="mobile_only _inOut">
            {t("all_editions")}
          </a>
        </div>
      </div>

      <div className="section_content flex full_bg">
        <div className="section_head">
          <h1>
            <span
              dangerouslySetInnerHTML={{ __html: StripPTags(featuredTitle) }}
            />

            <span>{`${getTypeValue(type.value, t)} #${type.number}`}</span>
          </h1>
          <div className="ed_image _curTL1 _link">
            <div className="full_bg prx">
              <div className="cardWrapper full_bg">
                <div className="card full_bg">
                  <div className="cardFace full_bg front"></div>
                  <div className="cardFace full_bg back"></div>
                </div>
              </div>

              <div className="ed_sub_images">
                <div className="ed_sub_image"></div>
                <div className="ed_sub_image"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_label">
          <h3 className="_fill_card _inOut"></h3>
          <p className="_fill_card _inOut"></p>
        </div>
        <div className="cards">
          {featuredEdition.map((edition, key) => {
            return (
              <Elements.EditionCards
                key={key}
                title={edition.title}
                date={edition.publishedDate}
                cover={`${CMSPath}${edition.cover.url}`}
                img1={
                  edition.featuredImageLeft &&
                  `${CMSPath}${edition.featuredImageLeft.url}`
                }
                img2={
                  edition.featuredImageRight &&
                  `${CMSPath}${edition.featuredImageRight.url}`
                }
                slug={`${locale === "ar" ? "/ar" : ""}/editions/${
                  edition.slug
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="circle_set no-select buildup lower desktop_only">
        {t("all_editions")}
      </div>

      <div className="arrow_set prev fluid flex"></div>

      <div className="arrow_set next fluid flex"></div>

      <div id="drawings" className="full_bg"></div>
    </section>
  );
};

export default EditionBlock;
