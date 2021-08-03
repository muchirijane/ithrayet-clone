import Link from "next/link";
import { CMSPath } from "../../../../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const FullWidthImage = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="media_set full">
          <img
            className="load_img"
            data-src={`${CMSPath}${content.fullWidthImage_image.image.url}`}
            width="100%"
            height="auto"
            alt={content.fullWidthImage_image.image.alternativeText}
          />

          <div className="info_line">
            <div className="f_14">
              {locale  === 'en' ? content.fullWidthImage_image.image.caption : content.fullWidthImage_image.image.arabic_caption}{" "}
              {`${
                content.fullWidthImage_image.image.selectedArtist
                  ? t("artwork_by")
                  : ""
              } `}
              {content.fullWidthImage_image.image.selectedArtist && (
                <strong>
                  {locale === "ar" ? (
                    content.fullWidthImage_image.image.selectedArtist
                      .localizations.length > 0 ? (
                      <Link
                        href={`/creatives/${content.fullWidthImage_image.image.selectedArtist.localizations[0].slug}`}
                      >
                        <a target="_blank">
                          {`${content.fullWidthImage_image.image.selectedArtist.localizations[0].firstName} ${content.fullWidthImage_image.image.selectedArtist.localizations[0].lastName}`}
                        </a>
                      </Link>
                    ) : null
                  ) : (
                    <Link
                      href={`/creatives/${content.fullWidthImage_image.image.selectedArtist.slug}`}
                    >
                      <a target="_blank">
                        {`${content.fullWidthImage_image.image.selectedArtist.firstName} ${content.fullWidthImage_image.image.selectedArtist.lastName}`}
                      </a>
                    </Link>
                  )}
                </strong>
              )}
            </div>
          </div>
        </div>

        <div className="content_a">
          <div className="content_b">
            <div
              className={
                content.fullWidthImage_type.toLowerCase() === "left"
                  ? "media_title  flex"
                  : "media_title reversed flex"
              }
            >
              <strong className="f_80 uppercase">
                {content.fullWidthImage_title}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImage;
