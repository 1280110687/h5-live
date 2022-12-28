const { defineConfig } = require("@vue/cli-service");
const { resolve } = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  pages: {
    m: {
      entry: resolve("./src/h5/main.ts"),
      filename: "m.html",
    },
    index: {
      entry: resolve("./src/web/main.ts"),
      filename: "index.html",
    },
  },
});
