import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import LargeQuote from "./quoteSvg/largeQuote";
import SmallQuote from "./quoteSvg/smallQuote";
import SVGComp from "../../../SVGComp";

const QuoteWithImage = (props) => {
  const { content } = props;
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
                      By{" "}
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
                <img crossorigin="anonymous"
                  className="load_img"
                  data-src={`${CMSPath}${content.quoteWithImage_image.image.url}`}
                  width="100%"
                  height="auto"
                  alt={`${content.quoteWithImage_image.image.alternativeText}`}
                />
                <div className="info_line">
                  <div className="info_shape">
                    <SVGComp
                      url_path={`${content.quoteWithImage_image.symbol.symbol.url}`}
                    />
                  </div>
                  <div className="f_14">
                    {`${content.quoteWithImage_image.description}`} Artwork by{" "}
                    <strong>
                      <Link
                        href={`/creatives/${content.quoteWithImage_image.artist.slug}`}
                      >
                        <a target="_blank">
                          {`${content.quoteWithImage_image.artist.firstName} ${content.quoteWithImage_image.artist.lastName}`}
                        </a>
                      </Link>
                    </strong>
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
