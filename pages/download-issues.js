import { useState } from "react";
import InnerFooter from "../components/InnerFooter";
import Layout from "../components/Layout";
import { GET_DOWNLOAD_ISSUES_DATA } from "../graphql";
import { CMSPath } from "../helpers/imageCMSPath";
import client from "../lib/apollo";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_DOWNLOAD_ISSUES_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        editions: data.editions.length && data.editions,
        news_letter: data.newsLetterForm,
      },
      revalidate: 60,
    };
  }
};

const DonwloadIssues = (props) => {
  const { editions, news_letter } = props;
  const [isListView, toggleView] = useState(true);

  return (
    <Layout isInner isFilter isDownloadUI>
      {editions && (
        <div id="fixed-bar" class="fixed-bar">
          <div class="content_a">
            {isListView ? (
              <div
                class="downloads_head flex"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#fixed-bar"
              >
                <strong class="f_14 uppercase">{`${editions.length} EDITIONS`}</strong>
                <div class="f_80 alt" id="getName">
                  {editions[0].title}
                </div>

                <a
                  href="#"
                  class="view_toggle flex"
                  onClick={() => {
                    toggleView(false);
                  }}
                >
                  <div class="view_shape_set flex">
                    <div class="list flex">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                  <strong class="f_14 uppercase">LIST VIEW</strong>
                </a>
              </div>
            ) : (
              <div class="downloads_head flex">
                <strong class="f_14 uppercase">{`${editions.length} EDITIONS`}</strong>
                <div class="f_80 alt">All Editions</div>
                <a
                  href="#"
                  class="view_toggle flex"
                  onClick={() => {
                    toggleView(true);
                  }}
                >
                  <div class="view_shape_set flex">
                    <svg
                      width="26"
                      height="35"
                      viewBox="0 0 26 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        class="svg-stroke"
                        x="0.5"
                        y="0.5"
                        width="25"
                        height="25"
                      ></rect>
                      <rect
                        class="svg-stroke"
                        x="0.5"
                        y="28.5"
                        width="25"
                        height="6"
                      ></rect>
                    </svg>
                  </div>
                  <strong class="f_14 uppercase">Slider View</strong>
                </a>
              </div>
            )}
          </div>

          <div id="sections">
            <section>
              {isListView ? (
                editions.map((edition, key) => {
                  return (
                    <a
                      key={`edition-download-${key}`}
                      href={`${CMSPath}${edition.PDF.url}`}
                      class="cover_set _download active _curTL1"
                      data-name={edition.title}
                      data-url={`/editions/${edition.slug}`}
                      target="_blank"
                      data-title="Download"
                    >
                      <img
                        class="preloadIMG"
                        data-img={`${CMSPath}${edition.cover.url}`}
                        alt={edition.cover.alternativeText}
                      />
                    </a>
                  );
                })
              ) : (
                <div class="grid_set flex">
                  {editions.map((edition, key) => {
                    return (
                      <a
                        key={`edition-download-${key}`}
                        href={`${CMSPath}${edition.PDF.url}`}
                        class="grid_item _download _curTL1"
                        target="_blank"
                        data-title="Downlaod"
                      >
                        <div class="grid_img">
                          <img
                            class="load_img"
                            data-src={`${CMSPath}${edition.cover.url}`}
                            alt={edition.cover.alternativeText}
                          />
                        </div>
                        <div class="result_title">
                          <div class="f_80 alt">{edition.title}</div>
                          <span class="f_16 less_opacity">{`${edition.type.value} #${edition.type.number}`}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </section>
            {!isListView && <InnerFooter sectionData={news_letter} />}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DonwloadIssues;
