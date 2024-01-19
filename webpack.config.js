const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  // custom activity handling for android
  // https://docs.nativescript.org/guide/extending-classes-and-implementing-interfaces-android#custom-android-application-and-activity
  env.appComponents = (env.appComponents || []).concat([
    "./app/activity.android",
  ]);
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  webpack.chainWebpack((config) => {
    if (webpack.Utils.platform.getPlatformName() === "android") {
      // custom application
      // ref: https://docs.nativescript.org/guide/extending-classes-and-implementing-interfaces-android#custom-android-application-and-activity
      config.entry("application").add("./app/application.android");
    }
  });

  return webpack.resolveConfig();
};
