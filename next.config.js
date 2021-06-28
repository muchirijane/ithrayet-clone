const nextTranslate = require("next-translate");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const prodOptions = {
  env: {
    GRAPHQL_STRAPI_URL: "https://ithraeyat-server.1020dev.com/graphql",
    IMAGE_CMS_URL: "https://ithraeyat-server.1020dev.com",
  },
  domains: ["localhost", "ithraeyat-server.1020dev.com"],
};

const devOptions = {
  env: {
    GRAPHQL_STRAPI_URL: "http://localhost:8082/graphql",
    IMAGE_CMS_URL: "http://localhost:8082",
  },
  domains: ["localhost", "ithraeyat-server.1020dev.com"],
};

module.exports = (phase, { defaultConfig }) => {
  return nextTranslate({
    images: {
      domains:
        phase === PHASE_DEVELOPMENT_SERVER
          ? devOptions.domains
          : prodOptions.domains,
    },
    env: phase === PHASE_DEVELOPMENT_SERVER ? devOptions.env : prodOptions.env,
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
    async headers() {
      return [
        {
          // matching all API routes
          source: "/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
  });
};
