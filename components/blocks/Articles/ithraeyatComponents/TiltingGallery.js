import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const TiltingGallery = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
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
                  <img
                    className="load_img"
                    data-src={`${CMSPath}${content.galleryImage.image.url}`}
                    width="100%"
                    height="auto"
                    alt={`${content.galleryImage.image.alternativeText}`}
                  />
                  <div className="info_line">
                    {content.galleryImage.image.selectedArtist && (
                      <div className="f_14">
                        {`${t("by")} `}
                        <strong>
                          {locale === "ar" ? (
                            content.galleryImage.image.selectedArtist
                              .localizations.length > 0 ? (
                              <Link
                                href={`/creatives/${content.galleryImage.image.selectedArtist.localizations[0].slug}`}
                              >
                                <a target="_blank">
                                  {`${content.galleryImage.image.selectedArtist.localizations[0].firstName} ${content.galleryImage.image.selectedArtist.localizations[0].lastName}`}
                                </a>
                              </Link>
                            ) : null
                          ) : (
                            <Link
                              href={`/creatives/${content.galleryImage.image.selectedArtist.slug}`}
                            >
                              <a target="_blank">
                                {`${content.galleryImage.image.selectedArtist.firstName} ${content.galleryImage.image.selectedArtist.lastName}`}
                              </a>
                            </Link>
                          )}
                        </strong>
                      </div>
                    )}
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
                      <img
                        className="load_img"
                        data-src={`${CMSPath}${image.image.url}`}
                        width="100%"
                        height="auto"
                        alt={`${image.image.alternativeText}`}
                      />
                      <div className="info_line">
                        <div className="f_14">
                          {locale === 'en' ? image.image.caption : image.image.arabic_caption}{" "}
                          {`${
                            image.image.selectedArtist ? t("artwork_by") : ""
                          } `}
                          {image.image.selectedArtist && (
                            <strong>
                              {locale === "ar" ? (
                                image.image.selectedArtist.localizations
                                  .length > 0 ? (
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
                          )}
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
