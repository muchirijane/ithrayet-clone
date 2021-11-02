import Layout from "../../components/Layout";
import InnerFooter from "../../components/InnerFooter";
import { GET_SYMBOLS_SLUG, GET_SYMBOL_DATA } from "../../graphql";
import { CMSPath } from "../../helpers/imageCMSPath";
import client from "../../lib/apollo";
import { fetchAPI } from "../../helpers/api";

// export const getStaticPaths = async ({ locales }) => {
//   const { data } = await client.query({
//     query: GET_SYMBOLS_SLUG,
//   });

//   if (data) {
//     let paths = [];

//     locales.map((locale) => {
//       data.symbols.map((symbol) => {
//         paths = [
//           ...paths,
//           {
//             params: { slug: symbol.slug },
//             locale,
//           },
//         ];
//       });
//     });

//     return {
//       paths,
//       fallback: true,
//     };
//   }
// };

export const getServerSideProps = async ({
  params,
  previewData,
  preview,
  locale,
}) => {
  const slug = params.slug;

  let data_results;
  if (preview) {
    let result = await fetchAPI(`/preview-drafts/${previewData.preview_id}`);
    data_results = result.json;
  } else {
    const { data } = await client.query({
      query: GET_SYMBOL_DATA,
      variables: {
        slug: slug,
        locale: locale,
      },
      fetchPolicy: "no-cache",
    });
    data_results = data;
  }

  if (!preview && data_results.symbols.length === 0) {
    return {
      notFound: true,
    };
  }

  if (data_results) {
    return {
      props: {
        symbol: preview
          ? data_results
          : data_results.symbols.length && data_results.symbols[0],
        news_letter: preview
          ? null
          : data_results.newsLetterForm && data_results.newsLetterForm,
      },
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
                <h1>{symbol && symbol.movingTextTitle}</h1>
                <h1>{symbol && symbol.movingTextTitle}</h1>
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
                    <img
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
