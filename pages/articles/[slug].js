import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import {
  GET_ARTICLES_SLUGS,
  GET_ARTICLE_DATA,
  GET_NEXT_ARTICLE,
} from "../../graphql";
import BannerSection from "../../components/blocks/Articles/BannerSection";
import ArticleDynamicComponents from "../../components/blocks/Articles/ArticleDynamicComponents";
import { fetchAPI } from "../../helpers/api";
import _ from "lodash";
import { ArticleBlocksKeyReplace } from "../../helpers/arrayHelper";

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

export const getStaticProps = async ({
  params,
  preview,
  previewData,
  locale,
}) => {
  const slug = params.slug;

  let data_results;
  if (preview) {
    let result = await fetchAPI(`/preview-drafts/${previewData.preview_id}`);
    data_results = result.json;
    data_results.ArticleBlocks.map((block) => {
      block.__component = `Component${_.upperFirst(
        _.camelCase(block.__component)
      )}`;
    });
    data_results = ArticleBlocksKeyReplace(data_results);
  } else {
    const { data } = await client.query({
      query: GET_ARTICLE_DATA,
      variables: {
        slug: slug,
        locale: locale,
      },
    });

    data_results = data;
  }

  if (data_results) {
    const article = preview
      ? data_results
      : data_results.articles.length && data_results.articles[0];

    const nextArticle = await client.query({
      query: GET_NEXT_ARTICLE,
      variables: {
        limit: 1,
        locale: locale,
        where: {
          edition: {
            slug: article && article.edition.slug,
          },
          _or: [
            {
              published_at_lt: article && article.published_at,
            },
            {
              published_at_gt: article && article.published_at,
            },
          ],
        },
      },
    });

    return {
      props: {
        article: article,
        nextArticle: nextArticle.data.articles.length
          ? nextArticle.data.articles[0]
          : null,
      },
      revalidate: 60,
    };
  }
};

const Article = (props) => {
  const { article, nextArticle } = props;

  // console.log(article, nextArticle);

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
              symbol={article.edition.symbol}
            />
            {article.ArticleBlocks.length && (
              <ArticleDynamicComponents articleBlocks={article.ArticleBlocks} />
            )}
            {nextArticle ? (
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
                        strokeOpacity="0.5"
                      ></path>
                    </svg>
                  </div>

                  <div className="content_a">
                    <div
                      className="section_head_set _link"
                      data-href={`/articles/${nextArticle.slug}`}
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      <div className="section_head">
                        <div className="f_30 less_opacity">Up Next</div>
                        <h1>{nextArticle.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Article;
