import { format } from "date-fns";
import { CMSPath } from "../../../helpers/imageCMSPath";

const BannerSection = (props) => {
  const { tags, title, cover, quote, author, timeToRead, publishedDate } =
    props;

  return (
    <section>
      <div className="content_a">
        <div className="inner_bar flex">
          <div className="tags_set">
            <div className="tags flex">
              {tags &&
                tags.map((tag,key) => (
                  <a key={`article_tag-${key}`} href="#" style={{ color: tag.color }}>
                    {tag.name}
                  </a>
                ))}
            </div>
          </div>

          <div className="font_set flex">
            <div className="font_circ disabled">
              <strong className="f_20 uppercase" id="decrease">
                A-
              </strong>
            </div>
            <div className="font_circ">
              <strong className="f_20 uppercase" id="increase">
                A+
              </strong>
            </div>
          </div>
        </div>

        <div className="section_head_set">
          <div className="section_head">
            <div className="f_30 less_opacity">{quote}</div>
            <h1>{title}</h1>
          </div>
          <div className="cover_image standerd">
            <img
              className="preloadIMG"
              data-img={`${CMSPath}${cover.url}`}
              width="100%"
              height="auto"
              alt={cover.alternativeText}
            />
          </div>
        </div>
        <div className="info_line">
          <div className="f_14">
            Traditional ancient reindeer illustration, Sámi. Artwork by{" "}
            <strong>
              <a href="creative_en.php" target="_blank">
                Anne Katrine Senstad
              </a>
            </strong>
          </div>
        </div>

        <div className="content_b">
          <div className="outline_bar flex">
            <div className="f_20">By {`${author}`}</div>
            <div className="f_20">{`${format(
              new Date(publishedDate),
              "MMMM do, yyyy"
            )} · ${Math.floor(timeToRead / 60)} minutes read`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
