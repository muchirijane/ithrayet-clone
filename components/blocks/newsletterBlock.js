import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { NewsLetterNav } from "../../constants/nav_constants";
const NewsLetterBlock = ({ sectionData }) => {
  const { t } = useTranslation("common");
  const { title, description } = sectionData;

  return (
    <section id="newsletter" style={{ visibility: "hidden" }}>
      <div className="section_content flex full_bg">
        <div className="content_set no-padding">
          <h3 className="_inOut" dangerouslySetInnerHTML={{ __html: title }} />
          <h6
            className="_inOut"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="form_set">
            <form action="#">
              <div className="input_set buildup">
                <input type="email" name="email" id="newsletter_email" />
                <label for="newsletter_email" className="full_bg flex">
                  {t("email_address")}
                </label>
                <div className="inline_submit flex _curTL2">
                  <span>{t("subscribe")}</span>
                  <i className="full_bg"></i>
                </div>
                <div className="input_border">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                  >
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="0"
                      y1="100%"
                      x2="0"
                      y2="0"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="100%"
                      y1="0"
                      x2="100%"
                      y2="100%"
                    ></line>
                    <line
                      className="svg-stroke"
                      fill="none"
                      strokeMiterlimit="10"
                      x1="100%"
                      y1="100%"
                      x2="0"
                      y2="100%"
                    ></line>
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div className="sub_footer">
            <ul className="flex">
              {NewsLetterNav.map((link, key) => (
                <li key={`link_nlf-${key}`}>
                  <Link href={link.href}>
                    <a className="_inOut">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyrights _inOut">{t("copyrights")}</p>
      </div>
    </section>
  );
};

export default NewsLetterBlock;
