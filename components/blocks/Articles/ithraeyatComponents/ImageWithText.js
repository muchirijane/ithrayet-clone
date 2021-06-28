import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";

const ImageWithText = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="section_sides inner_sides flex">
            <div className="inner_side">
              <div
                className="side_img"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
              >
                <img
                  className="load_img"
                  data-src={`${CMSPath}${content.coverImage.image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${content.coverImage.image.alternativeText}`}
                />
                <div className="f_14">
                  <p>
                    {content.coverImage.description} Artwork by{" "}
                    <Link href={`/creatives/${content.coverImage.artist.slug}`}>
                      <a>
                        <strong>{`${content.coverImage.artist.firstName} ${content.coverImage.artist.lastName}`}</strong>
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="2"
              >
                <div className="f_80 alt">{content.title}</div>
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </div>
            </div>

            <div
              className="inner_side"
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="2"
            >
              <div className="side_img">
                <img
                  className="load_img"
                  data-src={`${CMSPath}${content.parallaxImageWT_images[0].image.url}`}
                  width="100%"
                  height="auto"
                  alt={content.parallaxImageWT_images[0].image.alternativeText}
                />
                <div className="f_14">
                  <p>
                    {content.parallaxImageWT_images[0].description} Artwork by{" "}
                    <Link
                      href={`/creatives/${content.parallaxImageWT_images[0].artist.slug}`}
                    >
                      <a>
                        <strong>{`${content.parallaxImageWT_images[0].artist.firstName} ${content.parallaxImageWT_images[0].artist.lastName}`}</strong>
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div
                className="side_img"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
              >
                <img
                  className="load_img"
                  data-src={`${CMSPath}${content.parallaxImageWT_images[1].image.url}`}
                  width="100%"
                  height="auto"
                  alt={content.parallaxImageWT_images[1].image.alternativeText}
                />
                <div className="f_14">
                  <p>
                    {content.parallaxImageWT_images[1].description} Artwork by{" "}
                    <Link
                      href={`/creatives/${content.parallaxImageWT_images[1].artist.slug}`}
                    >
                      <a>
                        <strong>{`${content.parallaxImageWT_images[1].artist.firstName} ${content.parallaxImageWT_images[1].artist.lastName}`}</strong>
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
