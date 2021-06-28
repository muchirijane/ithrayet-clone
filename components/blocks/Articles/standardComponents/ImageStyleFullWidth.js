import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";

const ImageStyleFullWidth = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head long">
              <div className="f_80 alt">{content.imageFullWidth_title}</div>
            </div>

            <div className="section_sides inner_sides flex">
              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
              >
                <img crossorigin="anonymous"
                  className="load_img"
                  data-src={`${CMSPath}${content.imageFullWidth_image[0].image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${content.imageFullWidth_image[0].image.alternativeText}`}
                />
                <div className="info_line">
                  <div className="f_14">
                    {content.imageFullWidth_image[0].description} Artwork by{" "}
                    <strong>
                      <Link
                        href={`/creatives/${content.imageFullWidth_image[0].artist.slug}`}
                      >
                        <a target="_blank">
                          {`${content.imageFullWidth_image[0].artist.firstName} ${content.imageFullWidth_image[0].artist.lastName}`}
                        </a>
                      </Link>
                    </strong>
                  </div>
                </div>
              </div>

              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="3"
              >
                <img crossorigin="anonymous"
                  className="load_img"
                  data-src={`${CMSPath}${content.imageFullWidth_image[1].image.url}`}
                  width="100%"
                  height="auto"
                  alt="Article Name"
                />
                <div className="info_line">
                  <div className="f_14">
                    {content.imageFullWidth_image[1].description} Artwork by{" "}
                    <strong>
                      <Link
                        href={`/creatives/${content.imageFullWidth_image[1].artist.slug}`}
                      >
                        <a target="_blank">
                          {`${content.imageFullWidth_image[1].artist.firstName} ${content.imageFullWidth_image[1].artist.lastName}`}
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
    </section>
  );
};

export default ImageStyleFullWidth;
