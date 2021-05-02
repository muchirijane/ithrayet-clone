import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="robots" content="all" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content="Description goes here" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ithradubai" />
          <meta name="twitter:title" content="Home - Ithra Dubai" />
          <meta name="twitter:description" content="Description goes here" />
          <meta name="twitter:image" content="og-image.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content="Home - Ithra Dubai" />
          <meta property="og:description" content="Description goes here" />
          <meta property="og:image" content="og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="theme-color" content="#fff" />
          <meta name="msapplication-TileColor" content="#000" />
          <title>Home - Ithra Dubai</title>
          <link rel="canonical" href="https://bahaasamir.me/ithra_2" />
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
