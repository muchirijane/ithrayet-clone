import Layout from "../../components/Layout";
import InnerFooter from "../../components/InnerFooter";
import { GET_SYMBOLS_SLUG, GET_SYMBOL_DATA } from "../../graphql";
import { CMSPath } from "../../helpers/imageCMSPath";
import client from "../../lib/apollo";

export const getStaticPaths = async ({ locales }) => {
  const { data } = await client.query({
    query: GET_SYMBOLS_SLUG,
  });

  if (data) {
    let paths = [];

    locales.map((locale) => {
      data.symbols.map((symbol) => {
        paths = [
          ...paths,
          {
            params: { slug: symbol.slug },
            locale,
          },
        ];
      });
    });

    return {
      paths,
      fallback: true,
    };
  }
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  const { data } = await client.query({
    query: GET_SYMBOL_DATA,
    variables: {
      slug: slug,
      locale: context.locale,
    },
  });

  if (data) {
    return {
      props: {
        symbol: data.symbols.length && data.symbols[0],
        news_letter: data.newsLetterForm && data.newsLetterForm,
      },
      revalidate: 60,
    };
  }
};

const SymbolPage = (props) => {
  const { symbol, news_letter } = props;

  return (
    <Layout isInner seo={symbol && symbol.seo}>
      <div className="page_head_set flex">
        <h1>{symbol && symbol.Title}</h1>
      </div>

      <div id="sections">
        <section>
          <div className="section_content">
            <div className="content_a">
              <div className="section_sides text_sides flex">
                <div className="text_side">
                  <div className="f_80 alt">{symbol && symbol.story.title}</div>
                </div>

                <div className="text_side">
                  <div
                    className="f_20 less_opacity"
                    dangerouslySetInnerHTML={{
                      __html: symbol && symbol.story.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section> 

        <section>
          <div className="section_content near">
            <div className="line_section flex">
              <div
                className="line_text flex"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="2"
              >
                <h1>{symbol && symbol.ideaTitle}</h1>
                <h1>{symbol && symbol.ideaTitle}</h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="custom_content">
            <div className="content_a">
              <div className="content_b">
                <div className="section_sides inner_sides flex">
                  <div className="text_side">
                    <div className="f_80 alt">
                      {symbol && symbol.Inspiration.title}
                    </div>
                    <div
                      className="f_20 less_opacity"
                      dangerouslySetInnerHTML={{
                        __html: symbol && symbol.Inspiration.description,
                      }}
                    />
                  </div>

                  <div
                    className="text_side"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="2"
                  >
                    <img crossorigin="anonymous"
                      className="load_img"
                      data-src={`${CMSPath}${
                        symbol && symbol.Inspiration.image.url
                      }`}
                      width="100%"
                      height="auto"
                      alt={symbol && symbol.Inspiration.image.alternativeText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {news_letter && <InnerFooter sectionData={news_letter} />}
      </div>
    </Layout>
  );
};

export default SymbolPage;
