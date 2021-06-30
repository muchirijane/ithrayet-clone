import Layout from "../../components/Layout";
import { GET_CREATIVES_DATA } from "../../graphql";
import client from "../../lib/apollo";
import Link from "next/link";
import { CMSPath } from "../../helpers/imageCMSPath";
import { padLeadingZeros } from "../../helpers/arrayHelper";
import SearchBar from "../../components/elements/SearchBar";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_CREATIVES_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        creatives: data.artists,
        SEO: data.listCreative.seo,
      },
      revalidate: 60,
    };
  }
};

const Creatives = (props) => {
  const { creatives, SEO } = props;

  return (
    <Layout isInner isFilter seo={SEO && SEO}>
      <div id="fixed-bar" className="fixed-bar">
        <div
          className="page_bar fixed_item forced-full-width"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fixed-bar"
        >
          <SearchBar />
        </div>

        <div id="sections">
          <section>
            <div className="content_a">
              <div className="table_set has_cards">
                {creatives &&
                  creatives.map((creative, key) => {
                    return (
                      <Link
                        href={`/creatives/${creative.slug}`}
                        key={`creative-artist-${key}`}
                      >
                        <a
                          className="table_row flex"
                          data-img={`${CMSPath}${creative.profileImage.url}`}
                        >
                          <div className="table_col flex">
                            <span className="f_120 alt">{`${creative.firstName} ${creative.lastName}`}</span>
                          </div>
                          <div className="table_col flex">
                            <span className="f_120 alt">{`${padLeadingZeros(
                              key + 1,
                              2
                            )}.`}</span>
                            <span className="row_sign"></span>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Creatives;
