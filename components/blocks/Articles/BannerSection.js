import { format } from "date-fns";
import { CMSPath } from "../../../helpers/imageCMSPath";
import SVGComp from "../../SVGComp";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const BannerSection = (props) => {
  const { t } = useTranslation("common");
  const {locale} = useRouter();
  const {
    tags,
    title,
    cover,
    quote,
    author,
    timeToRead,
    publishedDate,
    symbol,
  } = props;

  return (
    <section>
      <div className="content_a">
        <div className="inner_bar flex">
          <div className="tags_set">
            <div className="tags flex">
              {tags &&
                tags.map((tag, key) => (
                  <a
                    key={`article_tag-${key}`}
                    href="#"
                    style={{ color: tag.color }}
                  >
                    {tag.name}
                  </a>
                ))}
            </div>
          </div>

          <div className="font_set flex">
            <div className="font_circ disabled">
              <strong className="f_20 uppercase" id="decrease">
                {t("aMinus")}
              </strong>
            </div>
            <div className="font_circ">
              <strong className="f_20 uppercase" id="increase">
                {t("aPlus")}
              </strong>
            </div>
          </div>
        </div>

        <div className="section_head_set">
          <div className="section_head">
            <div className="f_30 less_opacity">{quote}</div>
            <h1>{title}</h1>
          </div>
          <div className="cover_image standerd">
            <img
              className="preloadIMG"
              data-img={`${CMSPath}${cover.url}`}
              width="100%"
              height="auto"
              alt={cover.alternativeText}
            />
          </div>
        </div>

        {symbol && symbol.symbol && (
          <div id="scratch" className="no-select">
            <Link href={`/symbols/${symbol.slug}`}>
              <a target="_blank" className="full_bg flex">
                <SVGComp url_path={`${symbol.symbol.url}`} />
              </a>
            </Link>

            <div className="scratch_tip full_bg flex">
              <strong className="f_14 uppercase">{t("scratch_here")}</strong>
              <div className="scratch_svg">
                <svg
                  width="19"
                  height="26"
                  viewBox="0 0 19 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5283 8.22505C16.1262 8.19257 15.7534 8.29426 15.4455 8.49396C15.1654 7.65107 14.4298 7.00119 13.5776 6.93235C13.1755 6.89986 12.8027 7.00155 12.4948 7.20125C12.2147 6.35837 11.4791 5.70849 10.6269 5.63964C10.2708 5.61087 9.9377 5.6873 9.6527 5.84457L9.60214 2.39383C9.58508 1.2295 8.69358 0.211739 7.61438 0.12455C6.53518 0.0373624 5.67142 0.913321 5.68848 2.07765L5.86929 14.4185L3.1584 12.7498C2.75014 12.4985 2.29445 12.3468 1.84147 12.3102C0.81024 12.2269 -0.0140525 13.0639 0.00232525 14.1818C0.0102278 14.7212 0.212324 15.2425 0.571142 15.6521L6.99751 22.9886C8.44957 24.6474 10.3651 25.6509 12.3884 25.8144C15.895 26.0977 18.7029 23.2501 18.6475 19.4668L18.5161 10.4943C18.499 9.33001 17.6075 8.31224 16.5283 8.22505ZM17.6691 19.3878C17.716 22.5894 15.3394 24.9984 12.3719 24.7587C10.6098 24.6163 8.9435 23.7426 7.67927 22.2972L1.25194 14.9606C1.08103 14.7665 0.984521 14.5173 0.98067 14.2545C0.972907 13.7246 1.36579 13.3262 1.85693 13.3658C2.15926 13.3903 2.46175 13.4916 2.73489 13.6592L6.15976 15.7663C6.31262 15.8598 6.49347 15.866 6.63493 15.7815C6.77735 15.697 6.86291 15.5342 6.86024 15.3516L6.66692 2.1567C6.6584 1.57505 7.08977 1.13654 7.62985 1.18017C8.16993 1.2238 8.61518 1.73319 8.6237 2.31479L8.77063 12.3429C8.77489 12.6342 8.99754 12.8884 9.26758 12.9102C9.53762 12.932 9.75333 12.7133 9.74906 12.4219L9.67947 7.67179C9.67095 7.09014 10.1023 6.65163 10.6424 6.69526C11.1825 6.73889 11.6277 7.24828 11.6363 7.82988L11.7058 12.58C11.7101 12.8714 11.9328 13.1255 12.2028 13.1474C12.4728 13.1692 12.6886 12.9504 12.6843 12.6591L12.6302 8.9645C12.6216 8.38285 13.053 7.94433 13.5931 7.98797C14.1332 8.0316 14.5784 8.54099 14.5869 9.12258L14.6411 12.8172C14.6453 13.1085 14.868 13.3627 15.138 13.3845C15.4081 13.4063 15.6238 13.1875 15.6195 12.8962L15.5808 10.2572C15.5723 9.67556 16.0037 9.23704 16.5438 9.28068C17.0838 9.32431 17.5291 9.83369 17.5376 10.4153L17.6691 19.3878Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <canvas
              className="canvas"
              id="js-canvas"
              width="251"
              height="203"
            ></canvas>
          </div>
        )}
        {cover.caption && (
          <div className="info_line">
            <div className="f_14">
              {cover.caption}
              {`${t("artwork_by")} `}

              <strong>
                {locale === "ar" ? (
                  cover.selectedArtist.localizations.length > 0 ? (
                    <Link
                      href={`/creatives/${cover.selectedArtist.localizations[0].slug}`}
                    >
                      <a target="_blank">
                        {`${cover.selectedArtist.localizations[0].firstName} ${cover.selectedArtist.localizations[0].lastName}`}
                      </a>
                    </Link>
                  ) : null
                ) : (
                  <Link href={`/creatives/${cover.selectedArtist.slug}`}>
                    <a target="_blank">
                      {`${cover.selectedArtist.firstName} ${cover.selectedArtist.lastName}`}
                    </a>
                  </Link>
                )}
              </strong>
            </div>
          </div>
        )}

        <div className="content_b">
          <div className="outline_bar flex">
            <div className="f_20">
              {t("by")} {`${author}`}
            </div>
            <div className="f_20">{`${format(
              new Date(publishedDate),
              "MMMM do, yyyy"
            )} · ${Math.floor(timeToRead / 60)} ${t("minutes_read")}`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
