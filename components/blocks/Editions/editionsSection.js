import { CMSPath } from "../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
const EditionsSection = (props) => {
  const { t } = useTranslation("common");

  const { editions } = props;
  console.log(t, editions)

  return (
    <div id="sections">
      {editions.map((edition, key) => {
        let dataScrollSpeeds = {
          odd: ["1", "3", "2", "2", "3", "1"],
          even: ["1", "3", "3", "2", " 3", "1"],
        };
        return (
          <section
            key={`edition_${key}`}
            data-scroll
            data-scroll-id={key + 1}
            className="tab_section"
          >
            {edition.articles.map((article, index) => {
              if (index < 5) {
                return article.cover && article.cover.url ? (
                  
                  <img
                    className="preloadIMG"
                    data-img={`${CMSPath}${article.cover.url}`}
                    width="100%"
                    height="auto"
                    alt={edition.title}
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed={
                      index % 2 == 0
                        ? dataScrollSpeeds.even[index]
                        : dataScrollSpeeds.odd[index]
                    }
                  />
          
                  

                  
                ) : null;
              } else {
                return null;
              }
            })}

            
          </section>
        );
      })}

      
   
      <div className="section_head_vh no-select">
        <div className="section_head_set">
          <div
            className="section_head"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sections"
          >
            <div className="f_30"></div>
            <h1></h1>
            <div className="tags flex"></div>

            <div className="circle_set no-select">
              <div className="circle_mag flex full_bg mg" data-dist="6">
                <div className="crc_wrap">
                  <div className="crc_stroke">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 202 202"
                    >
                      <path
                        className="stroke-an svg-stroke"
                        fill="none"
                        strokeWidth="1"
                        d="M91,3.4C149.3-4.5,203.9,49.1,199.9,107c-3.4,49.3-42.6,87.9-90.9,93.7C35.1,209.6-17.1,128.5,9.5,63 C23.3,28.7,55.4,8.3,91,3.4"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span
                  className="f_14 uppercase"
                  dangerouslySetInnerHTML={{ __html: t("explore_text_single") }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EditionsSection;
