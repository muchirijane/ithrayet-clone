import useTranslation from "next-translate/useTranslation";
import { CMSPath } from "../../helpers/imageCMSPath";
import Elements from "../elements";

const EditionBlock = ({ featuredEdition, dataUrl }) => {
  const { t } = useTranslation("common");

  const { title, type, articles } = featuredEdition[0];

  return (
    <section id="editions" style={{ visibility: "hidden" }} data-url={dataUrl}>
      <div className="content_set">
        <div className="section_title flex">
          <h4 className="_inOut">{t("homepage.editions")}</h4>
          <a href="editions_en.php" className="mobile_only _inOut">
            {t("all_editions")}
          </a>
        </div>
      </div>

      <div className="section_content flex full_bg">
        <div className="section_head">
          <h1>
            <span dangerouslySetInnerHTML={{ __html: title }} />

            <span>{`${type.value} #${type.number}`}</span>
          </h1>
          <div className="ed_image _curTL1">
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
          {articles.map((article, key) => {
         
  
            return (
              <Elements.EditionCards
                key={key}
                title={article.title}
                date={article.publishDate}
                cover={`${CMSPath}${article.cover.url}`}
                img1={article.Images[0] && `${CMSPath}${article.Images[0].image.url}`}
                img2={article.Images[1] && `${CMSPath}${article.Images[1].image.url}`}
                slug={article.slug}
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
