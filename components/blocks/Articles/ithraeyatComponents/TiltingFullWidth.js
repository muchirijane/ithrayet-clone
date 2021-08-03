import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
const TiltingFullWidth = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();

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
                  <img
                    className="load_img"
                    data-src={`${CMSPath}${content.tiltImageFW_image[0].image.url}`}
                    width="100%"
                    height="auto"
                    alt={`${content.tiltImageFW_image[0].image.alternativeText}`}
                  />
                  <div className="info_line">
                    <div className="f_14">
                      {locale === 'en' ? content.tiltImageFW_image[0].image.caption : content.tiltImageFW_image[0].image.arabic_caption}{" "}
                      {`${
                        content.tiltImageFW_image[0].image.selectedArtist
                          ? t("artwork_by")
                          : ""
                      } `}
                      {content.tiltImageFW_image[0].image.selectedArtist && (
                        <strong>
                          {locale === "ar" ? (
                            content.tiltImageFW_image[0].image.selectedArtist
                              .localizations.length > 0 ? (
                              <Link
                                href={`/creatives/${content.tiltImageFW_image[0].image.selectedArtist
                                  .localizations[0].slug}`}
                              >
                                <a target="_blank">
                                  {`${content.tiltImageFW_image[0].image.selectedArtist
                                  .localizations[0].firstName} ${content.tiltImageFW_image[0].image.selectedArtist
                                    .localizations[0].lastName}`}
                                </a>
                              </Link>
                            ) : null
                          ) : (
                            <Link
                              href={`/creatives/${content.tiltImageFW_image[0].image.selectedArtist.slug}`}
                            >
                              <a target="_blank">
                                {`${content.tiltImageFW_image[0].image.selectedArtist.firstName} ${content.tiltImageFW_image[0].image.selectedArtist.lastName}`}
                              </a>
                            </Link>
                          )}
                        </strong>
                      )}
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
                  <img
                    className="load_img"
                    data-src={`${CMSPath}${content.tiltImageFW_image[1].image.url}`}
                    width="100%"
                    height="auto"
                    alt={`${content.tiltImageFW_image[1].image.alternativeText}`}
                  />
                  <div className="info_line">
                    <div className="f_14">
                      {locale === 'en' ? content.tiltImageFW_image[1].image.caption : content.tiltImageFW_image[1].image.arabic_caption}{" "}
                      {`${
                        content.tiltImageFW_image[1].image.selectedArtist
                          ? t("artwork_by")
                          : ""
                      } `}
                      {content.tiltImageFW_image[1].image.selectedArtist && (
                        <strong>
                          {locale === "ar" ? (
                            content.tiltImageFW_image[1].image.selectedArtist
                              .localizations.length > 0 ? (
                              <Link
                                href={`/creatives/${content.tiltImageFW_image[1].image.selectedArtist
                                  .localizations[0].slug}`}
                              >
                                <a target="_blank">
                                  {`${content.tiltImageFW_image[1].image.selectedArtist
                                  .localizations[0].firstName} ${content.tiltImageFW_image[1].image.selectedArtist
                                    .localizations[0].lastName}`}
                                </a>
                              </Link>
                            ) : null
                          ) : (
                            <Link
                              href={`/creatives/${content.tiltImageFW_image[1].image.selectedArtist.slug}`}
                            >
                              <a target="_blank">
                                {`${content.tiltImageFW_image[1].image.selectedArtist.firstName} ${content.tiltImageFW_image[0].image.selectedArtist.lastName}`}
                              </a>
                            </Link>
                          )}
                        </strong>
                      )}
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
