import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const HoverImage = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head custom_head center">
              <strong className="f_80 uppercase">
                {content.hoverImage_title}
              </strong>
            </div>

            <div className="table_set has_cards">
              {content.creativesList &&
                content.creativesList.map((creator, key) => (
                  <Link
                    href={`/creatives/${creator.artist.slug}`}
                    key={`creator-link-${key}`}
                  >
                    <a
                      className="table_row flex"
                      data-img={`${CMSPath}${creator.image.url}`}
                    >
                      <div className="table_col flex">
                        <strong className="f_40 uppercase">
                          {creator.title}
                        </strong>
                      </div>
                      <div className="table_col flex">
                        <strong className="f_20 uppercase">Read More</strong>
                      </div>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HoverImage;
