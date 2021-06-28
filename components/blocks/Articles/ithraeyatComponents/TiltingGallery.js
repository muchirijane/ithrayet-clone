import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const TiltingGallery = (props) => {
  const { content } = props;

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div
              className={
                content.type.toLowerCase() === "left"
                  ? "section_sides tilt_cols flex"
                  : "section_sides tilt_cols reversed flex"
              }
            >
              {content.galleryImage && (
                <div
                  className="three_col"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-1"
                >
                  <img crossorigin="anonymous"
                    className="load_img"
                    data-src={`${CMSPath}${content.galleryImage.image.url}`}
                    width="100%"
                    height="auto"
                    alt={`${content.galleryImage.image.alternativeText}`}
                  />
                  <div className="info_line">
                    <div className="f_14">
                      By{" "}
                      <strong>
                        <Link
                          href={`/creatives/${content.galleryImage.artist.slug}`}
                        >
                          <a target="_blank">
                            {`${content.galleryImage.artist.firstName} ${content.galleryImage.artist.lastName}`}
                          </a>
                        </Link>
                      </strong>
                    </div>
                  </div>
                </div>
              )}

              {content.tiltGallery_image &&
                content.tiltGallery_image.map((image, key) => (
                  <div className="three_col" key={`tilt-gallery-${key}`}>
                    <div
                      data-scroll
                      data-scroll-direction="horizontal"
                      data-scroll-speed={key + 2}
                    >
                      <img crossorigin="anonymous"
                        className="load_img"
                        data-src={`${CMSPath}${image.image.url}`}
                        width="100%"
                        height="auto"
                        alt={`${image.image.alternativeText}`}
                      />
                      <div className="info_line">
                        <div className="f_14">
                          {image.description}
                          Artwork by{" "}
                          <strong>
                            <Link href={`/creatives/${image.artist.slug}`}>
                              <a target="_blank">
                                {`${image.artist.firstName} ${image.artist.lastName}`}
                              </a>
                            </Link>
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiltingGallery;
