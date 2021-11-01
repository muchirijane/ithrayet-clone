import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import LargeQuote from "./quoteSvg/largeQuote";
import SmallQuote from "./quoteSvg/smallQuote";
import SVGComp from "../../../SVGComp";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import CommonImageBlock from "@/components/elements/CommonImageBlock";

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
                  {content.quoteWithImage_quote.artistName && (
                    <div className="info_line">
                      <div className="f_14">
                        {`${t("by")} `}{" "}
                        <strong>
                          {/* <Link href={`/creatives`}>
                            <a target="_blank"> */}
                          {`${content.quoteWithImage_quote.artistName}`}
                          {/* </a>
                          </Link> */}
                        </strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text_side">
                <CommonImageBlock
                  image={content.quoteWithImage_image}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteWithImage;
