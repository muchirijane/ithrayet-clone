const nextTranslate = require("next-translate");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const prodOptions = {
  env: {
    GRAPHQL_STRAPI_URL: "http://localhost:8082/graphql",
    IMAGE_CMS_URL: "http://localhost:8082",
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
  });
};
