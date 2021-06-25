import React from "react";
import { withRouter } from "next/router";

import Head from "next/head";
import { CMSPath } from "../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";

export const SEO = ({ seo }) => {
  const { t } = useTranslation("common");

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="all" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="format-detection" content="telephone=no" />

      <meta property="og:url" content="" />

      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:site_name" content="Ithraeyat" />

      <meta name="twitter:site" content="@ithradubai" />
      <meta property="og:type" content="website" />
      {seo && (
        <>
          {seo.metaTitle && (
            <>
              <meta
                property="og:title"
                content={`${t("title_prefix")} - ${seo.metaTitle}`}
              />
              <meta
                name="twitter:title"
                content={`${t("title_prefix")} - ${seo.metaTitle}`}
              />
            </>
          )}
          {seo.metaDescription && (
            <>
              <meta property="og:description" content={seo.metaDescription} />
              <meta name="twitter:description" content={seo.metaDescription} />
              <meta name="description" content={seo.metaDescription} />
            </>
          )}

          {seo.metaImage && (
            <>
              <meta
                property="og:image"
                content={`${CMSPath}${seo.metaImage}`}
              />
              <meta property="og:image:width" content={seo.metaImage.width} />
              <meta property="og:image:height" content={seo.metaImage.height} />
              <meta
                name="twitter:image"
                content={`${CMSPath}${seo.metaImage}`}
              />
            </>
          )}
          <title>{`${t("title_prefix")} - ${seo.metaTitle}`}</title>
        </>
      )}
    </Head>
  );
};

export default SEO;
