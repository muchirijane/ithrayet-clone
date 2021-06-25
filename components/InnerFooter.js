import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { NewsLetterNav } from "../constants/nav_constants";

const InnerFooter = (props) => {
  const { sectionData } = props;
  const { t } = useTranslation("common");
  return (
    <section id="inner-footer">
      <div className="section_content">
        <div className="content_a">
          <div className="hero_text flex">
            <div
              className="f_80 alt _ele"
              dangerouslySetInnerHTML={{ __html: sectionData.title }}
            />

            <div
              className="f_20 less_opacity _ele"
              dangerouslySetInnerHTML={{ __html: sectionData.description }}
            />

            <div className="form_set">
              <form action="#">
                <div className="input_set buildup">
                  <input type="email" name="email" id="newsletter_email" />
                  <label for="newsletter_email" className="full_bg flex">
                    {t("email_address")}
                  </label>
                  <div className="inline_submit flex _curTL2 submitThis">
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
                        strokeMiterlimit="50"
                        x1="0"
                        y1="100%"
                        x2="0"
                        y2="0"
                      ></line>
                      <line
                        className="svg-stroke"
                        fill="none"
                        strokeMiterlimit="50"
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                      ></line>
                      <line
                        className="svg-stroke"
                        fill="none"
                        strokeMiterlimit="50"
                        x1="100%"
                        y1="0"
                        x2="100%"
                        y2="100%"
                      ></line>
                      <line
                        className="svg-stroke"
                        fill="none"
                        strokeMiterlimit="50"
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
                  <li key={`link_inf-${key}`}>
                    <Link href={link.href}>
                      <a className="_ele">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerFooter;
