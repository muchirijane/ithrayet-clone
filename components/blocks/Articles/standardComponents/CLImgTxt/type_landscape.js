import Link from "next/link";
import { CMSPath } from "../../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const TypeLandscape = (props) => {
  const { t } = useTranslation("common");
  const { title, description, image, isCentered } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head">
              <div className="f_80 alt">{title}</div>
            </div>

            <div className="section_sides inner_sides flex">
              <div
                className="text_side"
                style={isCentered ? { textAlign: "center" } : {}}
              >
                <div
                  className="f_20 less_opacity"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>

              <div className="text_side">
                <img
                  className="load_img"
                  data-src={`${CMSPath}${image.image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${image.image.alternativeText}`}
                />

                <div className="info_line">
                  <div className="f_14">
                    {locale === "en"
                      ? image.image.caption
                      : image.image.arabic_caption}{" "}
                    {`${image.image.selectedArtist ? t("artwork_by") : ""} `}
                    {image.image.selectedArtist && (
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

export default TypeLandscape;
