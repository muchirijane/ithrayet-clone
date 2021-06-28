import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const TiltingFullWidth = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head long">
              <div className="f_80 alt">{content.tiltImageFW_title}</div>
            </div>

            <div className="section_sides center_tilt_cols flex">
              <div className="ct_col">
                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="2"
                >
                  <img crossOrigin="anonymous"
                    className="load_img"
                    data-src={`${CMSPath}${content.tiltImageFW_image[0].image.url}`}
                    width="100%"
                    height="auto"
                    alt={`${content.tiltImageFW_image[0].image.alternativeText}`}
                  />
                  <div className="info_line">
                    <div className="f_14">
                      {content.tiltImageFW_image[0].description} Artwork by{" "}
                      <strong>
                        <Link
                          href={`/creatives/${content.tiltImageFW_image[0].artist.slug}`}
                        >
                          <a target="_blank">
                            {`${content.tiltImageFW_image[0].artist.firstName} ${content.tiltImageFW_image[0].artist.lastName}`}
                          </a>
                        </Link>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ct_col">
                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-2"
                >
                  <img crossOrigin="anonymous"
                    className="load_img"
                    data-src={`${CMSPath}${content.tiltImageFW_image[1].image.url}`}
                    width="100%"
                    height="auto"
                    alt={`${content.tiltImageFW_image[1].image.alternativeText}`}
                  />
                  <div className="info_line">
                    <div className="f_14">
                      {content.tiltImageFW_image[1].description} Artwork by{" "}
                      <strong>
                        <Link
                          href={`/creatives/${content.tiltImageFW_image[1].artist.slug}`}
                        >
                          <a target="_blank">
                            {`${content.tiltImageFW_image[1].artist.firstName} ${content.tiltImageFW_image[1].artist.lastName}`}
                          </a>
                        </Link>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiltingFullWidth;
