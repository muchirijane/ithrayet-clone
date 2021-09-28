import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import { GET_EDITION_DATA } from "../../graphql";
import PageBarArticle from "../../components/blocks/Editions/Edition/pageBarArticle";
import BannerTitle from "../../components/blocks/Editions/Edition/BannerTitle";
import ArticleSection from "../../components/blocks/Editions/Edition/AritcleSection";
import { fetchAPI } from "../../helpers/api";
import _ from "lodash";
import { GET_RELATED_EDTION_ARTICLES } from "../../graphql/editions";
import { CMSPath } from "../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export const getServerSideProps = async ({
  params,
  preview,
  previewData,
  query,
  locale,
}) => {
  const slug = params.slug;

  const { featured, exclusive } = query;

  let data_results;
  if (preview) {
    let result = await fetchAPI(`/preview-drafts/${previewData.preview_id}`);
    data_results = result.json;
  } else {
    const { data } = await client.query({
      query: GET_EDITION_DATA,
      variables: {
        slug: slug,
        locale: locale,
        isFeatured: featured ? true : null,
        isExclusive: exclusive ? true : null,
      },
    });
    data_results = data;
  }

  if (
    !preview &&
    !_.has(query, "featured") &&
    !_.has(query, "exclusive") &&
    data_results.editions.length === 0
  ) {
    return {
      notFound: true,
    };
  }
  if (data_results) {
    const edition = preview
      ? data_results
      : data_results.editions.length && data_results.editions[0];

    const catJson = [];

    edition?.tags?.forEach((val) => {
      catJson.push({
        tags: { name_eq: val.name },
      });
    });

    const { data: relatedArticles } = await client.query({
      query: GET_RELATED_EDTION_ARTICLES,
      variables: {
        limit: 3,
        locale: locale,
        where: {
          _or: catJson,
        },
      },
    });

    return {
      props: {
        pageType: "edition",
        edition: edition,
        isFeatured: featured ? true : null,
        isExclusive: exclusive ? true : null,
        relatedArticles: relatedArticles && relatedArticles.articles,
      },
      // revalidate: 60,
    };
  }
};

const Edition = (props) => {
  const { edition, isFeatured, isExclusive, relatedArticles } = props;
  const { locale } = useRouter();
  const { t } = useTranslation("common");
 
  return (
    <Layout isInner seo={edition && edition.seo}>
      {edition && (
        <>
          <div id="fixed-bar" className="fixed-bar">
            <PageBarArticle articles={edition.articles} />

            <BannerTitle
              tags={edition.tags}
              title={edition.title}
              type={edition.type}
            />

            <ArticleSection
              articles={edition.articles}
              slug={edition.slug}
              featured={isFeatured}
              exclusive={isExclusive}
            />
          </div>
          <section className="background-color" data-color={edition.color} data-tcolor={edition.colorText}>
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
                          <Link href={`/articles/${val.slug}`} locale={locale}>
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
        </>
      )}
    </Layout>
  );
};

export default Edition;
