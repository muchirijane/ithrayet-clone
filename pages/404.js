import Link from "next/link";
import Layout from "../components/Layout";
import { Page404_SEO } from "../constants/page_constants";
import useTranslation from "next-translate/useTranslation";

export default function FourOhFour() {
  const { t } = useTranslation("common");

  return (
    <Layout isInner={true} seo={Page404_SEO}>
      <div className="full_bg nf_wrapper flex">
        <div className="nf_shape">
          <div className="nf_object">
            <svg
              width="148"
              height="139"
              viewBox="0 0 148 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="svg-fill">
                <path d="M1.83919 83.8598C3.14919 81.3698 4.06919 78.8598 5.25919 76.2398C6.43919 73.9998 6.21919 72.0998 6.39919 69.4598C6.56919 66.9498 7.10919 64.9398 8.16919 62.5698C8.16919 62.5698 9.27919 60.2098 10.6192 58.1298C13.3592 53.8998 16.7692 49.2198 20.6792 46.9298C24.3692 44.7298 28.2892 43.9198 31.1292 40.3198C33.1992 37.3398 34.7292 36.4798 38.1392 35.9198C42.6892 34.9998 45.3092 36.6798 49.6792 38.5298C52.6792 39.8498 55.5592 40.5298 58.9792 39.7098C60.3692 39.3598 61.7692 38.7498 63.2892 38.3998C68.0892 37.6098 70.8192 39.6798 73.3992 43.4998C75.4792 46.8098 76.7992 50.3598 78.7492 53.5498C81.1892 57.6298 85.1692 60.4698 88.1192 64.1798C88.1192 64.1798 90.4892 67.0498 91.9292 67.4298C95.3792 68.3498 98.3092 69.8198 102.089 69.5098C106.059 69.2098 109.309 67.1898 112.199 64.4998C116.189 60.7398 117.809 53.7098 122.649 50.9098L122.369 51.0398C122.099 50.5198 121.509 48.9898 122.229 48.6298C122.759 48.3598 124.719 49.3898 124.949 49.8098L123.219 50.6398C123.709 50.4398 124.519 50.1398 125.089 50.0498C125.099 49.6698 125.129 47.7398 125.319 47.4998C126.049 46.6598 127.609 48.6298 127.839 49.1998C128.029 49.6498 128.119 50.0598 128.149 50.4498L128.209 49.6798C131.229 49.7398 133.699 51.6698 136.719 51.7798C138.179 51.8498 139.509 51.4998 140.969 51.8998C142.419 52.3098 143.829 52.8998 144.999 53.8198C145.699 54.3098 146.159 54.8298 146.329 55.6898C146.409 56.1198 146.369 56.3498 146.589 56.7298C146.909 57.2598 147.419 57.5498 147.649 58.2098C148.059 59.4898 147.429 59.8798 146.539 59.8798L146.669 59.9398C146.599 61.3098 143.009 60.9098 142.209 60.7998C141.459 60.7398 140.609 60.3398 139.899 60.6098C139.329 60.8398 138.799 61.3898 138.229 61.6698C137.369 62.0798 136.609 62.2998 135.669 62.3298C135.059 62.3198 134.389 62.3498 133.779 62.3398C133.169 62.3298 132.369 62.0298 131.799 62.1598C131.039 62.3398 130.749 62.9698 130.309 63.5698C130.309 63.5698 130.099 64.4998 129.309 64.8898C125.839 66.6498 123.729 69.0898 121.449 72.1698C119.949 74.1198 118.119 76.0798 116.109 77.4498C114.869 78.2798 113.849 79.3398 112.519 79.9798C110.799 80.8398 108.839 82.1298 107.039 82.8098C107.039 82.8098 98.2792 86.4698 86.0892 84.3098L85.2892 84.0598C84.4092 85.5098 83.3992 86.6698 82.2892 87.9698C80.8892 89.5998 80.6192 91.3898 81.2892 93.5198C81.6892 94.9398 82.8592 100.56 83.2892 103.24C83.6292 105.36 84.5392 107.55 85.1292 109.57C86.0892 112.23 87.4192 114.9 87.7492 117.68C88.1992 120.46 87.5192 123.22 88.2292 125.88C89.0592 128.79 90.5192 131.59 91.5992 134.38C91.6992 134.59 91.8792 134.93 92.0692 135.34C92.6092 136.45 93.2792 138.05 92.8992 138.69C92.5092 139.31 88.9892 138.74 88.2492 138.1C87.3392 137.33 86.8692 135.63 86.5692 133.8C86.2192 131.65 86.1092 129.33 85.7892 128.1C85.0892 124.94 84.3992 121.53 82.0592 118.96C79.4592 116.26 79.5192 113.5 78.8292 109.7C78.2592 106.67 77.4792 104.21 76.4692 101.34C75.3292 98.1098 72.2492 94.4798 72.2492 94.4798L71.0692 93.4298C68.7692 95.1498 66.5092 97.8798 65.4592 100.5C62.4192 108.13 58.3792 114.76 56.0992 122.65C55.5592 124.41 55.3392 126.38 55.0492 128.26C54.9092 128.95 55.0892 129.93 55.2692 130.89C55.4492 131.85 55.6292 132.8 55.4892 133.42C55.1992 135.18 53.1792 133.92 51.2992 133.64C49.0392 133.47 49.5792 133.19 50.2492 131.06C50.3792 130.61 50.5092 130.17 50.6392 129.73C51.5492 126.59 52.3292 123.58 52.9392 120.28C53.5092 116.77 52.9492 113.1 53.6392 109.71C55.1392 103.44 61.5392 98.0198 61.9192 91.3498C61.9192 91.3498 62.1292 89.1398 61.5292 88.1698L61.3592 87.3798C56.8292 87.3998 52.2192 85.6698 48.1992 84.0398C42.8192 81.9198 35.1792 77.2598 29.3092 76.3798C28.1792 76.2098 27.1692 76.4698 27.1692 76.4698C27.4192 83.3998 25.9192 89.2898 21.2892 94.3698C16.0592 100.05 14.0092 104.23 16.2792 112.16C17.5792 116.72 17.7592 118.61 18.5892 121.78C18.9092 122.89 19.6892 123.89 20.3992 124.89C20.7392 125.38 21.0692 125.86 21.3092 126.36C22.3992 128.52 22.3292 128.4 20.0592 128.48C17.9192 128.57 16.7792 128.92 16.0592 126.77C15.8492 126.16 15.7592 125.52 15.6792 124.87C15.5692 124.04 15.4692 123.2 15.1392 122.34C14.0592 119.42 12.8392 116.63 12.1492 113.47C11.4492 110.56 10.6392 109.49 10.0592 106.58L9.59919 109.01C9.15919 112.53 8.98919 116.05 9.42919 119.59C9.59919 121.3 10.2492 123.07 10.7292 124.82C11.1392 126.29 11.4292 127.75 11.2392 129.13C10.2292 129.11 8.58919 129.27 7.45919 129.13C5.69919 128.85 5.93919 129.35 5.84919 127.46C5.81919 126.35 5.88919 125.24 5.97919 124.13C6.11919 122.33 6.28919 120.52 6.16919 118.65C5.85919 114.87 5.13919 111.45 4.07919 108.03C3.24919 105.24 5.19919 102.26 5.99919 99.6298C8.91919 91.4998 7.82919 82.5398 8.61919 74.1098L8.43919 71.3398L7.80919 72.3498C6.63919 75.1998 5.42919 78.2098 5.46919 81.1098C5.43919 82.8698 5.40919 84.5098 4.49919 86.1298C3.57919 88.1298 1.78919 89.4798 1.36919 91.6098C1.36919 88.6398 0.149192 86.8498 1.83919 83.8598Z"></path>
                <path d="M73.6391 2.00012C72.8891 1.03012 71.8091 0.360119 70.6091 0.170119C69.5091 -0.00988078 68.1691 -0.109881 67.2091 0.210119C65.2891 0.850119 64.2591 2.43012 64.2591 2.43012C64.2591 2.43012 62.3891 3.92012 62.4291 4.78012C62.4791 5.64012 63.5591 7.32012 63.5591 7.32012L63.9291 9.07012C63.9291 9.07012 61.8091 11.3501 61.6691 11.4201C61.5291 11.4901 59.6891 11.4301 58.3091 14.8201C56.9291 18.2101 55.5691 24.0201 56.0591 28.4801C56.5491 32.9401 57.8691 37.6301 58.2191 38.2401C58.5791 38.8501 60.3691 41.6101 60.3691 41.6101L63.3391 41.9501C63.3391 41.9501 69.1291 43.4601 69.7891 51.4801C70.4391 59.5101 70.4991 62.7801 70.9191 62.8301C71.3391 62.8801 76.7191 61.7801 77.5591 61.8801C78.3991 61.9801 82.1891 58.5701 82.1891 58.5701C82.1891 58.5701 83.9991 47.5601 83.1491 45.0501C82.2991 42.5401 81.9991 41.3701 80.0691 39.5901C78.1391 37.8101 79.2491 38.0801 78.8591 36.4701C78.4691 34.8601 78.0991 34.4001 76.9491 33.2701C75.7991 32.1501 72.5491 29.5101 72.5491 29.5101L72.4591 26.5201C72.4591 26.5201 74.1391 20.4601 72.6291 17.4501C71.1191 14.4401 70.4991 12.4301 70.4991 12.4301C70.4991 12.4301 71.2991 12.9001 71.6891 11.9501C72.0791 11.0001 72.6991 10.3601 72.6991 10.3601C72.6991 10.3601 73.8791 10.2101 73.6591 9.62012C73.4391 9.03012 71.8491 6.29012 73.2991 5.04012C74.7491 3.78012 74.2791 2.88012 74.2791 2.88012L73.6391 2.00012Z"></path>
              </g>
            </svg>
          </div>
          <div className="nf_line flex">
            <svg
              width="469"
              height="21"
              viewBox="0 0 469 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="svg-fill">
                <path d="M47.57 1.08L35.68 20.42H59.46L47.57 1.08Z"></path>
                <path d="M11.89 1.08L0 20.42H23.77L11.89 1.08Z"></path>
                <path d="M29.32 20.09L41.2 0.75H17.43L29.32 20.09Z"></path>
                <path d="M83.53 1.08L71.64 20.42H95.42L83.53 1.08Z"></path>
                <path d="M65.28 20.09L77.16 0.75H53.39L65.28 20.09Z"></path>
                <path d="M119.49 1.08L107.6 20.42H131.37L119.49 1.08Z"></path>
                <path d="M101.23 20.09L113.12 0.75H89.35L101.23 20.09Z"></path>
                <path d="M155.45 1.08L143.56 20.42H167.33L155.45 1.08Z"></path>
                <path d="M137.19 20.09L149.08 0.75H125.31L137.19 20.09Z"></path>
                <path d="M191.68 1.08L179.79 20.42H203.57L191.68 1.08Z"></path>
                <path d="M173.43 20.09L185.31 0.75H161.54L173.43 20.09Z"></path>
                <path d="M226.64 1.08L214.75 20.42H238.53L226.64 1.08Z"></path>
                <path d="M209.39 20.09L221.27 0.75H197.5L209.39 20.09Z"></path>
                <path d="M295 1.08L283.12 20.42H306.89L295 1.08Z"></path>
                <path d="M259.32 1.08L247.43 20.42H271.2L259.32 1.08Z"></path>
                <path d="M276.75 20.09L288.64 0.75H264.86L276.75 20.09Z"></path>
                <path d="M243.38 20.09L255.27 0.75H231.5L243.38 20.09Z"></path>
                <path d="M330.96 1.08L319.08 20.42H342.85L330.96 1.08Z"></path>
                <path d="M312.71 20.09L324.59 0.75H300.82L312.71 20.09Z"></path>
                <path d="M366.92 1.08L355.04 20.42H378.81L366.92 1.08Z"></path>
                <path d="M348.67 20.09L360.55 0.75H336.78L348.67 20.09Z"></path>
                <path d="M402.88 1.08L390.99 20.42H414.77L402.88 1.08Z"></path>
                <path d="M384.63 20.09L396.51 0.75H372.74L384.63 20.09Z"></path>
                <path d="M439.11 1.08L427.23 20.42H451L439.11 1.08Z"></path>
                <path d="M420.86 20.09L432.75 0.75H408.97L420.86 20.09Z"></path>
                <path d="M456.82 20.09L468.7 0.75H444.93L456.82 20.09Z"></path>
              </g>
            </svg>
            <svg
              width="469"
              height="21"
              viewBox="0 0 469 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="svg-fill">
                <path d="M47.57 1.08L35.68 20.42H59.46L47.57 1.08Z"></path>
                <path d="M11.89 1.08L0 20.42H23.77L11.89 1.08Z"></path>
                <path d="M29.32 20.09L41.2 0.75H17.43L29.32 20.09Z"></path>
                <path d="M83.53 1.08L71.64 20.42H95.42L83.53 1.08Z"></path>
                <path d="M65.28 20.09L77.16 0.75H53.39L65.28 20.09Z"></path>
                <path d="M119.49 1.08L107.6 20.42H131.37L119.49 1.08Z"></path>
                <path d="M101.23 20.09L113.12 0.75H89.35L101.23 20.09Z"></path>
                <path d="M155.45 1.08L143.56 20.42H167.33L155.45 1.08Z"></path>
                <path d="M137.19 20.09L149.08 0.75H125.31L137.19 20.09Z"></path>
                <path d="M191.68 1.08L179.79 20.42H203.57L191.68 1.08Z"></path>
                <path d="M173.43 20.09L185.31 0.75H161.54L173.43 20.09Z"></path>
                <path d="M226.64 1.08L214.75 20.42H238.53L226.64 1.08Z"></path>
                <path d="M209.39 20.09L221.27 0.75H197.5L209.39 20.09Z"></path>
                <path d="M295 1.08L283.12 20.42H306.89L295 1.08Z"></path>
                <path d="M259.32 1.08L247.43 20.42H271.2L259.32 1.08Z"></path>
                <path d="M276.75 20.09L288.64 0.75H264.86L276.75 20.09Z"></path>
                <path d="M243.38 20.09L255.27 0.75H231.5L243.38 20.09Z"></path>
                <path d="M330.96 1.08L319.08 20.42H342.85L330.96 1.08Z"></path>
                <path d="M312.71 20.09L324.59 0.75H300.82L312.71 20.09Z"></path>
                <path d="M366.92 1.08L355.04 20.42H378.81L366.92 1.08Z"></path>
                <path d="M348.67 20.09L360.55 0.75H336.78L348.67 20.09Z"></path>
                <path d="M402.88 1.08L390.99 20.42H414.77L402.88 1.08Z"></path>
                <path d="M384.63 20.09L396.51 0.75H372.74L384.63 20.09Z"></path>
                <path d="M439.11 1.08L427.23 20.42H451L439.11 1.08Z"></path>
                <path d="M420.86 20.09L432.75 0.75H408.97L420.86 20.09Z"></path>
                <path d="M456.82 20.09L468.7 0.75H444.93L456.82 20.09Z"></path>
              </g>
            </svg>
          </div>
        </div>

        <div className="wrap_text">
          <div className="f_80 alt">{t("not_found.title")}</div>
          <div className="f_20">{t("not_found.description")}</div>
          <div className="f_16">
            <a href="/" style={{ color: "#9C8AE5" }}>
              {t("not_found.callback")}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
