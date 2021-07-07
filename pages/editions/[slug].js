import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import { GET_EDITION_DATA } from "../../graphql";
import PageBarArticle from "../../components/blocks/Editions/Edition/pageBarArticle";
import BannerTitle from "../../components/blocks/Editions/Edition/BannerTitle";
import ArticleSection from "../../components/blocks/Editions/Edition/AritcleSection";
import { fetchAPI } from "../../helpers/api";
import _ from "lodash";
// export const getStaticPaths = async ({ locales }) => {
//   const { data } = await client.query({
//     query: GET_EDITION_SLUGS,
//   });

//   if (data) {
//     let paths = [];

//     locales.map((locale) => {
//       data.editions.map((edition) => {
//         paths = [
//           ...paths,
//           {
//             params: { slug: edition.slug },
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
  if (!preview && _.isEmpty(query) && data_results.editions.length === 0) {
    return {
      notFound: true,
    };
  }
  if (data_results) {
    return {
      props: {
        edition: preview
          ? data_results
          : data_results.editions.length && data_results.editions[0],
        isFeatured: featured ? true : null,
        isExclusive: exclusive ? true : null,
      },
      // revalidate: 60,
    };
  }
};

const Edition = (props) => {
  const { edition, isFeatured, isExclusive } = props;

  return (
    <Layout isInner seo={edition && edition.seo}>
      {edition && (
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
      )}
    </Layout>
  );
};

export default Edition;
