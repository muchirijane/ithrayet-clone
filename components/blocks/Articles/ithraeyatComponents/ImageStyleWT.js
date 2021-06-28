import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import SVGComp from "../../../SVGComp";

const ImageStyleWT = (props) => {
  const { content } = props;
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            {content.galleryWT_sectionTitle && (
              <div className="side_head custom_head center">
                <strong className="f_40 uppercase">
                  {content.galleryWT_sectionTitle}
                </strong>
              </div>
            )}
            <div className="section_sides three_cols flex">
              {content.galleryWT_image &&
                content.galleryWT_image.map((image, key) => (
                  <div
                    key={`parallaxImageWT-${key}`}
                    className="three_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
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
                        <SVGComp src={`${image.symbol.symbol.url}`} />
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

export default ImageStyleWT;
