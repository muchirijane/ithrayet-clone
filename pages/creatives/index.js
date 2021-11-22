import Layout from "../../components/Layout";
import { GET_CREATIVES_DATA } from "../../graphql";
import client from "../../lib/apollo";
import Link from "next/link";
import { CMSPath } from "../../helpers/imageCMSPath";
import { padLeadingZeros } from "../../helpers/arrayHelper";
import SearchBar from "../../components/elements/SearchBar";

export const getServerSideProps = async ({ locale, query }) => {
  const { alphabet, alphabetLastName, catID } = query;
  const sortBy = query.sortBy ? query.sortBy : null;
  let catJson;

  if (catID && catID != "") {
    catJson = [];
    let splitArray = catID.split(",");
    if (splitArray.length > 0) {
      splitArray.map((val) => {
        catJson.push({
          tags: { name_eq: val },
        });
      });
    } else {
      catJson.push({
        tags: { name_eq: catID },
      });
    }
  }
  let alphabetJson;
  if (alphabet && alphabet != "") {
    alphabetJson = [];
    let alphabetSplitArray = alphabet.split(",");
    if (alphabetSplitArray.length > 0) {
      alphabetSplitArray.map((val) => {
        alphabetJson.push({
          firstName_containss: val,
        });
      });
    } else {
      alphabetJson.push({
        firstName_containss: val,
      });
    }
  }

  let alphabetLastNameJson;
  if (alphabetLastName && alphabetLastName != "") {
    alphabetLastNameJson = [];
    let alphabetLastNameSplitArray = alphabetLastName.split(",");
    if (alphabetLastNameSplitArray.length > 0) {
      alphabetLastNameSplitArray.map((val) => {
        alphabetLastNameJson.push({
          lastName_containss: val,
        });
      });
    } else {
      alphabetLastNameJson.push({
        lastName_containss: val,
      });
    }
  }
  const { data } = await client.query({
    query: GET_CREATIVES_DATA,
    variables: {
      locale: locale,
      tags: catJson && catJson,
      alphabets: alphabetJson && alphabetJson,
      alphabetLastNameJson: alphabetLastNameJson && alphabetLastNameJson,
      sort: sortBy ? sortBy : "firstName:ASC",
    },
  });
  console.log(data);

  if (data) {
    return {
      props: {
        creatives: data.artists,
        SEO: data.listCreative.seo,
        filter_tags: data.filter_tags,
        sortBy,
      },
    };
  }
};

const Creatives = (props) => {
  const { creatives, SEO, filter_tags } = props;

  return (
    <Layout
      isInner
      isFilter
      seo={SEO && SEO}
      filterData={{
        filter_tags: filter_tags,
        alphabet: true,
        alphabetLastName: true,
        sorting: [
          {
            name: "First Name (Ascending)",
            val: "firstName:ASC",
          },
          {
            name: "First Name (Descending)",
            val: "firstName:DESC",
          },
          {
            name: "Last Name (Ascending)",
            val: "lastName:ASC",
          },
          {
            name: "Last Name (Descending)",
            val: "lastName:DESC",
          },
        ],
      }}
    >
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
                          <div className="table_col flex creative-listing-mobile-image">
                            <span className="f_120 alt">
                              {props.sortBy &&
                              props.sortBy.indexOf("lastName") >= 0
                                ? `${creative.lastName}, ${creative.firstName} `
                                : `${creative.firstName} ${creative.lastName}`}
                            </span>
                          </div>
                          <div className="table_col flex ">
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
