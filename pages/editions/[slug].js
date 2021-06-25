import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import { GET_EDITION_SLUGS, GET_EDITION_DATA } from "../../graphql";
import PageBarArticle from "../../components/blocks/Editions/Edition/pageBarArticle";
import BannerTitle from "../../components/blocks/Editions/Edition/BannerTitle";
import ArticleSection from "../../components/blocks/Editions/Edition/AritcleSection";

export const getStaticPaths = async ({ locales }) => {
  const { data } = await client.query({
    query: GET_EDITION_SLUGS,
  });

  if (data) {
    let paths = [];

    locales.map((locale) => {
      data.editions.map((edition) => {
        paths = [
          ...paths,
          {
            params: { slug: edition.slug },
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
    query: GET_EDITION_DATA,
    variables: {
      slug: slug,
      locale: context.locale,
    },
  });

  if (data) {
    return {
      props: {
        edition: data.editions.length && data.editions[0],
      },
      revalidate: 60,
    };
  }
};

const Edition = (props) => {
  const { edition } = props;
  const router = useRouter();

  return (
    <Layout isInner>
      {edition && (
        <div id="fixed-bar" className="fixed-bar">
          <PageBarArticle articles={edition.articles} />

          <BannerTitle
            tags={edition.tags}
            title={edition.title}
            type={edition.type}
          />

          <ArticleSection articles={edition.articles} />
        </div>
      )}
    </Layout>
  );
};

export default Edition;
