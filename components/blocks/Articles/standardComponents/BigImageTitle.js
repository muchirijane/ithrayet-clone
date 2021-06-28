import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";

const BigImageTitle = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="media_head">
              <div className="f_40 uppercase">{content.bigImageWT_title}</div>
            </div>

            <div className="media_set">
              <img crossorigin="anonymous"
                className="load_img"
                data-src={`${CMSPath}${content.bigImageWT_image.image.url}`}
                width="100%"
                height="auto"
                alt={content.bigImageWT_image.alternativeText}
              />

              <div className="info_line">
                <div className="f_14">
                  {content.bigImageWT_image.description} Artwork by{" "}
                  <strong>
                    <Link
                      href={`/creative/${content.bigImageWT_image.artist.slug}`}
                    >
                      <a target="_blank">
                        {`${content.bigImageWT_image.artist.firstName} ${content.bigImageWT_image.artist.lastName}`}
                      </a>
                    </Link>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigImageTitle;
