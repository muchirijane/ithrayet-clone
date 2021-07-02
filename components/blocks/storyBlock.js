import useTranslation from "next-translate/useTranslation";
import ReactHtmlParser from "react-html-parser";
import { CMSPath } from "../../helpers/imageCMSPath";

const StoryBlock = ({ sectionData, dataUrl }) => {
  const { t } = useTranslation("common");

  const { mediaQuote, description, rightImage, leftImage } = sectionData;
 
  const transform = (node) => {
    if ((node.type = "tag")) {
   
      switch (node.name) {
        case "div":
 
          return node.children.map((tag,key)=>{
            if(tag.type === 'text'){
              return tag.data
            }else if(tag.type === 'br'){
              return (<br/>)
            }
          })
        case "figure":
          return (
            <i
              className="story_media img load_img _secEle prx"
              data-src={`${CMSPath}${node.children[0].attribs.src}`}
            ></i>
          );
   
          
        // case "video":
        //   return <i className="story_media video _secEle prx">
        //   <video preload="metadata" autoPlay loop muted playsInline>
        //     {" "}
        //     <source
        //       src={`${CMSPath}${node.attribs.src}`}
        //       type="video/mp4"
        //     />{" "}
        //   </video>
        // </i>;
        default: return node
      }
    }
  };
  return (
    <section id="stories" style={{ visibility: "hidden" }} data-url={dataUrl}>
      <div className="story_wrap flex">
        <h4 className="_inOut">{t("homepage.our_story")}</h4>

        <div className="story_head">
          <i
            className="story_media img left load_img _secEle prx"
            data-src={`${CMSPath}${leftImage.url}`}
          ></i>

          <h2 className="_lines">
            {/* {ReactHtmlParser(mediaQuote, {
              transform: transform,
            })} */}
          </h2>

          <i
            className="story_media img right load_img _secEle prx"
            data-src={`${CMSPath}${rightImage.url}`}
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
