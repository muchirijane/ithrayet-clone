import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import SVGComp from "../../../SVGComp";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const ImageStyleWT = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
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
                          image.image.artist_relation ? t("artwork_by") : ""
                        } `}
                        {image.image.artist_relation && (
                          <strong>
                            {locale === "ar" ? (
                              image.image.artist_relation.localizations.length >
                              0 ? (
                                <Link href={`/creatives/${image.image.artist_relation.localizations[0].slug}`}>
                                  <a target="_blank">
                                    {`${image.image.artist_relation.localizations[0].firstName} ${image.image.artist_relation.localizations[0].lastName}`}
                                  </a>
                                </Link>
                              ) : null
                            ) : (
                              <Link href={`/creatives/${image.image.artist_relation.slug}`}>
                                <a target="_blank">
                                  {`${image.image.artist_relation.firstName} ${image.image.artist_relation.lastName}`}
                                </a>
                              </Link>
                            )}
                          </strong>
                        )}
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
