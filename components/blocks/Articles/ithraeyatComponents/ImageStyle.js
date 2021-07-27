import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import SVGComp from "../../../SVGComp";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const ImageStyle = (props) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
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
                        {`${image.image.caption}`}{" "}
                        {`${
                          image.image.selectedArtist ? t("artwork_by") : ""
                        } `}
                        <strong>
                          {locale === "ar" ? (
                            image.image.selectedArtist.localizations.length >
                            0 ? (
                              <Link
                                href={`/creatives/${image.image.selectedArtist.localizations[0].slug}`}
                              >
                                <a target="_blank">
                                  {`${image.image.selectedArtist.localizations[0].firstName} ${image.image.selectedArtist.localizations[0].lastName}`}
                                </a>
                              </Link>
                            ) : null
                          ) : (
                            <Link
                              href={`/creatives/${image.image.selectedArtist.slug}`}
                            >
                              <a target="_blank">
                                {`${image.image.selectedArtist.firstName} ${image.image.selectedArtist.lastName}`}
                              </a>
                            </Link>
                          )}
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

export default ImageStyle;
