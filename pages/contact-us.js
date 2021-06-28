import InnerFooter from "../components/InnerFooter";
import Layout from "../components/Layout";
import { GET_CONTACT_US_DATA } from "../graphql";
import { CMSPath } from "../helpers/imageCMSPath";
import client from "../lib/apollo";
import _ from "lodash";
import FeedbackForm from "../components/forms/Feedback";
import SVGComp from "../components/SVGComp";

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: GET_CONTACT_US_DATA,
    variables: {
      locale: locale,
    },
  });

  if (data) {
    return {
      props: {
        contactData: data.contactUs,
        news_letter: data.newsLetterForm,
        feedback: data.feedbackForm,
      },
      revalidate: 60,
    };
  }
};

const ContactUs = (props) => {
  const { contactData, news_letter, feedback } = props;
  return (
    <Layout isInner seo={contactData && contactData.seo}>
      {contactData && (
        <div className="page_head_set">
          <h1>Contact us</h1>
          <div className="content_a">
            <strong className="f_20 uppercase">{contactData.title}</strong>
            <div className="f_20">
              <span className="less_opacity">{contactData.subTitle}</span>{" "}
              <a
                className="_inline_link _up"
                href={`mailto:${contactData.contactEmail}`}
                target="_blank"
              >
                {contactData.contactEmail}
              </a>
            </div>
          </div>
        </div>
      )}
      {contactData && (
        <div id="sections">
          <section>
            <div className="section_content">
              <div className="cont_grid_set">
                <div className="text_circle">
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

                <div className="cont_grid flex">
                  <div
                    className="cont_grid_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3"
                  >
                    <img crossOrigin="anonymous"
                      className="load_img"
                      data-src={`${CMSPath}${contactData.creative.images[0].image.url}`}
                      width="100%"
                      height="auto"
                      alt={contactData.creative.images[0].image.alternativeText}
                    />
                  </div>

                  <div
                    className="cont_grid_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                  >
                    <img crossOrigin="anonymous"
                      className="load_img"
                      data-src={`${CMSPath}${contactData.creative.images[1].image.url}`}
                      width="100%"
                      height="auto"
                      alt={contactData.creative.images[1].image.alternativeText}
                    />
                  </div>

                  <div
                    className="cont_grid_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="2"
                  >
                    <div className="cont_grid_box">
                      <div className="cg_box_text flex">
                        <strong className="f_40 uppercase">
                          {contactData.creative.symbolCard.title}
                        </strong>
                        <div className="f_20">
                          {contactData.creative.symbolCard.description}
                        </div>
                      </div>
                      <div className="box_pattern flex">
                        {/* {_.times(4, (i) => {
                      console.log(i);
                    <SVGComp
                      src={`${CMSPath}${contactData.creative.symbolCard.symbol.symbol.url}`}
                      key={`symbol-${i}`}
                    />;
                  })} */}
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clip-path="url(#clip0)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clip-path="url(#clip1)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip1">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clip-path="url(#clip2)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip2">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          width="153"
                          height="200"
                          viewBox="0 0 153 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4" clip-path="url(#clip3)">
                            <path
                              d="M128.088 101.774L152.499 67.1804C153.353 65.9692 153.058 64.2853 151.851 63.4286C150.644 62.5719 148.965 62.8673 148.111 64.0785L124.614 97.3724L82.9185 47.1509C82.8008 47.0327 82.683 46.9145 82.5652 46.7964C82.683 46.7078 82.8302 46.6782 82.948 46.56L105.621 26.3532C106.181 25.851 106.505 25.142 106.505 24.3739C106.505 23.6058 106.21 22.8968 105.651 22.3651L82.3296 0.710704C81.299 -0.264185 79.6795 -0.234643 78.6783 0.740246L56.064 22.3651C55.534 22.8968 55.2395 23.6354 55.269 24.3739C55.2984 25.142 55.6223 25.851 56.1818 26.3532L79.4439 46.5896C79.4439 46.5896 79.4734 46.5896 79.4734 46.6191C79.2673 46.7373 79.0611 46.9145 78.8845 47.0918L33.3908 97.8156L4.62234 67.2986C3.62118 66.2351 1.91333 66.176 0.823837 67.1804C-0.265655 68.1849 -0.295101 69.8983 0.706054 70.9618L29.7395 101.745L0.7355 132.557C-0.265655 133.65 -0.23621 135.334 0.853282 136.368C1.91333 137.372 3.62118 137.343 4.65178 136.25L33.4203 105.733L77.4122 154.773L56.1229 175.127C55.5634 175.659 55.269 176.368 55.2984 177.136C55.3279 177.904 55.6518 178.613 56.2113 179.115L79.4734 199.352C79.974 199.795 80.5923 200.002 81.2401 200.002C81.8879 200.002 82.5063 199.765 83.0069 199.322L105.68 179.115C106.24 178.613 106.563 177.904 106.563 177.136C106.563 176.368 106.269 175.659 105.71 175.127L84.0964 155.068L124.673 106.176L148.17 139.47C149.024 140.681 150.703 140.947 151.91 140.12C153.117 139.263 153.412 137.579 152.558 136.368L128.088 101.774ZM61.8943 24.2262L80.5629 6.38279L99.8793 24.3148L81.1812 41.0061L61.8943 24.2262ZM99.8793 177.047L81.1812 193.739L61.9237 176.988L80.5923 159.145L99.8793 177.047ZM80.8279 150.578L37.0421 101.774L80.8279 52.9707L121.345 101.774L80.8279 150.578Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M76.912 81.2129L54.2977 102.838C53.7382 103.369 53.4438 104.078 53.4732 104.847C53.5027 105.615 53.8266 106.324 54.386 106.826L77.6482 127.062C78.1487 127.505 78.7671 127.712 79.4149 127.712C80.0627 127.712 80.6811 127.476 81.1816 127.033L103.855 106.826C104.414 106.324 104.738 105.615 104.738 104.847C104.738 104.078 104.444 103.369 103.884 102.838L80.5633 81.1834C79.5327 80.2085 77.9426 80.238 76.912 81.2129ZM79.3854 121.449L60.1279 104.699L78.7965 86.8554L98.1129 104.787L79.3854 121.449Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M70.8158 176.398C70.4625 176.752 70.2563 177.225 70.2563 177.727C70.2563 178.229 70.4919 178.702 70.8747 179.027L79.8262 186.826C80.1501 187.121 80.5918 187.269 81.004 187.269C81.4163 187.269 81.858 187.121 82.1819 186.826L90.8978 179.056C91.2806 178.731 91.4867 178.229 91.4867 177.727C91.4867 177.225 91.2806 176.752 90.9272 176.398L81.9463 168.067C81.269 167.417 80.1796 167.446 79.5023 168.096L70.8158 176.398ZM80.7685 171.848L87.0699 177.697L81.004 183.133L74.7321 177.668L80.7685 171.848Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M69.6684 103.725C69.4918 103.902 69.374 104.139 69.4034 104.404C69.4034 104.67 69.5212 104.907 69.6979 105.054L78.6494 112.854C78.8261 113.001 79.0322 113.06 79.2383 113.06C79.4444 113.06 79.6505 112.972 79.8272 112.824L88.5431 105.054C88.7198 104.877 88.8376 104.641 88.8376 104.404C88.8376 104.139 88.7493 103.902 88.5431 103.725L79.5622 95.3941C79.2089 95.0691 78.6788 95.0691 78.3549 95.3941L69.6684 103.725ZM78.9733 97.2553L86.5997 104.345L79.2089 110.963L71.5824 104.345L78.9733 97.2553Z"
                              fill="#6C8380"
                            ></path>
                            <path
                              d="M90.9286 25.2302C91.3114 24.9052 91.5175 24.403 91.5175 23.9008C91.5175 23.3986 91.3114 22.9259 90.958 22.5714L81.9771 14.2405C81.2998 13.5906 80.2103 13.6201 79.5331 14.27L70.8466 22.6009C70.4932 22.9554 70.2871 23.4281 70.2871 23.9303C70.2871 24.4325 70.5227 24.9052 70.9055 25.2302L79.857 33.0293C80.1809 33.3247 80.6226 33.4724 81.0348 33.4724C81.447 33.4724 81.8887 33.3247 82.2126 33.0293L90.9286 25.2302ZM81.0054 29.307L74.704 23.8417L80.7698 18.0514L87.0712 23.9008L81.0054 29.307Z"
                              fill="#6C8380"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip3">
                              <rect
                                width="153"
                                height="200"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    className="cont_grid_col"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="1"
                  >
                    <img crossOrigin="anonymous"
                      className="load_img"
                      data-src={`${CMSPath}${contactData.creative.images[2].image.url}`}
                      width="100%"
                      height="auto"
                      alt={contactData.creative.images[2].image.alternativeText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FeedbackForm sectionData={feedback} />

          <InnerFooter sectionData={news_letter} />
        </div>
      )}
    </Layout>
  );
};

export default ContactUs;
