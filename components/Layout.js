import { Fragment, useEffect } from "react";
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
}) => {
  const { locale, reload } = useRouter();
  const [visibleLayout, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      reload(window.location.pathname);
    });
    setTimeout(() => {
      setVisible(true);
    }, 20);
  });
  return (
    <div
      id="site"
      className={IncludeNoSelect && "no-select"}
      style={{ visibility: visibleLayout ? "visible" : "hidden" }}
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
              <Equalizer />
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

      <Footer locale={locale} />

      {!isInner && <Equalizer />}
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
