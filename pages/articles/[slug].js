import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import { GET_ARTICLE_DATA, GET_NEXT_ARTICLE } from "../../graphql";
import BannerSection from "../../components/blocks/Articles/BannerSection";
import ArticleDynamicComponents from "../../components/blocks/Articles/ArticleDynamicComponents";
import { fetchAPI } from "../../helpers/api";
import _ from "lodash";
import { ArticleBlocksKeyReplace } from "../../helpers/arrayHelper";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { GET_RELATED_EDTION_ARTICLES } from "../../graphql/editions";
import { CMSPath } from "../../helpers/imageCMSPath";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// export const getStaticPaths = async ({ locales }) => {
//   const { data } = await client.query({
//     query: GET_ARTICLES_SLUGS,
//   });

//   if (data) {
//     let paths = [];

//     locales.map((locale) => {
//       data.articles.map((article) => {
//         paths = [
//           ...paths,
//           {
//             params: { slug: article.slug },
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
  preview,
  previewData,
  locale,
}) => {
  // console.log(params);
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
      fetchPolicy: "no-cache",
    });

    data_results = data;
  }
  if (!preview && data_results.articles.length === 0) {
    return {
      notFound: true,
    };
  }

  console.log(data_results);
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
          ...(article.edition
            ? {
                edition: {
                  slug: article && article.edition.slug,
                },
              }
            : {}),
          _or: [
            {
              publishDate_lt: article && article.publishDate,
            },
            {
              publishDate_gt: article && article.publishDate,
            },
          ],
        },
      },
    });
    let relatedArticles = null;
    if (article.edition) {
      const related = await client.query({
        query: GET_RELATED_EDTION_ARTICLES,
        variables: {
          limit: 3,
          locale: locale,
          where: {
            edition: {
              id_eq: article.edition.id,
            },
            id_ne: article.id,
          },
        },
      });
      relatedArticles = related.relatedArticles;
    }

    return {
      props: {
        article: article,
        pageType: "article",
        nextArticle: nextArticle.data.articles.length
          ? nextArticle.data.articles[0]
          : null,
        relatedArticles: relatedArticles ? relatedArticles.articles : [],
      },
    };
  }
};

const Article = (props) => {
  const { t } = useTranslation("common");
  const { article, nextArticle, relatedArticles } = props;
  const router = useRouter();
  const { locale } = router;
  const listInnerRef = useRef();

  const [counter, setCounter] = useState(5);
  let interval = null;
  // useEffect(() => {
  //   if (listInnerRef && listInnerRef.current != null) {
  //     var elem = listInnerRef.current;
  //     const mutationObserver = new MutationObserver(function (
  //       mutationsList,
  //       observer
  //     ) {
  //       mutationsList.forEach((mutation) => {
  //         if (
  //           mutation.target?.className &&
  //           mutation.target?.className == "is-inview"
  //         ) {
  //           let count = 5;

  //           interval = setInterval(function () {
  //             count -= 1;
  //             if (!(count < 0)) {
  //               setCounter(count);
  //             }
  //           }, 1000);
  //         } else {
  //           setCounter(5);
  //           clearInterval(interval);
  //         }
  //       });
  //     });

  //     mutationObserver.observe(elem, { attributes: true });
  //   }
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [listInnerRef.current]);

  useEffect(() => {
    if (counter === 0) {
      location.href = `${locale === "ar" ? "/ar" : ""}/articles/${
        nextArticle.slug
      }`;
    }
  }, [counter]);
  console.log(article, "article");
  return (
    <Layout isInner seo={article && article.seo} hasColorMode={true}>
      {article && (
        <div
          id="fixed-bar"
          className="fixed-bar"
          className="background-color"
          data-color={article.color}
          data-tcolor={article.colorText}
        >
          <div
            className="page_bar fixed_item forced-full-width"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-bar"
            style={{
              backgroundColor: article.color ? `${article.color}CC` : "none",
            }}
          >
            <div className="tabs_bar">
              <div className="tab flex scrollTO" data-href="sections">
                <i className="full_bg page_progress"></i>
                <div
                  className="tab_content"
                  style={{
                    color: article.colorText
                      ? article.colorText
                      : article.color,
                  }}
                >
                  <span className="f_40 alt">{`${article.title}`}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="sections">
            <BannerSection
              tags={article.tags}
              title={article.title}
              cover={
                article.cover_alternative
                  ? article.cover_alternative
                  : article.cover
              }
              quote={article.quote}
              author={
                article.author
                  ? `${article.author.firstName} ${article.author.lastName}`
                  : null
              }
              authorSlug={article.author ? article.author.slug : null}
              timeToRead={article.timeToRead}
              publishedDate={article.publishDate}
              symbol={article.edition ? article.edition.symbol : null}
            />
            {article.ArticleBlocks.length > 0 && (
              <ArticleDynamicComponents articleBlocks={article.ArticleBlocks} />
            )}
            {relatedArticles.length ? (
              <section>
                <div className="custom_content">
                  <div className="content_a">
                    <div className="content_b">
                      <div className="side_head custom_head center">
                        <strong className="f_80 uppercase">{`${t(
                          "related_articles"
                        )}`}</strong>
                        <div className="info_line">
                          <div className="f_20 centered_text">
                            {`${t("related_qoute")}`}
                          </div>
                        </div>
                      </div>
                      <div className="section_sides three_cols flex">
                        {relatedArticles &&
                          relatedArticles.map((val, key) => (
                            <div
                              className="three_col"
                              data-scroll
                              data-scroll-direction="vertical"
                              data-scroll-speed="1"
                              key={`related_article-${key}`}
                            >
                              <Link
                                href={`/articles/${val.slug}`}
                                locale={locale}
                              >
                                <a className="_link _curTL1" data-title="Read">
                                  <img
                                    className="load_img"
                                    data-src={`${CMSPath}${val.cover.url}`}
                                    width="100%"
                                    height="auto"
                                    alt={`${val.cover.alternativeText}`}
                                  />
                                  <div className="info_line">
                                    <div className="f_16 centered_text">
                                      {val.quote}
                                    </div>
                                  </div>
                                  <div className="col_title centered_text">
                                    <div className="f_80 alt ">{val.title}</div>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
            {nextArticle && (
              <section ref={listInnerRef} data-scroll data-scroll-repeat>
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
                      data-href={`${locale === "ar" ? "/ar" : ""}/articles/${
                        nextArticle.slug
                      }`}
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      <div className="section_head">
                        {/* <div className="f_30 less_opacity">
                          {`${t("up_next")} `}
                          <span>{counter}</span>
                        </div> */}

                        <h1>{nextArticle.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Article;
