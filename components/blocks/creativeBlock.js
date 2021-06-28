import Elements from "../elements";
import useTranslation from "next-translate/useTranslation";
import { ChunkArray } from "../../helpers/arrayChunks";
import { CMSPath } from "../../helpers/imageCMSPath";

const CreativeBlock = ({ artists, sectionData, dataUrl }) => {
  const { t } = useTranslation("common");
  const { title, quote } = sectionData;
  const chunkArtists = ChunkArray(artists, 8);

  return (
    <section id="creatives" style={{ visibility: "hidden" }} data-url={dataUrl}>
      <div className="content_set">
        <div className="section_title flex">
          <h4 className="_inOut">{t("homepage.creatives")}</h4>
          <a href="creatives_en.php" className="mobile_only _inOut">
            {t("all_creatives")}
          </a>
        </div>
      </div>

      <div className="cr_text">
        <p className="_inOut">{title}</p>
        <h6 className="_inOut" dangerouslySetInnerHTML={{ __html: quote }} />
      </div>

      <div className="crv_wrap full_bg">
        <div className="crv_circles scale">
          {chunkArtists.map((artist_val, index) => {
            {
              return (
                <div
                  className={`circles_group full_bg ${index === 0 && "active"}`}
                  key={index}
                >
                  {artist_val.map((val, key) => {
                    return (
                      <Elements.CreativeArtist
                        key={key + val.firstName}
                        dist={key}
                        artistName={`${val.firstName} ${val.lastName}`}
                        svgUrl={`${val.signature.url}`}
                        profileUrl={`${CMSPath}${val.profileImage.url}`}
                      />
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="cr_name">
        <h3 className="_inOut"></h3>
      </div>

      <div className="circle_set no-select buildup lower desktop_only">
        {t("all_creatives")}
      </div>

      <div className="arrow_set prev static flex"></div>

      <div className="arrow_set next static flex"></div>
    </section>
  );
};

export default CreativeBlock;
