import Layout from "../../components/Layout";
import { GET_EXPERIENCE_DATA, GET_EXPERIENCE_SLUGS } from "../../graphql";
import { CMSPath } from "../../helpers/imageCMSPath";
import client from "../../lib/apollo";
import Link from "next/link";
import { fetchAPI } from "../../helpers/api";

export const getStaticPaths = async ({ locales }) => {
  const { data } = await client.query({
    query: GET_EXPERIENCE_SLUGS,
  });

  if (data) {
    let paths = [];

    locales.map((locale) => {
      data.projects.map((project) => {
        paths = [
          ...paths,
          {
            params: { slug: project.slug },
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
  const preview = context.preview;
  const previewData = context.previewData;
  let data_results;
  if (preview) {
    let result = await fetchAPI(`/preview-drafts/${previewData.preview_id}`);
    data_results = result.json;
  } else {
    const { data } = await client.query({
      query: GET_EXPERIENCE_DATA,
      variables: {
        slug: slug,
        locale: context.locale,
      },
    });
    data_results = data;
  }

  if (data_results) {
    return {
      props: {
        project: preview
          ? data_results
          : data_results.projects.length && data_results.projects[0],
      },
      revalidate: 60,
    };
  }
};

const Experience = (props) => {
  const { project } = props;
  return (
    <Layout isInner seo={project && project.seo}>
      {project && (
        <div id="fixed-bar" className="fixed-bar">
          <div
            className="page_bar fixed_item forced-full-width"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-bar"
          >
            <div className="tabs_bar">
              <div className="tab flex">
                <i className="full_bg page_progress"></i>
                <div className="tab_content">
                  <span className="f_40 alt">{project.title}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="sections">
            <section>
              <div className="section_content">
                <div className="content_a">
                  <div className="section_head_set">
                    <div className="section_head">
                      <div className="f_30 less_opacity">{project.quote}</div>
                      <h1>{project.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section_content">
                <div className="content_a">
                  <div className="section_sides text_sides flex">
                    <div className="text_side">
                      <div className="f_80 alt">{project.postCard.title}</div>
                      <div
                        className="f_20 less_opacity"
                        dangerouslySetInnerHTML={{
                          __html: project.postCard.description,
                        }}
                      />
                    </div>

                    <div className="text_side">
                      <div
                        className="f_20 less_opacity"
                        dangerouslySetInnerHTML={{
                          __html: project.content.content,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section_content">
                <div className="line_shape jr_shape_set">
                  <svg
                    viewBox="0 0 1440 409"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-32 399.861C0.833332 425.361 71.0118 377.293 237.5 293.861C458 183.361 82 92.3613 129 183.361C161.081 245.474 239 452.86 393 399.861C547 346.861 695.5 -79.1387 1039 14.3613C1313.8 89.1613 1462.17 243.195 1502 310.861"
                      className="svg-stroke"
                      stroke-opacity="0.5"
                    ></path>
                  </svg>
                </div>

                <div className="content_a">
                  <div className="section_sides inner_sides flex">
                    <div className="inner_side">
                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.showcase.images[0].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.showcase.images[0].image.alternativeText}
                        />
                        <div className="f_14">
                          <p>
                            {project.showcase.images[0].description}
                            Artwork by{" "}
                            <Link
                              href={`/creatives/${project.showcase.images[0].artist.slug}`}
                            >
                              <a>
                                <strong>{`${project.showcase.images[0].artist.firstName} ${project.showcase.images[0].artist.lastName}`}</strong>
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div
                        className="side_img"
                        data-scroll
                        data-scroll-direction="vertical"
                        data-scroll-speed="1"
                      >
                        <strong className="f_80 uppercase">
                          {project.showcase.title}
                        </strong>
                      </div>

                      <div
                        className="side_img"
                        data-scroll
                        data-scroll-direction="vertical"
                        data-scroll-speed="1"
                      >
                        <div
                          className="f_20 less_opacity"
                          dangerouslySetInnerHTML={{
                            __html: project.showcase.description,
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="inner_side"
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="2"
                    >
                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.showcase.images[1].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.showcase.images[1].alternativeText}
                        />
                        <div className="f_14">
                          <p>
                            {project.showcase.images[1].description}
                            Artwork by{" "}
                            <Link
                              href={`/creatives/${project.showcase.images[1].artist.slug}`}
                            >
                              <a>
                                <strong>{`${project.showcase.images[1].artist.firstName} ${project.showcase.images[1].artist.lastName}`}</strong>
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.showcase.images[2].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.showcase.images[2].alternativeText}
                        />
                        <div className="f_14">
                          <p>
                            {project.showcase.images[2].description}
                            Artwork by{" "}
                            <Link
                              href={`/creatives/${project.showcase.images[2].artist.slug}`}
                            >
                              <a>
                                <strong>{`${project.showcase.images[2].artist.firstName} ${project.showcase.images[2].artist.lastName}`}</strong>
                              </a>
                            </Link>
                            .
                          </p>
                        </div>
                      </div>

                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.showcase.images[3].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.showcase.images[3].image.alternativeText}
                        />
                        <div className="f_14">
                          <p>
                            {project.showcase.images[3].description}
                            Artwork by{" "}
                            <Link
                              href={`/creatives/${project.showcase.images[3].artist.slug}`}
                            >
                              <a>
                                <strong>{`${project.showcase.images[3].artist.firstName} ${project.showcase.images[3].artist.lastName}`}</strong>
                              </a>
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section_sides overlapping_sides flex">
                    <div className="inner_side">
                      <div
                        className="side_img"
                        data-scroll
                        data-scroll-direction="vertical"
                        data-scroll-speed="1"
                      >
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.bottomImages[0].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.bottomImages[0].image.alternativeText}
                        />
                        <div className="f_14">
                          <p>
                            {project.bottomImages[0].description}
                            Artwork by{" "}
                            <Link
                              href={`/creatives/${project.bottomImages[0].artist.slug}`}
                            >
                              <a>
                                <strong>{`${project.bottomImages[0].artist.firstName} ${project.bottomImages[0].artist.lastName}`}</strong>
                              </a>
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="inner_side"
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="2"
                    >
                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.bottomImages[1].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.bottomImages[1].image.alternativeText}
                        />
                        <div className="f_14">
                          <p>
                            {project.bottomImages[1].description}
                            Artwork by{" "}
                            <Link
                              href={`/creatives/${project.bottomImages[1].artist.slug}`}
                            >
                              <a>
                                <strong>{`${project.bottomImages[1].artist.firstName} ${project.bottomImages[1].artist.lastName}`}</strong>
                              </a>
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="section_content">
                <div className="line_shape cr_shape_set">
                  <svg
                    viewBox="0 0 1440 409"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1502 399.861C1469.17 425.361 1398.99 377.293 1232.5 293.861C1012 183.361 1388 92.3613 1341 183.361C1308.92 245.474 1231 452.86 1077 399.861C923 346.861 774.5 -79.1387 431 14.3613C156.2 89.1613 7.83333 243.195 -32 310.861"
                      className="svg-stroke"
                      strokeOpacity="0.5"
                    ></path>
                  </svg>
                </div>

                <div className="content_a">
                  <div
                    className="section_head_set _link"
                    data-href="experience_en.php"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                  >
                    <div className="section_head">
                      <div className="f_30 less_opacity">Up Next</div>
                      <h1>Cassettes of Arab legends</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Experience;
