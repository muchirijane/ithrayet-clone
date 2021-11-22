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
import SocialSharing from "@/components/elements/SocialSharing";

const Layout = ({
  children,
  isInner,
  isFilter,
  filterData,
  IncludeNoSelect,
  isDownloadUI,
  seo,
  hasColorMode,
  shareColor,
  shareColorText,
  article,
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
      <SEO seo={seo} hasColorMode={hasColorMode} article={article} />
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
        <SocialSharing
          shareColorText={shareColorText}
          shareColor={shareColor}
          t={t}
        />
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
