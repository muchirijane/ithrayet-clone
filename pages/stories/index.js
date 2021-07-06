import Layout from "../../components/Layout";
import { GET_STORIES_DATA } from "../../graphql";
import client from "../../lib/apollo";
import Link from "next/link";
import { CMSPath } from "../../helpers/imageCMSPath";
import SearchBar from "../../components/elements/SearchBar";

export const getServerSideProps = async ({ locale, query }) => {
  const { online_exclusive, story_name } = query;

  const { alphabet, writer, catID, dateFrom, dateTo } = query;

  let catJson;
  let dates = {};
  if (dateFrom && dateTo && dateFrom != "" && dateTo != "") {
    dates = {
      dateTo: dateTo && dateTo != "" ? new Date(dateTo) : null,
      dateFrom: dateFrom && dateFrom != "" ? new Date(dateFrom) : null,
    };
  }

  if (catID && catID != "") {
    catJson = [];
    let splitArray = catID.split(",");
    if (splitArray.length > 0) {
      splitArray.map((val) => {
        catJson.push({
          articles: { tags: { name_eq: val } },
        });
      });
    } else {
      catJson.push({
        articles: { tags: { name_eq: catID } },
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
          name_containss: val,
        });
      });
    } else {
      alphabetJson.push({
        name_containss: val,
      });
    }
  }
 
  const { data } = await client.query({
    query: GET_STORIES_DATA,
    variables: {
      ...dates,
      locale: locale,
      isOnlineExclusive: online_exclusive && true,
      name: story_name && story_name,
      authFirstName: writer && writer != "" && writer.split(",")[0],
      authLastName: writer && writer != "" && writer.split(",")[1],
      tags: catJson && catJson,
      alphabets: alphabetJson && alphabetJson,
    },
  });

  if (data.stories.length === 0) {
    return {
      notFound: true,
    };
  }
  if (data) {
    return {
      props: {
        stories: data.stories,
        storiedCount: data.countStories,
        SEO: data.listStory.seo,
        isOnlineExclusive: online_exclusive ? true : null,
        storyName: story_name ? story_name : null,
        filter_authors: data.filter_authors,
        filter_tags: data.filter_tags,
        allStoriesName: data.allStoryNames,
      },
    };
  }
};
const Stories = (props) => {
  const {
    filter_authors,
    filter_tags,
    stories,
    storiedCount,
    SEO,
    isOnlineExclusive,
    storyName,
    allStoriesName,
  } = props;
  const isAll = storyName === null;

  return (
    <Layout
      isInner
      isFilter
      seo={SEO && SEO}
      filterData={{
        date: true,
        filter_authors: filter_authors,
        filter_tags: filter_tags,
        alphabet: true,
      }}
    >
      <div className="page_head_set">
        <h1>Our Stories</h1>
      </div>

      <div className="page_bar">
        <SearchBar />
      </div>

      <div className="page_bar">
        <div className="tabs_bar">
          <div className="tab" data-id="7">
            <div className="tab_content tabs_sides flex">
              <span className="f_lable flex">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0091 26.9994C19.9134 26.9994 18.6446 26.6528 17.1867 25.9608C15.5602 25.1888 14.7728 25.2215 14.2576 25.2406C13.8369 25.2597 13.4049 25.2744 12.9752 24.8445C12.8245 24.6937 12.1395 23.8723 13.4859 22.5253C14.1575 21.8535 15.0787 21.66 15.8785 21.6487L11.2148 16.9833C10.577 16.3453 10.5781 15.3055 11.2182 14.6652C11.8571 14.0261 12.8965 14.0227 13.5354 14.6618L15.4747 16.6007C15.5512 16.4477 15.6535 16.3047 15.7807 16.1776C16.225 15.732 16.8628 15.5947 17.4252 15.7691C17.504 15.5463 17.6333 15.337 17.811 15.1592C18.1204 14.8498 18.5321 14.6787 18.9685 14.6776H18.9719C19.369 14.6776 19.7436 14.8171 20.0394 15.0748C20.1159 14.9207 20.2194 14.7755 20.3476 14.6472C20.9866 14.008 22.0259 14.0069 22.6649 14.6438L25.702 17.6832C27.6075 19.5894 27.3972 22.3509 25.1868 24.5643L23.9135 25.8381C23.1283 26.6134 22.1654 26.9994 21.0091 26.9994ZM14.5624 24.1074C15.1766 24.1074 16.1215 24.2087 17.6693 24.9447C21.0259 26.5392 22.387 25.7627 23.1216 25.0403L24.3882 23.7732L24.3893 23.7721C25.7301 22.4285 26.6683 20.2421 24.9157 18.4889L21.8696 15.4417C21.6705 15.2436 21.3443 15.2447 21.144 15.445C20.9438 15.6453 20.9416 15.9694 21.1395 16.1697L21.8999 16.9304C22.0102 17.0407 22.0642 17.1847 22.0642 17.3288C22.0642 17.4728 22.0091 17.6168 21.8999 17.7271C21.6806 17.9465 21.324 17.9465 21.1047 17.7271L19.333 15.9548C19.2374 15.8591 19.1091 15.8062 18.973 15.8062C18.973 15.8062 18.973 15.8062 18.9719 15.8062C18.8347 15.8062 18.7053 15.8603 18.6075 15.9582C18.4061 16.1596 18.405 16.4848 18.6041 16.6851L19.8696 17.951C19.9798 18.0613 20.0338 18.2053 20.0338 18.3494C20.0338 18.4934 19.9787 18.6375 19.8696 18.7477C19.6502 18.9672 19.2936 18.9672 19.0743 18.7477L17.3026 16.9754C17.1035 16.7762 16.7784 16.7774 16.5759 16.9777C16.3746 17.1791 16.3735 17.5043 16.5726 17.7046L17.838 18.9705C17.9483 19.0808 18.0023 19.2249 18.0023 19.3689C18.0023 19.5129 17.9472 19.657 17.838 19.7672C17.6187 19.9867 17.2621 19.9867 17.0428 19.7672L12.7401 15.463C12.541 15.2639 12.2148 15.2661 12.0135 15.4664C11.8121 15.6678 11.811 15.993 12.0101 16.1933L17.8313 22.0167C18.0135 22.199 18.0484 22.4803 17.9168 22.7008C17.7852 22.9225 17.5175 23.0249 17.2745 22.954C17.2531 22.9484 15.2373 22.3689 14.2801 23.3265C13.8448 23.762 13.7806 24.0298 13.7919 24.0906C13.8391 24.1243 13.8493 24.1345 14.2115 24.1209C14.3172 24.1131 14.4331 24.1074 14.5624 24.1074ZM20.747 15.0467H20.7582H20.747Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.42078 22.4871C9.4669 22.4994 9.51415 22.5051 9.56139 22.5051C9.60976 22.5051 9.65813 22.4994 9.7065 22.4871C9.7065 22.4871 10.1564 22.3689 10.8662 22.0966C11.1565 21.9852 11.3016 21.66 11.1902 21.3697C11.0788 21.0782 10.7515 20.9353 10.4635 21.0456C10.0485 21.2042 9.73237 21.3055 9.56139 21.3573C8.44552 21.0208 1.12487 18.5407 1.12487 11.421V0.957059H17.9979V11.421C17.9979 11.5651 17.9979 11.7102 17.9878 11.8543C17.9664 12.1649 18.1993 12.4327 18.5097 12.4552C18.8112 12.4631 19.089 12.2436 19.1104 11.933C19.1228 11.7631 19.1228 11.5921 19.1228 11.421V0.562085C19.1228 0.325776 18.9743 0.113098 18.7516 0.0332031H0.5C0.223858 0.0332031 0 0.257061 0 0.533203V1.10447V11.421C0 19.9496 9.32629 22.4623 9.42078 22.4871Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {isOnlineExclusive ? (
                  <Link href={`/stories`}>
                    <a className="inline_link _up">Stories</a>
                  </Link>
                ) : (
                  <Link href={`/stories?online_exclusive=true`}>
                    <a className="inline_link _up">Online Exclusive</a>
                  </Link>
                )}
              </span>
              {!isOnlineExclusive && (
                <span className="f_lable">{`(${storiedCount.length})`}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="role-setction">
        <div id="fixed-bar" className="fixed-bar">
          <div
            className="content_a fixed_item has_background filters"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-bar"
          >
            <div className="sub-menu" data-page="_stories_fitch_en.php">
              <ul>
                <li>
                  <Link href={`/stories`}>
                    <a className={`${isAll && "active"}`} data-id="-1">
                      <span className="f_lable">All</span>
                    </a>
                  </Link>
                </li>
                {allStoriesName &&
                  allStoriesName.map((story, key) => {
                    return (
                      <li key={`story_name-${key}`}>
                        <Link
                          href={`/stories?story_name=${story.name}${
                            isOnlineExclusive ? "&online_exclusive=true" : ""
                          }`}
                        >
                          <a
                            data-id={`${key + 1}`}
                            className={`${
                              storyName === story.name && "active"
                            }`}
                          >
                            <span className="f_lable">{story.name}</span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <div id="sections">
            <section>
              <div className="section_content has_parallax">
                <div className="content_a">
                  <div
                    className="section_sides stories_sides flex"
                    id="getContent"
                  >
                    {stories &&
                      stories.map((story) => {
                        return story.articles.map((article, key) => {
                          return (
                            <Link
                              href={`/articles/${article.slug}`}
                              key={`story_article-${key}`}
                            >
                              <a
                                className="story_set _curTL1"
                                data-scroll
                                data-scroll-direction="vertical"
                                data-scroll-speed="2"
                                data-title="View"
                              >
                                <div className="story_box">
                                  <div className="story_img">
                                    <i
                                      className="full_bg load_bg"
                                      data-src={`${CMSPath}${article.cover.url}`}
                                      data-scroll
                                      data-scroll-direction="vertical"
                                      data-scroll-speed="-1"
                                    ></i>
                                  </div>
                                  <div className="story_details">
                                    <span className="f_40 alt">
                                      {article.description}
                                    </span>
                                    <div className="tags flex">
                                      {article.tags &&
                                        article.tags.map((tag, tkey) => {
                                          return (
                                            <span
                                              style={{ color: tag.color }}
                                              key={`st_tags-${tkey}`}
                                            >
                                              {tag.name}
                                            </span>
                                          );
                                        })}
                                    </div>
                                    <p className="f_16">{article.quote}</p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          );
                        });
                      })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stories;
