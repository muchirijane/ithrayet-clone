import InnerFooter from "../../components/InnerFooter";
import Layout from "../../components/Layout";
import { GET_DOWNLOAD_ISSUES_DATA } from "../../graphql";
import { CMSPath } from "../../helpers/imageCMSPath";
import client from "../../lib/apollo";
import useTranslation from "next-translate/useTranslation";
import { getTypeValue } from "../../helpers/api";
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
        news_letter: data.newsLetterForm,
        SEO: data.downloadIssue.seo,
      },
      revalidate: 60,
    };
  }
};

const DonwloadIssuesList = (props) => {
  const { t } = useTranslation("common");
  const { editions, news_letter, SEO } = props;

  return (
    <Layout isInner seo={SEO && SEO}>
      {editions && (
        <div id="fixed-bar" className="fixed-bar">
          <div className="content_a">
            <div className="downloads_head flex">
              <strong className="f_14 uppercase">{`${editions.length} ${t(
                "pages.title_downloadIssues"
              )}`}</strong>
              <div className="f_80 alt">{t("pages.title_downloadList")}</div>
              <Link href={`/download-issues`}>
                <a className="view_toggle flex">
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
                  <strong className="f_14 uppercase">{t("slider_view")}</strong>
                </a>
              </Link>
            </div>
          </div>

          <div id="sections">
            <section>
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
                        <span className="f_16 less_opacity">{`${getTypeValue(
                          edition.type.value,
                          t
                        )} #${edition.type.number}`}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
            <InnerFooter sectionData={news_letter} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DonwloadIssuesList;
