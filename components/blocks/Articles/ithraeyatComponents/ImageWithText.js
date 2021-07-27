import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
const ImageWithText = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
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
                    {content.coverImage.image.caption}{" "}
                    {`${
                      content.coverImage.image.selectedArtist
                        ? t("artwork_by")
                        : ""
                    } `}
                    {content.coverImage.image.selectedArtist &&
                    locale === "ar" ? (
                      content.coverImage.image.selectedArtist.localizations
                        .length > 0 ? (
                        <Link
                          href={`/creatives/${content.coverImage.image.selectedArtist.localizations[0].slug}`}
                        >
                          <a>
                            <strong>{`${content.coverImage.image.selectedArtist.localizations[0].firstName} ${content.coverImage.image.selectedArtist.localizations[0].lastName}`}</strong>
                          </a>
                        </Link>
                      ) : null
                    ) : (
                      <Link
                        href={`/creatives/${content.coverImage.image.selectedArtist.slug}`}
                      >
                        <a>
                          <strong>{`${content.coverImage.image.selectedArtist.firstName} ${content.coverImage.image.selectedArtist.lastName}`}</strong>
                        </a>
                      </Link>
                    )}
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
                    {content.parallaxImageWT_images[0].image.caption}{" "}
                    {`${
                      content.parallaxImageWT_images[0].image.selectedArtist
                        ? t("artwork_by")
                        : ""
                    } `}
                    {locale === "ar" ? (
                      content.parallaxImageWT_images[0].image.selectedArtist
                        .localizations.length > 0 ? (
                        <Link
                          href={`/creatives/${content.parallaxImageWT_images[0].image.selectedArtist.localizations[0].slug}`}
                        >
                          <a>
                            <strong>{`${content.parallaxImageWT_images[0].image.selectedArtist.localizations[0].firstName} ${content.parallaxImageWT_images[0].image.selectedArtist.localizations[0].lastName}`}</strong>
                          </a>
                        </Link>
                      ) : null
                    ) : (
                      <Link
                        href={`/creatives/${content.parallaxImageWT_images[0].image.selectedArtist.slug}`}
                      >
                        <a>
                          <strong>{`${content.parallaxImageWT_images[0].image.selectedArtist.firstName} ${content.parallaxImageWT_images[0].image.selectedArtist.lastName}`}</strong>
                        </a>
                      </Link>
                    )}
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
                    {content.parallaxImageWT_images[1].image.caption}{" "}
                    {`${
                      content.parallaxImageWT_images[1].image.selectedArtist
                        ? t("artwork_by")
                        : ""
                    } `}
                    {locale === "ar" ? (
                      content.parallaxImageWT_images[1].image.selectedArtist
                        .localizations.length > 0 ? (
                        <Link
                          href={`/creatives/${content.parallaxImageWT_images[1].image.selectedArtist.localizations[0].slug}`}
                        >
                          <a>
                            <strong>{`${content.parallaxImageWT_images[1].image.selectedArtist.localizations[0].firstName} ${content.parallaxImageWT_images[0].image.selectedArtist.localizations[0].lastName}`}</strong>
                          </a>
                        </Link>
                      ) : null
                    ) : (
                      <Link
                        href={`/creatives/${content.parallaxImageWT_images[1].image.selectedArtist.slug}`}
                      >
                        <a>
                          <strong>{`${content.parallaxImageWT_images[1].image.selectedArtist.firstName} ${content.parallaxImageWT_images[0].image.selectedArtist.lastName}`}</strong>
                        </a>
                      </Link>
                    )}
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
