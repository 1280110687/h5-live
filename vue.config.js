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
  chainWebpack: (config) => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
    config.module
      .rule("less")
      .oneOf("vant")
      .before("vue-modules")
      .test(/[\\/]node_modules[\\/]vant[\\/]/);
  },
});
