const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/cool-data/demo" : "/",
  outputDir: "docs/.vuepress/dist/demo",
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("examples"),
        "@@": resolve("components"),
      },
      fallback: {
        path: require.resolve('path-browserify')
      }
    },
    cache: {
      // 磁盘存储
      type: "filesystem",
      buildDependencies: {
        // 当配置修改时，缓存失效
        config: [__filename]
      }
    }
  },
});
