import Layout from "../../components/Layout";
import {
  GET_EXPERIENCE_DATA,
  GET_EXPERIENCE_SLUGS,
  GET_NEXT_PROJECT,
} from "../../graphql";
import { CMSPath } from "../../helpers/imageCMSPath";
import client from "../../lib/apollo";
import Link from "next/link";
import { fetchAPI } from "../../helpers/api";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { ArticleBlocksKeyReplace } from "../../helpers/arrayHelper";
import ArticleDynamicComponents from "../../components/blocks/Articles/ArticleDynamicComponents";
import _ from "lodash";
// export const getStaticPaths = async ({ locales }) => {
//   const { data } = await client.query({
//     query: GET_EXPERIENCE_SLUGS,
//   });

//   if (data) {
//     let paths = [];

//     locales.map((locale) => {
//       data.projects.map((project) => {
//         paths = [
//           ...paths,
//           {
//             params: { slug: project.slug },
//             locale,
//           },
//         ];
//       });
//     });

//     return {
//       paths,
//       fallback: true,
//     };
//   }
// };

export const getServerSideProps = async ({
  locale,
  params,
  preview,
  previewData,
}) => {
  const slug = params.slug;

  let data_results;
  if (preview) {
    let result = await fetchAPI(`/preview-drafts/${previewData.preview_id}`);
    data_results = result.json;
    data_results.ArticleBlocks.map((block) => {
      block.__component = `Component${_.upperFirst(
        _.camelCase(block.__component)
      )}`;
    });
    data_results = ArticleBlocksKeyReplace(data_results);
  } else {
    const { data } = await client.query({
      query: GET_EXPERIENCE_DATA,
      variables: {
        slug: slug,
        locale: locale,
      },
    });
    data_results = data;
  }

  if (!preview && data_results.projects.length === 0) {
    return {
      notFound: true,
    };
  }

  if (data_results) {
    const project = preview
      ? data_results
      : data_results.projects.length && data_results.projects[0];
    const nextProject = await client.query({
      query: GET_NEXT_PROJECT,
      variables: {
        limit: 1,
        locale: locale,
        where: {
          _or: [
            {
              published_at_lt: project && project.published_at,
            },
            {
              published_at_gt: project && project.published_at,
            },
          ],
        },
      },
    });
    return {
      props: {
        project: project,
        nextProject:
          nextProject.data.projects.length && nextProject.data.projects[0],
      },
    };
  }
};

const Experience = (props) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  const { project, nextProject } = props;
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
                      strokeOpacity="0.5"
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

                        {ArtistLink(project.showcase.images[0], t, locale)}
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

                        {ArtistLink(project.showcase.images[1], t, locale)}
                      </div>

                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.showcase.images[2].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.showcase.images[2].alternativeText}
                        />
                        {ArtistLink(project.showcase.images[2], t, locale)}
                      </div>

                      <div className="side_img">
                        <img
                          className="load_img"
                          data-src={`${CMSPath}${project.showcase.images[3].image.url}`}
                          width="100%"
                          height="auto"
                          alt={project.showcase.images[3].image.alternativeText}
                        />
                        {ArtistLink(project.showcase.images[3], t, locale)}
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
                        {ArtistLink(project.bottomImages[0], t, locale)}
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
                        {ArtistLink(project.bottomImages[1], t, locale)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {project.ArticleBlocks.length > 0 && (
                <ArticleDynamicComponents
                  articleBlocks={project.ArticleBlocks}
                />
              )}
            </section>

            {nextProject ? (
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
                      data-href={`${
                        locale === "ar" ? "/ar" : ""
                      }/join-experience/${nextProject.slug}`}
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      <div className="section_head">
                        <div className="f_30 less_opacity">{t("up_next")}</div>
                        <h1>{nextProject.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Experience;

const ArtistLink = (data, t, locale) => (
  <div className="f_14">
    {locale === "en" ? data.image.caption : data.image.arabic_caption}{" "}
    {`${data.image.selectedArtist ? t("artwork_by") : ""} `}
    {data.image.selectedArtist && (
      <strong>
        {locale === "ar" ? (
          data.image.selectedArtist.localizations.length > 0 ? (
            <Link
              href={`/creatives/${data.image.selectedArtist.localizations[0].slug}`}
            >
              <a target="_blank">
                {`${data.image.selectedArtist.localizations[0].firstName} ${data.image.selectedArtist.localizations[0].lastName}`}
              </a>
            </Link>
          ) : null
        ) : (
          <Link href={`/creatives/${data.image.selectedArtist.slug}`}>
            <a target="_blank">
              {`${data.image.selectedArtist.firstName} ${data.image.selectedArtist.lastName}`}
            </a>
          </Link>
        )}
      </strong>
    )}
  </div>
);
