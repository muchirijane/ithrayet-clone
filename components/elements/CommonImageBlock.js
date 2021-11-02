import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { CMSPath } from "@/helpers/imageCMSPath";

const CommonImageBlock = ({ locale, image }) => {
  const { t } = useTranslation("common");
  return image ? (
    <>
      <img
        className="load_img"
        data-src={`${CMSPath}${image.image.url}`}
        width="100%"
        height="auto"
        alt={`${image.image.alternativeText}`}
      />
      {image.show_caption ? (
        <>
          <div className="info_line image__gallery">
            {image.caption_override ? (
              <div
                className="f_14"
                dangerouslySetInnerHTML={{ __html: image.caption_override }}
              ></div>
            ) : (
              <div className="f_14">
                {`${
                  locale === "en"
                    ? image.image.caption
                    : image.image.arabic_caption
                }`}{" "}
                {`${image.image.selectedArtist ? t("artwork_by") : ""} `}
                <strong>
                  {locale === "ar" ? (
                    image.image.selectedArtist &&
                    image.image.selectedArtist.localizations.length ? (
                      <Link
                        href={`/creatives/${image.image.selectedArtist.localizations[0].slug}`}
                      >
                        <a target="_blank">
                          {`${image.image.selectedArtist.localizations[0].firstName} ${image.image.selectedArtist.localizations[0].lastName}`}
                        </a>
                      </Link>
                    ) : null
                  ) : image.image.selectedArtist &&
                    image.image.selectedArtist.slug ? (
                    <Link
                      href={`/creatives/${image.image.selectedArtist.slug}`}
                    >
                      <a target="_blank">
                        {`${image.image.selectedArtist.firstName} ${image.image.selectedArtist.lastName}`}
                      </a>
                    </Link>
                  ) : null}
                </strong>
              </div>
            )}
          </div>
        </>
      ) : null}
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
    </>
  ) : null;
};

export default CommonImageBlock;
