const { merge } = require("webpack-merge");
const commonConfig = require("./build_utils/basic.config.js");
const developmentConfig = require("./build_utils/development.config.js");
const productionConfig = require("./build_utils/production.config.js");

module.exports = (env) => {
  if (env.production === "true") {
    return merge(commonConfig(env), productionConfig(env));
  } else {
    return merge(commonConfig(env), developmentConfig(env));
  }
};
