import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { CMSPath } from "../../helpers/imageCMSPath";
import Elements from "../elements";

const JoinBlock = ({ projects, sectionData, dataUrl }) => {
  const {locale} = useRouter();
  const { t } = useTranslation("common");
  const { quote, title } = sectionData;
  return (
    <section id="join" style={{visibility: "hidden"}} data-url={dataUrl}>
      <div className="section-sides flex">
        <div className="section-side flex">
          <div className="content_set">
            <div className="section_title flex">
              <h4 className="_secEle">{t("homepage.join_exp")}</h4>
              <a href={`${dataUrl}`} className="mobile_only _secEle">
                {t("all_projects")}
              </a>
            </div>

            <div className="side-content">
              <p className="_secEle">{title}</p>

              <h3
                className="_secEle"
                dangerouslySetInnerHTML={{ __html: quote }}
              />

              <div className="circle_set no-select buildup static desktop_only">
                {t("all_projects")}
              </div>
            </div>
          </div>
        </div>

        <div className="section-side adjustable">
          <div className="join_slider full_bg flex">
            <div className="jn_circles zero-font">
              {projects.map((val, key) => {
                return (
                  <Elements.ProjectCircle
                    key={key}
                    title={val.title}
                    url={`${CMSPath}${val.cover.url}`}
                    hrefUrl={`${locale === 'ar' ? "/ar" : ""}/join-experience/${val.slug}`}
                    color={val.color}
                  />
                );
              })}

            </div>
            <div className="jn_title _secEle">
              <h3></h3>
            </div>
          </div>
          <i className="full_bg"></i>
        </div>
      </div>

      <div className="arrow_set prev static flex"></div>

      <div className="arrow_set next static flex"></div>
    </section>
  );
};

export default JoinBlock;
