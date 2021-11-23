import { GET_CREATIVES_SLUGS } from "../../graphql";
import client from "../../lib/apollo";
import Link from "next/link";
import { CMSPath } from "../../helpers/imageCMSPath";
import { GET_CREATIVE_DATA, GET_NEXT_CREATIVE } from "../../graphql/creatives";
import Layout from "../../components/Layout";
import SVGComp from "../../components/SVGComp";
import { fetchAPI } from "../../helpers/api";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { GET_RELATED_EDTION_ARTICLES } from "../../graphql/editions";
// export const getStaticPaths = async ({ locales }) => {
//   const { data } = await client.query({
//     query: GET_CREATIVES_SLUGS,
//   });

//   if (data) {
//     let paths = [];

//     locales.map((locale) => {
//       data.artists.map((edition) => {
//         paths = [
//           ...paths,
//           {
//             params: { slug: edition.slug },
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
  } else {
    const { data } = await client.query({
      query: GET_CREATIVE_DATA,
      variables: {
        slug: slug,
        locale: locale,
      },
      fetchPolicy: "no-cache",
    });
    data_results = data;
  }
  if (!preview && data_results.artists.length === 0) {
    return {
      notFound: true,
    };
  }

  if (data_results) {
    const artist = preview
      ? data_results
      : data_results.artists.length && data_results.artists[0];
    const { data: relatedArticles } = await client.query({
      query: GET_RELATED_EDTION_ARTICLES,
      variables: {
        limit: 3,
        locale: locale,
        where: {
          author: {
            id_eq: artist.id,
          },
        },
      },
    });

    const nextCreative = await client.query({
      query: GET_NEXT_CREATIVE,
      variables: {
        limit: 1,
        locale: locale,
        where: {
          _or: [
            {
              published_at_lt: artist && artist.published_at,
            },
            {
              published_at_gt: artist && artist.published_at,
            },
          ],
        },
      },
    });

    return {
      props: {
        creative: artist,
        relatedArticles: relatedArticles && relatedArticles.articles,
        nextCreative:
          nextCreative.data.artists.length && nextCreative.data.artists[0],
      },
    };
  }
};

