import ExperienceDynamicComponents from "../../components/blocks/JoinExperience/ExperienceDynamicComponents";
import InnerFooter from "../../components/InnerFooter";
import Layout from "../../components/Layout";
import client from "../../lib/apollo";
import Link from "next/link";
import { CMSPath } from "../../helpers/imageCMSPath";
import { GET_JOINEXPERIENCE_DATA } from "../../graphql";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_JOINEXPERIENCE_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        joinExperience: data.joinExperience,
        news_letter: data.newsLetterForm,
      },
      revalidate: 60,
    };
  }
};

const JoinExperience = (props) => {
  const { joinExperience, news_letter } = props;
  return (
    <Layout isInner isFilter>
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
                  {joinExperience && (
                    <ExperienceDynamicComponents
                      ProjectSections={joinExperience.ProjectSections}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="section_content">
              <div className="content_a">
                <div className="hero_text flex has_shape">
                  <strong className="f_80 uppercase">
                    Want to contribute <br />
                    to Ithraeyat?
                  </strong>
                  <div className="f_20 less_opacity">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod
                  </div>
                  <div className="circle_btn_set mg" data-dist="5">
                    <a
                      href="collaborate_en.php"
                      className="btn circle_btn flex"
                    >
                      <span>Join Now</span>
                    </a>
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

          <InnerFooter sectionData={news_letter} />
        </div>
      </div>
    </Layout>
  );
};

export default JoinExperience;
