import { Fragment, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import Header from "./Header";
import Footer from "./Footer";
import Equalizer from "./UIKit/equalizer";
import Modes from "./UIKit/modes";
import { useRouter } from "next/router";
import SEO from "./SEO";

import SearchComponent from "./Search";
import Filters from "./Filter";

import DownloadUI from "./UIKit/DownloadUI";

import { useState } from "react";

const Layout = ({
  children,
  isInner,
  isFilter,
  filterData,
  IncludeNoSelect,
  isDownloadUI,
  seo,
  hasColorMode,
}) => {
  const { locale, reload } = useRouter();
  const [visibleLayout, setVisible] = useState(false);
  const { t } = useTranslation("common");
  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      reload(window.location.pathname);
    });
    setTimeout(() => {
      setVisible(true);
    }, 500);
  });
  return (
    <div
      id="site"
      className={`${IncludeNoSelect ? "no-select" : ""} ${
        hasColorMode ? "has-color-mode" : ""
      }`}
      style={{ opacity: visibleLayout ? 1 : 0 }}
    >
      <SEO seo={seo} />
      {isInner ? (
        <main>
          <SearchComponent />
          {isFilter && <Filters data={filterData ? filterData : null} />}
          {isDownloadUI && <DownloadUI />}
          <div data-scroll-container>
            <div data-scroll-section>
              <Header locale={locale} />
              {/* <Equalizer /> */}
              {children}
            </div>
          </div>
        </main>
      ) : (
        <>
          <SearchComponent />
          <Header locale={locale} />
        </>
      )}

      {!isInner && <main>{children}</main>}

      <Modes locale={locale} />
      {hasColorMode ? (
        <div
          class="share"
          onClick={() => {
            if (document && window) {
              let input = document.body.appendChild(
                document.createElement("input")
              );
              input.value = window.location.href;
              input.select();
              document.execCommand("copy");
              input.parentNode.removeChild(input);
            }
          }}
        >
          <div
            class="share_circ flex"
            data-scroll=""
            data-scroll-direction="vertical"
            data-scroll-speed="2"
          >
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5162 14.321C16.1303 14.321 14.8895 14.9328 14.0662 15.8918L8.71068 12.9496C8.87722 12.4961 8.96876 12.0085 8.96876 11.5004C8.96876 10.9923 8.87722 10.5047 8.71068 10.0512L14.0657 7.10827C14.8889 8.06759 16.1299 8.6796 17.516 8.6796C19.9884 8.6796 21.9999 6.73252 21.9999 4.33914C22.0001 1.94647 19.9886 0 17.5162 0C15.0435 0 13.0319 1.94647 13.0319 4.33904C13.0319 4.84719 13.1233 5.3349 13.2899 5.78849L7.93457 8.73153C7.11138 7.77272 5.87069 7.16111 4.48501 7.16111C2.01199 7.16111 0 9.10758 0 11.5003C0 13.8928 2.01199 15.8393 4.48501 15.8393C5.87069 15.8393 7.11128 15.2277 7.93447 14.269L13.2899 17.2113C13.1233 17.6649 13.0318 18.1527 13.0318 18.661C13.0318 21.0535 15.0434 23 17.5161 23C19.9885 23 22 21.0534 22 18.661C22.0001 16.268 19.9886 14.321 17.5162 14.321ZM17.5162 1.51839C19.1234 1.51839 20.4309 2.78371 20.4309 4.33904C20.4309 5.89518 19.1234 7.16111 17.5162 7.16111C15.9088 7.16111 14.601 5.89518 14.601 4.33904C14.601 2.78371 15.9088 1.51839 17.5162 1.51839ZM4.48511 14.321C2.87734 14.321 1.56928 13.0556 1.56928 11.5004C1.56928 9.94492 2.87734 8.6796 4.48511 8.6796C6.09226 8.6796 7.39969 9.94492 7.39969 11.5004C7.39969 13.0556 6.09215 14.321 4.48511 14.321ZM17.5162 21.4817C15.9088 21.4817 14.601 20.2163 14.601 18.6611C14.601 17.1052 15.9088 15.8394 17.5162 15.8394C19.1234 15.8394 20.4309 17.1052 20.4309 18.6611C20.4309 20.2163 19.1234 21.4817 17.5162 21.4817Z"
                fill="white"
              ></path>
            </svg>
            <div class="f_20" id="share">
              {t("share")}
            </div>
          </div>
        </div>
      ) : null}
      {hasColorMode ? (
        <a className=" reset_mode ">{t("resetDefault")}</a>
      ) : null}

      <Footer locale={locale} hasColorMode={hasColorMode} />
      <Equalizer />
      {/* {!isInner && <Equalizer />} */}
      <script src="/jsm/jquery-3.5.1.min.js"></script>
      {isInner ? (
        <>
          <script src="https://code.responsivevoice.org/responsivevoice.js?key=y6hCA2Ps" />
          <script src="/jsm/inners.js" />
        </>
      ) : (
        <script src="/jsm/functions.js" />
      )}
    </div>
  );
};

export default Layout;