const Creative = (props) => {
  const { t } = useTranslation("common");
  const { creative, nextCreative, relatedArticles } = props;
  const router = useRouter();
  const { locale } = router;
  console.log(creative.audioBio);
  return (
    <Layout isInner seo={creative && creative.seo}>
      {creative && (
        <div id="fixed-bar" className="fixed-bar">
          <div
            className="page_bar fixed_item forced-full-width"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-bar"
          >
            <div className="tabs_bar">
              <div className="tab flex scrollTO" data-href="sections">
                <i className="full_bg page_progress"></i>
                <div className="tab_content">
                  <span className="f_40 alt">{`${creative.firstName} ${creative.lastName}`}</span>
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
                      <div className="f_30 less_opacity">{creative.quote}</div>
                      <h1>{`${creative.firstName} ${creative.lastName}`}</h1>
                      <div className="tags flex">
                        {creative.tags &&
                          creative.tags.map((tag, key) => (
                            <Link
                              href={`/creatives?catID=${tag.name}`}
                              key={`creative_tag-link${key}`}
                            >
                              <a style={{ color: tag.color }}>{tag.name}</a>
                            </Link>
                          ))}
                      </div>
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
                      {creative.audioBio ? (
                        <div
                          className="audio_circle"
                          data-id="read1"
                          data-type={
                            creative?.audioBio?.audio_file ? "audio" : "read"
                          }
                          data-audio={`${CMSPath}${creative.audioBio.audio_file.url}`}
                        >
                          <div className="crv_cont full_bg mg" data-dist="7">
                            <div className="crv_text full_bg flex">
                              <svg
                                width="32"
                                height="26"
                                viewBox="0 0 32 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g className="svg-fill">
                                  <path d="M14.0077 0.0595673C13.7453 -0.0554 13.4357 -0.00109864 13.2262 0.197826L5.78831 7.22248H0.722236C0.323032 7.22248 0 7.54551 0 7.94465V18.0556C0 18.4548 0.323032 18.7778 0.722236 18.7778H5.78831L13.2263 25.8025C13.3631 25.9323 13.5415 26 13.7221 26C13.8187 26 13.9161 25.981 14.0077 25.9408C14.2729 25.8272 14.4443 25.5663 14.4443 25.2778V0.722559C14.4442 0.434057 14.2729 0.173113 14.0077 0.0595673ZM12.9998 23.602L6.57115 17.5309C6.43715 17.4039 6.25942 17.3334 6.07533 17.3334H1.4444V8.66681H6.07533C6.25942 8.66681 6.43715 8.59626 6.57115 8.46931L12.9998 2.39832V23.602Z"></path>
                                  <path d="M25.1911 0.137696C24.8652 -0.0971817 24.4145 -0.0237868 24.1825 0.298501C23.9484 0.621533 24.0203 1.07294 24.3433 1.30707C28.094 4.02383 30.3326 8.39523 30.3326 13C30.3326 17.6048 28.094 21.9762 24.3433 24.693C24.0203 24.9271 23.9484 25.3785 24.1825 25.7015C24.3235 25.8962 24.5443 25.9999 24.7679 25.9999C24.9146 25.9999 25.0627 25.9554 25.1911 25.8623C29.3149 22.8748 31.7771 18.0661 31.7771 13C31.777 7.93394 29.3149 3.12529 25.1911 0.137696Z"></path>
                                  <path d="M21.2611 4.44262C20.9261 4.23103 20.4782 4.33191 20.2652 4.66971C20.053 5.00682 20.1545 5.45261 20.4923 5.66555C23.0363 7.26656 24.5554 10.008 24.5554 12.9984C24.5554 15.9888 23.0362 18.7302 20.4923 20.3313C20.1545 20.5443 20.0529 20.99 20.2652 21.3271C20.4027 21.5457 20.6376 21.665 20.8774 21.665C21.0087 21.665 21.1419 21.629 21.2611 21.5543C24.2282 19.6867 25.9999 16.4889 25.9999 12.9985C25.9999 9.50802 24.2282 6.31026 21.2611 4.44262Z"></path>
                                  <path d="M18.4683 9.53384C18.1481 9.29477 17.696 9.36248 17.4576 9.68124C17.2192 10.0014 17.2855 10.4543 17.605 10.6919C18.3512 11.2477 18.7786 12.0891 18.7786 13.0018C18.7786 13.9144 18.3511 14.7558 17.605 15.3116C17.2855 15.5492 17.2192 16.0021 17.4576 16.3223C17.5994 16.5127 17.8166 16.6129 18.0374 16.6129C18.1869 16.6129 18.3385 16.5663 18.4683 16.4697C19.5834 15.6396 20.2231 14.375 20.2231 13.0018C20.2231 11.6285 19.5833 10.364 18.4683 9.53384Z"></path>
                                </g>
                              </svg>
                            </div>
                            <div className="crv_stroke">
                              <span className="spinner full_bg"></span>
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {creative.audioBio ? (
                        <div className="f_20 read1">
                          <div
                            className="less_opacity"
                            dangerouslySetInnerHTML={{
                              __html: creative.audioBio.description,
                            }}
                          ></div>
                          <div className="side_img">
                            <strong className="f_80 uppercase">
                              {creative.audioBio.title}
                            </strong>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="inner_side">
                      <div className="side_img">
                        <img
                          className="preloadIMG"
                          data-img={`${CMSPath}${creative.profileImage.url}`}
                          width="100%"
                          height="auto"
                          alt={creative.profileImage.alternativeText}
                        />
                        {creative.symbol ? (
                          <div className="symbol floating">
                            <SVGComp
                              url_path={`${creative.symbol.symbol.url}`}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section_content">
                <div className="content_a">
                  <div className="section_sides text_sides flex">
                    <div className="text_side">
                      {creative.signature ? (
                        <div className="sign">
                          <SVGComp url_path={`${creative.signature.url}`} />
                        </div>
                      ) : null}

                      <div className="side_img">
                        {creative.statement ? (
                          <strong className="f_80 uppercase">
                            {creative.statement}
                          </strong>
                        ) : null}
                        <div className="text_circle small">
                          <svg
                            width="207"
                            height="206"
                            viewBox="0 0 207 206"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M100.677 178.504L97.9827 178.347L96.3404 203.342L93.6463 203.186L93.4988 205.529L101.572 206L101.729 203.656L99.0345 203.5L100.677 178.504ZM91.4229 177.634L88.7934 177.055L85.721 189.442L83.7005 188.997L86.7728 176.61L84.1434 176.031L77.5281 202.711L80.1576 203.289L83.1285 191.287L85.1582 191.732L82.1782 203.734L84.8076 204.314L91.4229 177.634ZM79.438 174.522L73.6808 172.28L72.7305 174.455L75.9874 175.724L71.7894 185.311L69.1046 184.268L68.1543 186.442L70.8391 187.486L66.798 196.71L63.532 195.44L62.5817 197.614L68.3388 199.855L79.438 174.522ZM57.7102 174.382C58 174.167 58.2744 173.935 58.5313 173.686C59.1712 173.104 59.7576 172.472 60.2843 171.797C63.1445 168.192 62.7661 165.726 61.2715 164.672C59.7768 163.618 57.1566 163.976 54.2965 167.578C49.9233 173.095 52.0545 177.921 47.9304 183.125C45.9375 185.632 45.098 185.775 44.7381 185.516C44.406 185.283 44.2768 184.461 46.7679 181.326C47.2569 180.699 47.7735 180.182 48.1056 179.829L48.6684 179.249L46.6756 177.843L45.9837 178.384C45.3824 178.911 44.8356 179.492 44.3506 180.116C41.4905 183.721 41.8687 186.186 43.3726 187.241C44.8764 188.296 47.4783 187.937 50.3384 184.335C54.7117 178.818 52.5804 173.991 56.7045 168.787C58.6974 166.28 59.5739 166.162 59.906 166.396C60.2658 166.657 60.3582 167.452 57.8763 170.587C57.3781 171.213 56.8429 171.817 56.4369 172.264L55.7173 172.977L57.7102 174.382ZM53.6414 159.05L51.7408 157.246L32.9008 174.908L30.991 173.104L29.2288 174.761L34.9399 180.171L36.702 178.519L34.8015 176.715L53.6414 159.05ZM47.3029 152.605L45.6884 150.56L36.0193 157.318L35.8901 157.161C35.2258 156.311 35.4012 155.553 36.4068 154.854L43.0774 150.193C44.2491 149.378 44.3321 148.83 43.7139 148.044L42.6068 146.629L42.4316 146.745C42.4533 146.884 42.4439 147.025 42.4039 147.159C42.1585 147.62 41.7772 148.004 41.3059 148.266L34.8015 152.81C32.6333 154.324 32.3288 156.241 33.8142 158.128L34.1833 158.6L33.8511 158.833C32.2458 156.788 29.6255 156.422 25.4553 159.335C21.3219 162.225 20.8791 165.016 22.3368 166.872L23.9422 168.917L47.3029 152.605ZM32.0151 160.115L24.3388 165.474L24.2189 165.317C23.7207 164.688 23.8499 163.867 27.1898 161.537C30.5297 159.207 31.3969 159.328 31.8859 159.957L32.0151 160.115ZM40.494 143.311L37.5047 138.161L35.3181 139.292L37.0065 142.21L27.3558 147.186L25.9627 144.782L23.776 145.913L25.1784 148.316L15.8877 153.105L14.19 150.186L12.0126 151.317L14.9926 156.466L40.494 143.311ZM35.8071 134.629L33.519 129.169L31.2032 130.032L32.4949 133.126L22.2629 136.935L21.1928 134.387L18.877 135.249L19.9472 137.797L10.1028 141.462L8.80187 138.367L6.48607 139.23L8.77416 144.69L35.8071 134.629ZM31.8675 123.956L31.2032 121.492L5.46197 127.692L4.79771 125.228L2.38044 125.809L4.38246 133.201L6.79985 132.62L6.12624 130.156L31.8675 123.956ZM29.1826 95.1921L29.4594 92.6621L3.03547 90.0887L3.3123 87.5586L0.830384 87.3169L0 94.9069L2.47268 95.1487L2.74951 92.6187L29.1826 95.1921ZM30.419 86.5176L31.0556 84.0459L17.9359 81.0393L18.4341 79.1381L31.5446 82.1438L32.1811 79.6721L3.93962 73.197L3.30307 75.6688L16.0076 78.5832L15.5186 80.4844L2.80481 77.5708L2.16826 80.0434L30.419 86.5176ZM33.7404 75.2296L36.01 69.7634L33.6942 68.9076L32.4027 72.0047L22.1614 68.224L23.2225 65.6731L20.8975 64.8173L19.8364 67.3682L9.98285 63.7302L11.2653 60.6331L8.94952 59.7765L6.6799 65.2435L33.7404 75.2296ZM33.1499 54.8834C33.3889 55.1453 33.6479 55.3904 33.9249 55.6166C34.5706 56.1943 35.2682 56.7181 36.01 57.1821C39.9681 59.7043 42.5606 59.2329 43.6032 57.7744C44.6458 56.3158 44.1568 53.8693 40.1988 51.3463C34.1464 47.4856 29.1272 49.7225 23.4162 46.081C20.6668 44.3259 20.4823 43.5432 20.7314 43.1866C20.9713 42.8622 21.8293 42.7048 25.2707 44.8982C25.9626 45.3331 26.5347 45.7975 26.9222 46.0923L27.5589 46.5959L28.9612 44.6512L28.3523 44.0285C27.7684 43.4846 27.1286 42.9966 26.4424 42.5717C22.4844 40.0495 19.8918 40.5209 18.84 41.9803C17.7882 43.4397 18.2957 45.8854 22.2538 48.4075C28.3062 52.2682 33.316 50.0322 39.027 53.6736C41.7765 55.4279 41.9426 56.2437 41.7119 56.5681C41.4628 56.9247 40.6139 57.049 37.1818 54.8556C36.4898 54.4207 35.8255 53.9459 35.3365 53.5841L34.5431 52.9387L33.1499 54.8834ZM49.1759 50.2992L50.9842 48.411L31.2677 31.6194L33.0762 29.7313L31.2217 28.157L25.7966 33.8215L27.6511 35.3957L29.4594 33.5075L49.1759 50.2992ZM55.6527 43.9998L57.7379 42.3839L50.0893 33.6171L50.2462 33.4928C51.1134 32.8213 51.9253 32.9518 52.7187 33.8589L57.987 39.9052C58.9096 40.9628 59.5001 41.0167 60.3028 40.3957L61.742 39.2772L61.6129 39.1259C61.4659 39.1515 61.3149 39.1471 61.17 39.1129C60.6701 38.9057 60.2442 38.5673 59.943 38.1379L54.8039 32.243C53.0878 30.2783 51.0397 30.0904 49.1206 31.5811L48.6408 31.9543L48.3732 31.6516C50.4584 30.0365 50.7166 27.5578 47.4137 23.7789C44.1476 20.0296 41.1675 19.7556 39.2762 21.2219L37.191 22.8379L55.6527 43.9998ZM46.9248 29.9896L40.8538 23.0318L41.0199 22.9075C41.6565 22.4109 42.533 22.4909 45.1717 25.5166C47.8104 28.5423 47.7274 29.366 47.0815 29.8652L46.9248 29.9896ZM65.1834 37.1351L70.5254 34.125L69.2522 32.109L66.2167 33.8146L60.5795 24.9104L63.0707 23.5058L61.7974 21.4898L59.3063 22.8944L53.872 14.326L56.9075 12.6205L55.625 10.6045L50.283 13.6137L65.1834 37.1351ZM74.2344 32.423L79.9823 30.1618L79.0228 27.9944L75.766 29.2746L71.5311 19.7017L74.2159 18.6476L73.2564 16.4802L70.5716 17.5343L66.5028 8.32319L69.7597 7.04298L68.8001 4.87564L63.0522 7.13691L74.2344 32.423ZM85.5088 28.605L88.1291 27.9918L81.7169 3.68414L84.3371 3.0701L83.7374 0.791445L75.8767 2.63176L76.4855 4.91044L79.0966 4.30163L85.5088 28.605ZM116.011 27.3708L118.659 27.8666L123.844 3.29535L126.492 3.7911L126.972 1.48808L119.037 0L118.548 2.30302L121.196 2.79964L116.011 27.3708ZM125.062 29.4077L127.59 30.3113L132.378 18.4206L134.325 19.1164L129.527 31.0071L132.046 31.9107L142.379 6.29936L139.851 5.39573L135.211 16.9212L133.264 16.2254L137.914 4.69996L135.395 3.79633L125.062 29.4077ZM136.475 33.9737L141.872 36.8977L143.108 34.8617L140.054 33.2092L145.535 24.2172L148.054 25.5818L149.29 23.5458L146.771 22.1813L152.048 13.5276L155.102 15.1853L156.348 13.1492L150.951 10.2244L136.475 33.9737ZM157.981 36.6942C157.666 36.8754 157.364 37.0755 157.077 37.2934C156.367 37.7968 155.703 38.356 155.093 38.965C151.781 42.2125 151.836 44.7051 153.183 45.9227C154.53 47.1403 157.178 47.0908 160.481 43.8433C165.537 38.8728 164.052 33.8363 168.822 29.1451C171.119 26.8838 171.977 26.8421 172.3 27.1404C172.604 27.4109 172.623 28.2414 169.744 31.0654C169.172 31.6298 168.591 32.0838 168.222 32.3961L167.585 32.9066L169.385 34.5321L170.132 34.0746C170.802 33.6262 171.42 33.1132 171.977 32.5439C175.289 29.2964 175.234 26.8038 173.887 25.5862C172.54 24.3686 169.892 24.4182 166.589 27.6657C161.533 32.6361 163.018 37.6726 158.248 42.3639C155.951 44.6251 155.065 44.6399 154.77 44.3694C154.438 44.0711 154.447 43.2684 157.326 40.4444C157.898 39.8791 158.507 39.3416 158.968 38.945L159.771 38.3205L157.981 36.6942ZM160.066 52.3899L161.727 54.3903L182.652 38.9494L184.313 40.9497L186.269 39.5016L181.277 33.4928L179.321 34.9408L180.982 36.9412L160.066 52.3899ZM165.546 59.4773L166.893 61.682L177.328 56.021L177.43 56.1906C177.983 57.1064 177.716 57.8431 176.636 58.4258L169.44 62.3299C168.185 63.0127 168.028 63.5475 168.545 64.3955L169.477 65.9219L169.661 65.8245C169.657 65.6844 169.685 65.545 169.744 65.4165C170.041 64.986 170.464 64.6458 170.962 64.4373L177.983 60.6305C180.318 59.3616 180.853 57.4908 179.616 55.4557L179.303 54.9469L179.663 54.7521C181.01 56.9568 183.556 57.6048 188.059 55.1643C192.524 52.7439 193.299 50.0182 192.081 48.017L190.734 45.8123L165.546 59.4773ZM181.646 53.678L189.922 49.1885L190.024 49.3581C190.439 50.0365 190.208 50.8366 186.61 52.79C183.012 54.7434 182.163 54.5294 181.748 53.8476L181.646 53.678ZM171.184 69.4433L173.536 74.8773L175.843 73.9893L174.505 70.9106L184.691 66.989L185.789 69.5251L188.095 68.6371L186.997 66.101L196.796 62.3282L198.133 65.4079L200.44 64.5199L198.087 59.085L171.184 69.4433ZM174.81 78.5753L176.443 84.2407L178.841 83.6249L177.919 80.4148L188.538 77.6961L189.295 80.34L191.703 79.7243L190.937 77.0812L201.16 74.4651L202.082 77.6752L204.49 77.0594L202.857 71.3941L174.81 78.5753ZM177.467 89.592L177.845 92.1142L204.158 88.598L204.537 91.1201L207 90.7905L205.865 83.2344L203.402 83.564L203.78 86.0862L177.467 89.592ZM176.876 118.441L176.314 120.927L202.285 126.184L201.723 128.672L204.158 129.164L205.856 121.704L203.42 121.211L202.857 123.698L176.876 118.441ZM174.644 126.955L173.721 129.345L186.398 133.694L185.687 135.532L173.01 131.184L172.088 133.574L199.398 142.947L200.32 140.557L188.031 136.339L188.741 134.501L201.031 138.718L201.953 136.328L174.644 126.955ZM170.021 137.811L167.115 143.002L169.32 144.099L170.962 141.157L180.696 145.999L179.34 148.422L181.535 149.518L182.892 147.096L192.256 151.756L190.614 154.697L192.81 155.794L195.725 150.603L170.021 137.811ZM168.139 158.111C167.933 157.825 167.704 157.553 167.456 157.299C166.887 156.654 166.261 156.058 165.583 155.515C161.967 152.575 159.328 152.759 158.11 154.092C156.892 155.425 157.086 157.909 160.703 160.849C166.229 165.347 171.488 163.677 176.71 167.92C179.22 169.965 179.312 170.763 179.017 171.089C178.74 171.385 177.863 171.446 174.727 168.891C174.09 168.38 173.582 167.86 173.232 167.524L172.66 166.953L171.027 168.731L171.553 169.416C172.069 170.019 172.647 170.572 173.278 171.069C176.886 174.008 179.524 173.825 180.742 172.492C181.96 171.158 181.766 168.674 178.159 165.735C172.623 161.237 167.364 162.906 162.151 158.663C159.632 156.618 159.568 155.793 159.835 155.494C160.14 155.169 160.989 155.136 164.135 157.693C164.762 158.204 165.362 158.745 165.805 159.158L166.515 159.886L168.139 158.111ZM151.633 160.903L149.594 162.572L167.032 181.47L164.993 183.139L166.626 184.91L172.734 179.902L171.101 178.131L169.071 179.8L151.633 160.903ZM144.409 166.409L142.13 167.766L148.552 177.365L148.376 177.469C147.426 178.033 146.642 177.808 145.978 176.816L141.549 170.196C140.765 169.037 140.193 168.915 139.316 169.438L137.739 170.377L137.849 170.543C137.997 170.535 138.145 170.557 138.283 170.608C138.753 170.87 139.132 171.257 139.372 171.719L143.699 178.173C145.138 180.324 147.14 180.752 149.244 179.499L149.77 179.185L149.991 179.516C147.712 180.874 147.131 183.303 149.899 187.44C152.648 191.544 155.564 192.167 157.64 190.935L159.918 189.577L144.409 166.409ZM151.209 181.337L156.311 188.949L156.136 189.054C155.435 189.471 154.576 189.288 152.353 185.978C150.129 182.669 150.332 181.858 151.034 181.441L151.209 181.337ZM134.03 172.094L128.309 174.427L129.306 176.582L132.544 175.26L136.917 184.776L134.251 185.864L135.238 188.02L137.905 186.931L142.112 196.088L138.873 197.41L139.861 199.565L145.581 197.232L134.03 172.094ZM124.407 175.652L118.391 177.173L119.037 179.441L122.451 178.579L125.292 188.594L122.488 189.304L123.133 191.572L125.938 190.863L128.688 200.5L125.274 201.362L125.92 203.629L131.935 202.109L124.407 175.652ZM112.68 178.024L109.995 178.3L112.892 203.203L110.207 203.48L110.475 205.814L118.53 204.983L118.253 202.649L115.568 202.926L112.68 178.024Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {(relatedArticles &&
                        relatedArticles[0] &&
                        relatedArticles[0].cover) ||
                      (creative.images && creative.images[0]) ? (
                        <div className="jr_row_image rounded has_margin double">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${
                              relatedArticles && relatedArticles[0]
                                ? relatedArticles[0].cover
                                  ? relatedArticles[0].cover.url
                                  : ""
                                : creative.images[0].image.url
                            }`}
                            width="100%"
                            height="auto"
                            alt={
                              relatedArticles && relatedArticles[0]
                                ? relatedArticles[0].cover
                                  ? relatedArticles[0].cover.alternativeText
                                  : ""
                                : creative.images[0].image.alternativeText
                            }
                          />
                        </div>
                      ) : null}

                      {creative.symbol ? (
                        <div className="symbol floating">
                          <SVGComp url_path={`${creative.symbol.symbol.url}`} />
                        </div>
                      ) : null}
                    </div>
                    <div className="text_side">
                      {creative.content ? (
                        <>
                          <div className="f_80 alt">
                            {creative.content.title}
                          </div>
                          <div
                            className="f_20 less_opacity"
                            dangerouslySetInnerHTML={{
                              __html: creative.content.description,
                            }}
                          />
                        </>
                      ) : null}

                      {(relatedArticles &&
                        relatedArticles[1] &&
                        relatedArticles[1].cover) ||
                      (creative.images && creative.images[1]) ? (
                        <div className="jr_row_image rounded has_margin">
                          <img
                            className="load_img"
                            data-src={`${CMSPath}${
                              relatedArticles && relatedArticles[1]
                                ? relatedArticles[1].cover
                                  ? relatedArticles[1].cover.url
                                  : "null"
                                : creative.images[1]
                                ? creative.images[1].image.url
                                : null
                            }`}
                            width="100%"
                            height="auto"
                            alt={
                              relatedArticles && relatedArticles[1]
                                ? relatedArticles[1].cover
                                  ? relatedArticles[1].cover.alternativeText
                                  : null
                                : creative.images[1].image.alternativeText
                            }
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {relatedArticles.length ? (
              <section>
                <div className="custom_content">
                  <div className="content_a">
                    <div className="content_b">
                      <div className="side_head custom_head center">
                        <strong className="f_80 uppercase">{`${t(
                          "related_articles"
                        )}`}</strong>
                        <div className="info_line">
                          <div className="f_20 centered_text">
                            {`${t("related_qoute")}`}
                          </div>
                        </div>
                      </div>
                      <div className="section_sides three_cols flex">
                        {relatedArticles &&
                          relatedArticles.map((val, key) => (
                            <div
                              className="three_col"
                              data-scroll
                              data-scroll-direction="vertical"
                              data-scroll-speed="1"
                              key={`related_article-${key}`}
                            >
                              <Link
                                href={`/articles/${val.slug}`}
                                locale={locale}
                              >
                                <a
                                  className="_link _curTL1"
                                  data-title={t("read")}
                                >
                                  {val.cover ? (
                                    <img
                                      className="load_img"
                                      data-src={`${CMSPath}${val.cover.url}`}
                                      width="100%"
                                      height="auto"
                                      alt={`${val.cover.alternativeText}`}
                                    />
                                  ) : null}
                                  <div className="info_line">
                                    <div className="f_16 centered_text">
                                      {val.quote}
                                    </div>
                                  </div>
                                  <div className="col_title centered_text">
                                    <div
                                      className={`${
                                        locale === "en" ? "f_60" : "f_20"
                                      } alt `}
                                    >
                                      {val.title}
                                    </div>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            {nextCreative ? (
              <section>
                <div className="section_content">
                  {(relatedArticles &&
                    relatedArticles[2] &&
                    relatedArticles[2].cover) ||
                  (creative.images && creative.images[2]) ? (
                    <div className="jr_row_image rounded floating">
                      {/* <img
                      className="load_img"
                      data-src={`${CMSPath}${creative.images[2].image.url}`}
                      width="100%"
                      height="auto"
                      alt={creative.images[2].image.alternativeText}
                    /> */}

                      <img
                        className="load_img"
                        data-src={`${CMSPath}${
                          relatedArticles && relatedArticles[2]
                            ? relatedArticles[2].cover
                              ? relatedArticles[2].cover.url
                              : null
                            : creative.images[2].image.url
                        }`}
                        width="100%"
                        height="auto"
                        alt={
                          relatedArticles && relatedArticles[2]
                            ? relatedArticles[2].cover
                              ? relatedArticles[2].cover.alternativeText
                              : null
                            : creative.images[2].image.alternativeText
                        }
                      />
                    </div>
                  ) : null}

                  {/* <div className="line_shape jr_shape_set">
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
                  </div> */}

                  <div className="content_a">
                    <div
                      className="section_head_set _link"
                      data-href={`${locale === "ar" ? "/ar" : ""}/creatives/${
                        nextCreative.slug
                      }`}
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      <div className="section_head">
                        <div className="f_30 less_opacity">{`${t(
                          "up_next"
                        )}`}</div>
                        <h1>{`${nextCreative.firstName} ${nextCreative.lastName}`}</h1>
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

export default Creative;
