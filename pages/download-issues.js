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
        SEO: data.downloadIssue.seo,
      },
      revalidate: 60,
    };
  }
};

const DonwloadIssues = (props) => {
  const { editions, news_letter, SEO } = props;
  const [isListView, toggleView] = useState(true);

  return (
    <Layout isInner isFilter isDownloadUI seo={SEO && SEO}>
      {editions && (
        <div id="fixed-bar" className="fixed-bar">
          <div className="content_a">
            {isListView ? (
              <div
                className="downloads_head flex"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#fixed-bar"
              >
                <strong className="f_14 uppercase">{`${editions.length} EDITIONS`}</strong>
                <div className="f_80 alt" id="getName">
                  {editions[0].title}
                </div>

                <a
                  href="#"
                  className="view_toggle flex"
                  onClick={() => {
                    toggleView(false);
                  }}
                >
                  <div className="view_shape_set flex">
                    <div className="list flex">
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
                  <strong className="f_14 uppercase">LIST VIEW</strong>
                </a>
              </div>
            ) : (
              <div className="downloads_head flex">
                <strong className="f_14 uppercase">{`${editions.length} EDITIONS`}</strong>
                <div className="f_80 alt">All Editions</div>
                <a
                  href="#"
                  className="view_toggle flex"
                  onClick={() => {
                    toggleView(true);
                  }}
                >
                  <div className="view_shape_set flex">
                    <svg
                      width="26"
                      height="35"
                      viewBox="0 0 26 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-stroke"
                        x="0.5"
                        y="0.5"
                        width="25"
                        height="25"
                      ></rect>
                      <rect
                        className="svg-stroke"
                        x="0.5"
                        y="28.5"
                        width="25"
                        height="6"
                      ></rect>
                    </svg>
                  </div>
                  <strong className="f_14 uppercase">Slider View</strong>
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
                      className="cover_set _download active _curTL1"
                      data-name={edition.title}
                      data-url={`/editions/${edition.slug}`}
                      target="_blank"
                      data-title="Download"
                    >
                      <img
                        className="preloadIMG"
                        data-img={`${CMSPath}${edition.cover.url}`}
                        alt={edition.cover.alternativeText}
                      />
                    </a>
                  );
                })
              ) : (
                <div className="grid_set flex">
                  {editions.map((edition, key) => {
                    return (
                      <a
                        key={`edition-download-${key}`}
                        href={`${CMSPath}${edition.PDF.url}`}
                        className="grid_item _download _curTL1"
                        target="_blank"
                        data-title="Downlaod"
                      >
                        <div className="grid_img">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${edition.cover.url}`}
                            alt={edition.cover.alternativeText}
                          />
                        </div>
                        <div className="result_title">
                          <div className="f_80 alt">{edition.title}</div>
                          <span className="f_16 less_opacity">{`${edition.type.value} #${edition.type.number}`}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </section>
            {(!isListView && news_letter) && <InnerFooter sectionData={news_letter} />}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DonwloadIssues;
