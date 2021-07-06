import ExperienceDynamicComponents from "../../components/blocks/JoinExperience/ExperienceDynamicComponents";
import InnerFooter from "../../components/InnerFooter";
import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import { GET_JOINEXPERIENCE_DATA } from "../../graphql";
import SearchBar from "../../components/elements/SearchBar";
import Link from "next/link";
import { ChunkArray, StripPTags } from "../../helpers/arrayHelper";
import Column3Section from "../../components/blocks/JoinExperience/components/Column3Section";
import CenterTextSection from "../../components/blocks/JoinExperience/components/CenterTextSection";
import CenterLogoSection from "../../components/blocks/JoinExperience/components/CenterLogoSection";

export const getServerSideProps = async ({ locale, query }) => {
  const { alphabet, dateFrom, dateTo } = query;
  let dates = {};
  if (dateFrom && dateTo && dateFrom != "" && dateTo != "") {
    dates = {
      dateTo: dateTo && dateTo != "" ? new Date(dateTo) : null,
      dateFrom: dateFrom && dateFrom != "" ? new Date(dateFrom) : null,
    };
  }

  let alphabetJson;
  if (alphabet && alphabet != "") {
    alphabetJson = [];
    let alphabetSplitArray = alphabet.split(",");
    if (alphabetSplitArray.length > 0) {
      alphabetSplitArray.map((val) => {
        alphabetJson.push({
          title_containss: val,
        });
      });
    } else {
      alphabetJson.push({
        title_containss: val,
      });
    }
  }

  const { data } = await client.query({
    query: GET_JOINEXPERIENCE_DATA,
    variables: {
      ...dates,
      locale: locale,
      alphabets: alphabetJson && alphabetJson,
    },
  });

  if (data) {
    return {
      props: {
        joinExperience: data.joinExperience,
        news_letter: data.newsLetterForm,
        projects: data.projects,
        collaborateWithUs: data.collaborateWithUs,
      },
    };
  }
};

const JoinExperience = (props) => {
  const { joinExperience, news_letter, projects, collaborateWithUs } = props;

  return (
    joinExperience && (
      <Layout
        isInner
        isFilter
        seo={joinExperience && joinExperience.seo}
        filterData={{
          date: true,
          filter_authors: false,
          filter_tags: false,
          alphabet: true,
        }}
      >
        <div className="page_head_set">
          <h1>Join The Experience</h1>
        </div>

        <div id="fixed-bar" className="fixed-bar">
          <div
            className="page_bar fixed_item"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-bar"
          >
            <SearchBar />
          </div>

          <div id="sections">
            <section>
              <div className="section_content">
                <div className="line_shape join_shape_set">
                  <svg
                    viewBox="0 0 1440 409"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1941.5 183.361C1908.67 208.861 1372 471.5 1263.5 293.861C1134.94 83.3782 1419 92.3613 1372 183.361C1339.92 245.474 1262 452.86 1108 399.861C954 346.861 805.5 -79.1387 462 14.3613C187.2 89.1613 38.8333 243.195 -1 310.861"
                      className="svg-stroke"
                      strokeOpacity="0.5"
                    ></path>
                  </svg>
                </div>

                <div className="content_a">
                  <div className="section_sides_group">
                    {projects &&
                      ChunkArray(projects, 2).map((project, key) => {
                        if (key + (1 % 2) != 1) {
                          if (key + 1 === 2) {
                            return (
                              <CenterTextSection
                                content={project}
                                centerText={joinExperience.centerText}
                                key={`card-section-${key}`}
                              />
                            );
                          } else if (key + 1 === 4) {
                            return (
                              <CenterLogoSection
                                content={project}
                                centerLogo={joinExperience.centerLogo}
                                key={`card-section-${key}`}
                              />
                            );
                          } else {
                            return (
                              <Column3Section
                                content={project}
                                key={`card-section-${key}`}
                              />
                            );
                          }
                        } else {
                          return (
                            <Column3Section
                              content={project}
                              key={`card-section-${key}`}
                            />
                          );
                        }
                      })}
                    {/* {joinExperience && (
                      <ExperienceDynamicComponents
                        ProjectSections={joinExperience.ProjectSections}
                      />
                    )} */}
                  </div>
                </div>
              </div>
            </section>
            {collaborateWithUs && (
              <section>
                <div className="section_content">
                  <div className="content_a">
                    <div className="hero_text flex has_shape">
                      <strong
                        className="f_80 uppercase"
                        dangerouslySetInnerHTML={{
                          __html: StripPTags(collaborateWithUs.title),
                        }}
                      />

                      <div
                        className="f_20 less_opacity"
                        dangerouslySetInnerHTML={{
                          __html: collaborateWithUs.description,
                        }}
                      />

                      <div className="circle_btn_set mg" data-dist="5">
                        <Link href={`/collaborate`}>
                          <a className="btn circle_btn flex">
                            <span>Join Now</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="line_shape cr_shape_set">
                    <svg
                      viewBox="0 0 1440 409"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1941.5 183.361C1908.67 208.861 1372 471.5 1263.5 293.861C1134.94 83.3782 1419 92.3613 1372 183.361C1339.92 245.474 1262 452.86 1108 399.861C954 346.861 805.5 -79.1387 462 14.3613C187.2 89.1613 38.8333 243.195 -1 310.861"
                        className="svg-stroke"
                        strokeOpacity="0.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </section>
            )}

            <InnerFooter sectionData={news_letter} />
          </div>
        </div>
      </Layout>
    )
  );
};

export default JoinExperience;
