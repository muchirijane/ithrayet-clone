import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import LargeQuote from "./quoteSvg/largeQuote";
import SmallQuote from "./quoteSvg/smallQuote";
import SVGComp from "../../../SVGComp";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
const QuoteWithImage = (props) => {
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
                content.layout.toLowerCase() === "left"
                  ? "section_sides inner_sides  flex"
                  : "section_sides inner_sides reversed flex"
              }
            >
              <div className="text_side">
                <div className="quote_set">
                  <strong
                    className={
                      (content.capsTitle && "uppercase",
                      content.isSmallQuote ? "f_40" : "f_80")
                    }
                  >
                    {content.isSmallQuote ? (
                      <SmallQuote>
                        <span>{content.quoteWithImage_quote.title}</span>
                      </SmallQuote>
                    ) : (
                      <LargeQuote>
                        {" "}
                        <span>{content.quoteWithImage_quote.title}</span>{" "}
                      </LargeQuote>
                    )}
                  </strong>
                  <div className="info_line">
                    <div className="f_14">
                      {`${t("by")} `}
                      <strong>
                        <Link href={`/creatives`}>
                          <a target="_blank">
                            {`${content.quoteWithImage_quote.artistName}`}
                          </a>
                        </Link>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text_side">
                <img
                  className="load_img"
                  data-src={`${CMSPath}${content.quoteWithImage_image.image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${content.quoteWithImage_image.image.alternativeText}`}
                />
                <div className="info_line">
                  {content.quoteWithImage_image.symbol && (
                    <div className="info_shape">
                      <SVGComp
                        url_path={`${content.quoteWithImage_image.symbol.symbol.url}`}
                      />
                    </div>
                  )}

                  <div className="f_14">
                    {locale === "en"
                      ? content.quoteWithImage_image.image.caption
                      : content.quoteWithImage_image.image.arabic_caption}{" "}
                    {`${
                      content.quoteWithImage_image.image.selectedArtist
                        ? t("artwork_by")
                        : ""
                    } `}
                    {content.quoteWithImage_image.image.selectedArtist && (
                      <strong>
                        {locale === "ar" ? (
                          content.quoteWithImage_image.image.selectedArtist
                            .localizations.length > 0 ? (
                            <Link
                              href={`/creatives/${content.quoteWithImage_image.image.selectedArtist.localizations[0].slug}`}
                            >
                              <a target="_blank">
                                {`${content.quoteWithImage_image.image.selectedArtist.localizations[0].firstName} ${content.quoteWithImage_image.image.selectedArtist.localizations[0].lastName}`}
                              </a>
                            </Link>
                          ) : null
                        ) : (
                          <Link
                            href={`/creatives/${content.quoteWithImage_image.image.selectedArtist.slug}`}
                          >
                            <a target="_blank">
                              {`${content.quoteWithImage_image.image.selectedArtist.firstName} ${content.quoteWithImage_image.image.selectedArtist.lastName}`}
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

export default QuoteWithImage;
