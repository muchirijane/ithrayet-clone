import React from "react";
import { withRouter } from "next/router";

import Head from "next/head";
import { CMSPath } from "../helpers/imageCMSPath";
import useTranslation from "next-translate/useTranslation";

export const SEO = ({ article, seo, hasColorMode }) => {
  const { t } = useTranslation("common");
  const meta_image =
    seo && seo.metaImage
      ? seo.metaImage.url
      : hasColorMode
      ? article?.cover?.url
      : "";
  console.log(meta_image);
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
          {seo && seo.metaDescription && (
            <>
              <meta property="og:description" content={seo.metaDescription} />
              <meta name="twitter:description" content={seo.metaDescription} />
              <meta name="description" content={seo.metaDescription} />
            </>
          )}

          {meta_image && (
            <>
              <meta property="og:image" content={`${CMSPath}${meta_image}`} />
              {/* <meta property="og:image:width" content={meta_image.width} />
              <meta property="og:image:height" content={meta_image.height} /> */}
              <meta name="twitter:image" content={`${CMSPath}${meta_image}`} />
            </>
          )}
          <title>{`${seo && seo.metaTitle}`}</title>
        </>
      )}
    </Head>
  );
};

export default SEO;
