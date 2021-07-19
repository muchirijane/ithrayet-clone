const nextTranslate = require("next-translate");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const prodOptions = {
  env: {
    GRAPHQL_STRAPI_URL: "http://localhost:8082/graphql",
    IMAGE_CMS_URL: "http://localhost:8082",
    NEXT_PUBLIC_API_URL: "http://localhost:8082",
    API_SECRET_VALUE: "ithraeyat",
    API_SECRET_KEY: "Nan8ESEn",
  },
  domains: ["localhost", "ithraeyat-server.1020dev.com"],
};

const devOptions = {
  env: {
    GRAPHQL_STRAPI_URL: "http://localhost:8082/graphql",
    IMAGE_CMS_URL: "http://localhost:8082",
    NEXT_PUBLIC_API_URL: "http://localhost:8082",
    API_SECRET_VALUE: "ithraeyat",
    API_SECRET_KEY: "Nan8ESEn",
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
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    env: phase === PHASE_DEVELOPMENT_SERVER ? devOptions.env : prodOptions.env,
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
  });
};
