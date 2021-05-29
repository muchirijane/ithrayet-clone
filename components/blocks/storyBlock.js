import useTranslation from "next-translate/useTranslation";
import ReactHtmlParser from "react-html-parser";
import { AttachCMSPath } from "../../helpers/imageCMSPath";

const StoryBlock = ({ sectionData }) => {
  const { t } = useTranslation("common");

  const { mediaQuote, description } = sectionData;

  const transform = (node) => {
    if ((node.type = "tag")) {
      switch (node.name) {
        case "p":
          return `${node.children[0].data} `;
        case "img":
          return (
            <i
              className="story_media img load_img _secEle prx"
              data-src={AttachCMSPath(node.attribs.src)}
            ></i>
          );
        case "video":
          return (
            <i className="story_media video _secEle prx">
              <video preload="metadata" autoPlay loop muted playsInline>
                {" "}
                <source src={AttachCMSPath(node.attribs.src)} type="video/mp4" />{" "}
              </video>
            </i>
          );
        default:
      }
    }
  };
  return (
    <section id="stories">
      <div className="story_wrap flex">
        <h4 className="_inOut">{t("homepage.our_story")}</h4>

        <div className="story_head">
          <i
            className="story_media img left load_img _secEle prx"
            data-src="imgs/section4/2.jpg"
          ></i>

          <h2 className="_lines">
            {ReactHtmlParser(mediaQuote, {
              transform: transform,
            })}
          </h2>

          <i
            className="story_media img right load_img _secEle prx"
            data-src="imgs/section4/3.jpg"
          ></i>
        </div>

        <p className="_lines">{description}</p>
      </div>

      <div
        className="circle_set no-select buildup lower centered"
        dangerouslySetInnerHTML={{ __html: t("more_about_ithraeyat") }}
      />
    </section>
  );
};

export default StoryBlock;
