import Layout from "../../components/Layout";
import { GET_EDITIONS_DATA } from "../../graphql";
import client from "../../lib/apollo";

import EditionsSection from "../../components/blocks/Editions/editionsSection";
import PageBar from "../../components/blocks/Editions/pageBar";

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
        <div className="search_bar flex">
          <div className="search_bar_side flex">
            <div className="bar_icon">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.1273 26.7563L21.2656 19.8947C22.4799 18.2868 23.2 16.2848 23.2 14.1146C23.2 8.81271 18.9019 4.51465 13.6 4.51465C8.29807 4.51465 4 8.81271 4 14.1146C4 19.4166 8.29807 23.7146 13.6 23.7146C15.7702 23.7146 17.7721 22.9946 19.38 21.7803L26.2417 28.642L28.1273 26.7563ZM20.5333 14.1146C20.5333 17.9438 17.4292 21.048 13.6 21.048C9.77083 21.048 6.66667 17.9438 6.66667 14.1146C6.66667 10.2855 9.77083 7.18131 13.6 7.18131C17.4292 7.18131 20.5333 10.2855 20.5333 14.1146Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="bar_input">
              <form action="search_en.php" method="post">
                <input
                  type="text"
                  name="query"
                  placeholder="Are you looking for something?"
                />
              </form>
            </div>
          </div>
          <div className="search_bar_side flex">
            <div className="filters_toggle flex">
              <span className="f_lable">Filter</span>
              <div className="filters_circle flex">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fixed-bar" className="fixed-bar">
        <PageBar editions={editions} />

        <EditionsSection editions={editions} />
      </div>
    </Layout>
  );
};

export default Editions;
