import { CMSPath } from "../../../../helpers/imageCMSPath";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
const GalleryImageWT = (props) => {
  const { t } = useTranslation("common");
  const { content } = props;
  const { locale } = useRouter();
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="content_b">
            <div className="side_head custom_head flex">
              {content.imageSliderWT_sectionTitle && (
                <strong className="f_40 uppercase">
                  {content.imageSliderWT_sectionTitle}
                </strong>
              )}
              <div className="arrows flex">
                <div className="arrow prev mg no-select" data-dist="2">
                  <svg
                    width="30"
                    height="20"
                    viewBox="0 0 30 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="svg-fill"
                      d="M0.569607 10.5296L9.70003 19.66C9.93782 19.8978 10.323 19.8978 10.5607 19.66C10.7985 19.4222 10.7985 19.0371 10.5607 18.7993L2.46936 10.7079H28.9999C29.3364 10.7079 29.6086 10.4357 29.6086 10.0992C29.6086 9.76277 29.3364 9.49051 28.9999 9.49051H2.46936L10.5607 1.39918C10.7985 1.16139 10.7985 0.776203 10.5607 0.538471C10.4419 0.419603 10.2861 0.360142 10.1304 0.360142C9.97463 0.360142 9.8189 0.419603 9.69998 0.538471L0.569548 9.6689C0.331816 9.90663 0.331816 10.2918 0.569607 10.5296Z"
                    ></path>
                  </svg>
                </div>

                <div className="arrow next mg no-select" data-dist="2">
                  <svg
                    width="30"
                    height="20"
                    viewBox="0 0 30 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="svg-fill"
                      d="M29.4303 10.5296L20.2999 19.66C20.0621 19.8978 19.6769 19.8978 19.4392 19.66C19.2014 19.4222 19.2014 19.0371 19.4392 18.7993L27.5306 10.7079H1.00001C0.663554 10.7079 0.391296 10.4357 0.391296 10.0992C0.391296 9.76277 0.663554 9.49051 1.00001 9.49051H27.5306L19.4392 1.39918C19.2014 1.16139 19.2014 0.776203 19.4392 0.538471C19.5581 0.419603 19.7138 0.360142 19.8696 0.360142C20.0253 0.360142 20.181 0.419603 20.3 0.538471L29.4304 9.6689C29.6681 9.90663 29.6681 10.2918 29.4303 10.5296Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="section_sides cs_set">
              {content.images &&
                content.images.map((image, key) => (
                  <div className="cs_col">
                    <img
                      className="load_img"
                      data-src={`${CMSPath}${image.image.url}`}
                      width="100%"
                      height="auto"
                      alt={`${image.image.alternativeText}`}
                    />
                    <div className="info_line">
                      <div className="f_14">
                        {image.image.caption}{" "}
                        {`${
                          image.image.selectedArtist ? t("artwork_by") : ""
                        } `}
                        {image.image.selectedArtist && (
                          <strong>
                            {locale === "ar" ? (
                              image.image.selectedArtist.localizations.length >
                              0 ? (
                                <Link href={`/creatives/${image.image.selectedArtist.localizations[0].slug}`}>
                                  <a target="_blank">
                                    {`${image.image.selectedArtist.localizations[0].firstName} ${image.image.selectedArtist.localizations[0].lastName}`}
                                  </a>
                                </Link>
                              ) : null
                            ) : (
                              <Link href={`/creatives/${image.image.selectedArtist.slug}`}>
                                <a target="_blank">
                                  {`${image.image.selectedArtist.firstName} ${image.image.selectedArtist.lastName}`}
                                </a>
                              </Link>
                            )}
                          </strong>
                        )}
                      </div>
                    </div>
                    {image.title && (
                      <div className="col_title">
                        <div className="f_40 alt">{image.title}</div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryImageWT;
