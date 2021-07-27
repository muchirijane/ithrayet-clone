import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const BigImageTitle = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();

  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="media_head">
              <div className="f_40 uppercase">{content.bigImageWT_title}</div>
            </div>

            <div className="media_set">
              <img
                className="load_img"
                data-src={`${CMSPath}${content.bigImageWT_image.image.url}`}
                width="100%"
                height="auto"
                alt={content.bigImageWT_image.image.alternativeText}
              />

              <div className="info_line">
                <div className="f_14">
                  {content.bigImageWT_image.image.caption}{" "}
                  {`${
                    content.bigImageWT_image.image.selectedArtist
                      ? t("artwork_by")
                      : ""
                  } `}
                  {content.bigImageWT_image.image.selectedArtist && (
                    <strong>
                      {locale === "ar" ? (
                        content.bigImageWT_image.image.selectedArtist
                          .localizations.length > 0 ? (
                          <Link
                            href={`/creatives/${content.bigImageWT_image.image.selectedArtist.localizations[0].slug}`}
                          >
                            <a target="_blank">
                              {`${content.bigImageWT_image.image.selectedArtist.localizations[0].firstName} ${content.bigImageWT_image.image.selectedArtist.localizations[0].lastName}`}
                            </a>
                          </Link>
                        ) : null
                      ) : (
                        <Link
                          href={`/creatives/${content.bigImageWT_image.image.selectedArtist.slug}`}
                        >
                          <a target="_blank">
                            {`${content.bigImageWT_image.image.selectedArtist.firstName} ${content.bigImageWT_image.image.selectedArtist.lastName}`}
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
    </section>
  );
};

export default BigImageTitle;
