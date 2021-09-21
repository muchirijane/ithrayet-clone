import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const CenteredQuote = (props) => {
  const { content } = props;
  const { t } = useTranslation("common");
  return (
    <section>
      <div className="custom_content">
        <div className="content_a">
          <div className="centered_quote flex">
            <div className="quote_set">
              <strong className="f_80 uppercase">
                <svg
                  width="96"
                  height="81"
                  viewBox="0 0 96 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5117 36.9404C28.1637 36.2644 25.8157 35.9214 23.5317 35.9214C20.0047 35.9214 17.0617 36.7274 14.7797 37.7144C16.9797 29.6604 22.2647 15.7634 32.7927 14.1984C33.7677 14.0534 34.5667 13.3484 34.8327 12.3994L37.1337 4.16938C37.3277 3.47338 37.2127 2.72838 36.8157 2.12438C36.4187 1.52038 35.7807 1.11737 35.0657 1.01937C34.2887 0.913375 33.4967 0.859375 32.7117 0.859375C20.0747 0.859375 7.55972 14.0494 2.27872 32.9354C-0.821281 44.0154 -1.73028 60.6734 5.90572 71.1584C10.1787 77.0254 16.4127 80.1584 24.4347 80.4714C24.4677 80.4724 24.4997 80.4734 24.5327 80.4734C34.4307 80.4734 43.2077 73.8074 45.8777 64.2644C47.4727 58.5594 46.7517 52.5764 43.8457 47.4134C40.9707 42.3084 36.2357 38.5874 30.5117 36.9404Z"
                    className="svg-fill"
                  ></path>
                  <path
                    d="M92.4698 47.4144C89.5948 42.3084 84.8598 38.5874 79.1358 36.9404C76.7878 36.2644 74.4398 35.9214 72.1568 35.9214C68.6298 35.9214 65.6858 36.7274 63.4038 37.7144C65.6038 29.6604 70.8888 15.7634 81.4178 14.1984C82.3928 14.0534 83.1908 13.3484 83.4578 12.3994L85.7588 4.16938C85.9528 3.47338 85.8378 2.72838 85.4408 2.12438C85.0448 1.52038 84.4068 1.11737 83.6908 1.01937C82.9148 0.913375 82.1228 0.859375 81.3368 0.859375C68.6998 0.859375 56.1848 14.0494 50.9028 32.9354C47.8038 44.0154 46.8948 60.6734 54.5318 71.1604C58.8038 77.0264 65.0388 80.1604 73.0598 80.4724C73.0928 80.4734 73.1248 80.4744 73.1588 80.4744C83.0558 80.4744 91.8338 73.8084 94.5038 64.2654C96.0968 58.5604 95.3748 52.5764 92.4698 47.4144Z"
                    className="svg-fill"
                  ></path>
                </svg>
                <span>{content.centeredQuote.title}</span>
                <svg
                  width="96"
                  height="81"
                  viewBox="0 0 96 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.8203 44.3917C67.1683 45.0677 69.5163 45.4107 71.8003 45.4107C75.3273 45.4107 78.2703 44.6047 80.5523 43.6177C78.3523 51.6717 73.0673 65.5687 62.5393 67.1337C61.5643 67.2787 60.7653 67.9837 60.4993 68.9327L58.1983 77.1627C58.0043 77.8587 58.1193 78.6037 58.5163 79.2077C58.9133 79.8117 59.5513 80.2147 60.2663 80.3127C61.0433 80.4187 61.8353 80.4727 62.6203 80.4727C75.2573 80.4727 87.7723 67.2827 93.0533 48.3967C96.1533 37.3167 97.0623 20.6587 89.4263 10.1737C85.1533 4.30666 78.9193 1.17366 70.8973 0.860655C70.8643 0.859655 70.8323 0.858656 70.7993 0.858656C60.9013 0.858655 52.1243 7.52465 49.4543 17.0677C47.8593 22.7727 48.5803 28.7556 51.4863 33.9187C54.3613 39.0237 59.0963 42.7447 64.8203 44.3917Z"
                    className="svg-fill"
                  ></path>
                  <path
                    d="M2.86222 33.9177C5.73722 39.0237 10.4722 42.7447 16.1962 44.3917C18.5442 45.0677 20.8922 45.4107 23.1752 45.4107C26.7022 45.4107 29.6462 44.6047 31.9282 43.6177C29.7282 51.6717 24.4432 65.5687 13.9142 67.1337C12.9392 67.2787 12.1412 67.9837 11.8742 68.9327L9.57321 77.1627C9.37921 77.8587 9.49421 78.6037 9.89121 79.2077C10.2872 79.8117 10.9252 80.2147 11.6412 80.3127C12.4172 80.4187 13.2092 80.4727 13.9952 80.4727C26.6322 80.4727 39.1472 67.2827 44.4292 48.3967C47.5282 37.3167 48.4372 20.6587 40.8002 10.1717C36.5282 4.30566 30.2932 1.17165 22.2722 0.859655C22.2392 0.858656 22.2072 0.857656 22.1732 0.857656C12.2762 0.857655 3.49822 7.52365 0.828222 17.0667C-0.764777 22.7717 -0.0427811 28.7557 2.86222 33.9177Z"
                    className="svg-fill"
                  ></path>
                </svg>
              </strong>

              {content.centeredQuote.artistName && (
                <div className="info_line">
                  <div className="f_14">
                    {`${t("by")} `}{" "}
                    <strong>
                      <Link href="/creatives">
                        <a target="_blank">
                          {`${content.centeredQuote.artistName}`}
                        </a>
                      </Link>
                    </strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenteredQuote;
