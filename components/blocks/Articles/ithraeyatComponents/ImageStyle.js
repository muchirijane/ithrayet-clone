import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const ImageStyle = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="section_sides three_cols flex">
              {content.parallaxImage_images &&
                content.parallaxImage_images.map((image, key) => (
                  <div
                    key={`parallaxImage-${key}`}
                    className="three_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                  >
                    <img
                      className="load_img"
                      data-src={`${CMSPath}${image.image.url}`}
                      width="100%"
                      height="auto"
                      alt={`${image.image.alternativeText}`}
                    />
                    <div className="info_line">
                      <div className="f_14">
                        {`${image.description}`} Artwork by{" "}
                        <strong>
                          <Link href={`/creatives/${image.artist.slug}`}>
                            <a target="_blank">
                              {`${image.artist.firstName} ${image.artist.lastName}`}
                            </a>
                          </Link>
                        </strong>
                      </div>
                    </div>
                    {image.title && (
                      <div className="col_title">
                        <div className="f_40 alt">{image.title}</div>
                      </div>
                    )}
                    {image.symbol && (
                      <div className="col_shape">
                        <ReactSVG
                          src={`${CMSPath}${image.symbol.symbol.url}`}
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageStyle;
