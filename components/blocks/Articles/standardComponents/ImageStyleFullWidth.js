import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
const ImageStyleFullWidth = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();

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
                <img
                  className="load_img"
                  data-src={`${CMSPath}${content.imageFullWidth_image[0].image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${content.imageFullWidth_image[0].image.alternativeText}`}
                />

                <div className="info_line">
                  <div className="f_14">
                    {locale === 'en' ? content.imageFullWidth_image[0].image.caption : content.imageFullWidth_image[0].image.arabic_caption}{" "}
                    {`${
                      content.imageFullWidth_image[0].image.selectedArtist
                        ? t("artwork_by")
                        : ""
                    } `}
                    {content.imageFullWidth_image[0].image.selectedArtist && (
                      <strong>
                        {locale === "ar" ? (
                          content.imageFullWidth_image[0].image.selectedArtist
                            .localizations.length > 0 ? (
                            <Link
                              href={`/creatives/${content.imageFullWidth_image[0].image.selectedArtist.localizations[0].slug}`}
                            >
                              <a target="_blank">
                                {`${content.imageFullWidth_image[0].image.selectedArtist.localizations[0].firstName} ${content.imageFullWidth_image[0].image.selectedArtist.localizations[0].lastName}`}
                              </a>
                            </Link>
                          ) : null
                        ) : (
                          <Link
                            href={`/creatives/${content.imageFullWidth_image[0].image.selectedArtist.slug}`}
                          >
                            <a target="_blank">
                              {`${content.imageFullWidth_image[0].image.selectedArtist.firstName} ${content.imageFullWidth_image[0].image.selectedArtist.lastName}`}
                            </a>
                          </Link>
                        )}
                      </strong>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="text_side"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="3"
              >
                <img
                  className="load_img"
                  data-src={`${CMSPath}${content.imageFullWidth_image[1].image.url}`}
                  width="100%"
                  height="auto"
                  alt="Article Name"
                />
                <div className="info_line">
                  <div className="f_14">
                    {locale === 'en' ? content.imageFullWidth_image[1].image.caption : content.imageFullWidth_image[1].image.arabic_caption}{" "}
                    {`${
                      content.imageFullWidth_image[1].image.selectedArtist
                        ? t("artwork_by")
                        : ""
                    } `}
                    {content.imageFullWidth_image[1].image.selectedArtist && (
                      <strong>
                        {locale === "ar" ? (
                          content.imageFullWidth_image[1].image.selectedArtist
                            .localizations.length > 0 ? (
                            <Link
                              href={`/creatives/${content.imageFullWidth_image[1].image.selectedArtist.localizations[0].slug}`}
                            >
                              <a target="_blank">
                                {`${content.imageFullWidth_image[1].image.selectedArtist.localizations[0].firstName} ${content.imageFullWidth_image[1].image.selectedArtist.localizations[0].lastName}`}
                              </a>
                            </Link>
                          ) : null
                        ) : (
                          <Link
                            href={`/creatives/${content.imageFullWidth_image[1].image.selectedArtist.slug}`}
                          >
                            <a target="_blank">
                              {`${content.imageFullWidth_image[1].image.selectedArtist.firstName} ${content.imageFullWidth_image[1].image.selectedArtist.lastName}`}
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
    </section>
  );
};

export default ImageStyleFullWidth;
