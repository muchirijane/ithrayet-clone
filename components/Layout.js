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

const Layout = ({
  children,
  isInner,
  isFilter,
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
          {isFilter && <Filters />}
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
      {isInner && <Loader />}

      <Cursor />
      <Footer locale={locale} />

      {!isInner && <Equalizer />}
    </div>
  );
};

export default Layout;
