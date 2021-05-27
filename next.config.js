const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  images: {
    domain: ["localhost", "ithraeyat-server.1020dev.com"],
  },
  env: {
    GRAPHQL_STRAPI_URL: "http://ithraeyat-server.1020dev.com/graphql",
    IMAGE_CMS_URL: "http://ithraeyat-server.1020dev.com",
  },
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
