import useTranslation from "next-translate/useTranslation";

const StoryBlock = ({sectionData}) => {
  const {t} = useTranslation('common');

  const {mediaQuote, description} = sectionData;
  return (
    <section id="stories">
      <div className="story_wrap flex">
        <h4 className="_inOut">{t('homepage.our_story')}</h4>

        <div className="story_head">
          <i
            className="story_media img left load_img _secEle prx"
            data-src="imgs/section4/2.jpg"
          ></i>

          <h2 className="_lines">
            An art{" "}
            <i
              className="story_media img load_img _secEle prx"
              data-src="imgs/section4/1.jpg"
            ></i>{" "}
            is to must have his <br />
            measuring tools{" "}
            <i className="story_media video _secEle prx">
              <video preload="metadata" autoPlay loop muted playsInline>
                {" "}
                <source src="imgs/section4/4.mp4" type="video/mp4" />{" "}
              </video>
            </i>{" "}
            not in <br />
            the hand, but in the eye.
          </h2>

          <i
            className="story_media img right load_img _secEle prx"
            data-src="imgs/section4/3.jpg"
          ></i>
        </div>

        <p className="_lines">
          {description}
        </p>
      </div>

      <div className="circle_set no-select buildup lower centered" dangerouslySetInnerHTML={{__html: t('more_about_ithraeyat')}}/>
    
    </section>
  );
};


export default StoryBlock;