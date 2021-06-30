import Layout from "../../components/Layout";
import { GET_EDITIONS_DATA } from "../../graphql";
import client from "../../lib/apollo";

import EditionsSection from "../../components/blocks/Editions/editionsSection";
import PageBar from "../../components/blocks/Editions/pageBar";
import SearchBar from "../../components/elements/SearchBar";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_EDITIONS_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        editions: data.editions,
        pageType: "editions",
        SEO: data.listEdition.seo,
      },
      revalidate: 60,
    };
  }
};

const Editions = (props) => {
  const { editions, SEO } = props;

  return (
    <Layout isInner isFilter seo={SEO && SEO}>
      <div className="page_head_set">
        <h1>Editions</h1>
      </div>

      <div className="page_bar">
        <SearchBar />
      </div>

      <div id="fixed-bar" className="fixed-bar">
        <PageBar editions={editions} />

        <EditionsSection editions={editions} />
      </div>
    </Layout>
  );
};

export default Editions;
