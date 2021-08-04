import Layout from "../../components/Layout";
import { GET_DOWNLOAD_ISSUES_DATA } from "../../graphql";
import { CMSPath } from "../../helpers/imageCMSPath";
import client from "../../lib/apollo";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
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
        SEO: data.downloadIssue.seo,
      },
      revalidate: 60,
    };
  }
};

const DonwloadIssues = (props) => {
  const { t } = useTranslation("common");
  const { SEO } = props;
  const editions = props.editions.filter(item => item.PDF != null);
 
  return (
    <Layout isInner isDownloadUI seo={SEO && SEO}>
      {editions && (
        <div id="fixed-bar" className="fixed-bar">
          <div className="content_a">
            <div
              className="downloads_head flex"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#fixed-bar"
            >
              <strong className="f_14 uppercase">{`${editions.length} ${t(
                "pages.title_downloadIssues"
              )}`}</strong>
              <div className="f_80 alt" id="getName">
                {editions[0].title}
              </div>

              <Link href={`/download-issues/list`}>
                <a className="view_toggle flex">
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
                  <strong className="f_14 uppercase">{t("list_view")}</strong>
                </a>
              </Link>
            </div>
          </div>

          <div id="sections">
            <section>
              {editions.map((edition, key) => {
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
              })}
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DonwloadIssues;
