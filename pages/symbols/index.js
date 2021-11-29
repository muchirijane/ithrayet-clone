import Layout from "../../components/Layout";
import { GET_SYMBOLS_DATA } from "../../graphql";
import { format } from "date-fns";
import client from "../../lib/apollo";
import Link from "next/link";
import SVGComp from "../../components/SVGComp";
import useTranslation from "next-translate/useTranslation";
export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_SYMBOLS_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        symbols: data.symbols,
        SEO: data.listSymbol.seo,
      },
      revalidate: 25,
    };
  }
};

const Symbols = (props) => {
  const { t } = useTranslation("common");
  const { symbols, SEO } = props;

  return (
    <Layout isInner seo={SEO && SEO}>
      <div className="page_head_set">
        <h1>{t("pages.title_symbols")}</h1>
      </div>

      <div id="sections">
        <section>
          <div className="section_content">
            <div className="search_block">
              <div className="search_row flex">
                {symbols &&
                  symbols.map((symbol, key) => (
                    <Link
                      href={`/symbols/${symbol.slug}`}
                      key={`symbol-${key}`}
                    >
                      <a className="result_set has_svg">
                        {console.log(symbol)}

                        <div className="result_img">
                          <SVGComp url_path={`${symbol.symbol.url}`} />
                        </div>
                        <div className="f_30 uppercase">{symbol.Title}</div>
                        {symbol.edition && (
                          <div className="result_title">
                            <div className="f_80 alt">
                              {symbol.edition.title}
                            </div>
                            <span className="f_16 less_opacity">
                              {format(
                                new Date(symbol.edition.publishedDate),
                                "MMMM yyyy"
                              )}
                            </span>
                          </div>
                        )}
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Symbols;
