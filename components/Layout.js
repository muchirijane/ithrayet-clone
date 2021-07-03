import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Equalizer from "./UIKit/equalizer";
import Modes from "./UIKit/modes";
import { useRouter } from "next/router";
import SEO from "./SEO";
import Cursor from "./UIKit/cursor";
import SearchComponent from "./Search";
import Filters from "./Filter";
import Loader from "./Loader";
import DownloadUI from "./UIKit/DownloadUI";
import Script from "next/script";

const Layout = ({
  children,
  isInner,
  isFilter,
  filterData,
  IncludeNoSelect,
  isDownloadUI,
  seo,
}) => {
  const { locale } = useRouter();

  return (
    <div id="site" className={IncludeNoSelect && "no-select"}>
      <SEO seo={seo} />
      {isInner ? (
        <main>
          <SearchComponent />
          {isFilter && <Filters data={filterData} />}
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

      {isInner ? (
        <>
          <Script src="https://code.responsivevoice.org/responsivevoice.js?key=y6hCA2Ps" />
          <Script src="/jsm/inners.js" />
        </>
      ) : (
        <Script src="/jsm/functions.js" />
      )}
    </div>
  );
};

export default Layout;
