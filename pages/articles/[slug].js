import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import { GET_ARTICLES_SLUGS, GET_ARTICLE_DATA } from "../../graphql";
import BannerSection from "../../components/blocks/Articles/BannerSection";
import ArticleDynamicComponents from "../../components/blocks/Articles/ArticleDynamicComponents";

export const getStaticPaths = async ({ locales }) => {
  const { data } = await client.query({
    query: GET_ARTICLES_SLUGS,
  });

  if (data) {
    let paths = [];

    locales.map((locale) => {
      data.articles.map((article) => {
        paths = [
          ...paths,
          {
            params: { slug: article.slug },
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
    query: GET_ARTICLE_DATA,
    variables: {
      slug: slug,
      locale: context.locale,
    },
  });

  if (data) {
    return {
      props: {
        article: data.articles.length && data.articles[0],
      },
      revalidate: 60,
    };
  }
};

const Article = (props) => {
  const { article } = props;

  return (
    <Layout isInner seo={article && article.seo}>
      {article && (
        <div id="fixed-bar" className="fixed-bar">
          <div
            className="page_bar fixed_item forced-full-width"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-bar"
          >
            <div className="tabs_bar">
              <div className="tab flex scrollTO" data-href="sections">
                <i className="full_bg page_progress"></i>
                <div className="tab_content">
                  <span className="f_40 alt">{`${article.title}`}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="sections">
            <BannerSection
              tags={article.tags}
              title={article.title}
              cover={article.cover}
              quote={article.quote}
              author={`${article.author.firstName} ${article.author.lastName}`}
              timeToRead={article.timeToRead}
              publishedDate={article.publishDate}
            />
            {article.ArticleBlocks.length && (
              <ArticleDynamicComponents articleBlocks={article.ArticleBlocks} />
            )}
            <section>
              <div className="section_content">
                <div className="line_shape jr_shape_set">
                  <svg
                    viewBox="0 0 1440 409"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1502 399.861C1469.17 425.361 1398.99 377.293 1232.5 293.861C1012 183.361 1388 92.3613 1341 183.361C1308.92 245.474 1231 452.86 1077 399.861C923 346.861 774.5 -79.1387 431 14.3613C156.2 89.1613 7.83333 243.195 -32 310.861"
                      className="svg-stroke"
                      stroke-opacity="0.5"
                    ></path>
                  </svg>
                </div>

                <div className="content_a">
                  <div
                    className="section_head_set _link"
                    data-href="article_ithrayat_en.php"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                  >
                    <div className="section_head">
                      <div className="f_30 less_opacity">Up Next</div>
                      <h1>Ithrayat Article</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Article;
