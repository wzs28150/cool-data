import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { setNodeEnv } from "./src/utils/env";
import { vitePluginMock } from "./src/utils/mock";
import { vitePluginStore } from "./src/utils/store";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ mode, command }) => {
  setNodeEnv(mode);
  const port = parseInt(process.env.APP_PORT || "3000");

  const plugins = [
    vue(),
    vitePluginStore(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    // })
  ];

  // @vitejs/plugin-legacy
  command === "build" && plugins.push(legacy());
  mode === "development" &&
  process.env.APP_MOCK === "true" &&
  plugins.push(vitePluginMock());

  return {
    base: "./",
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port,
      host: "0.0.0.0",
      open: true
    },
    define: {
      // 定义全局常量
    },
    optimizeDeps: {
      include: [
        "axios",
        "mockjs",
        "vue",
        "vuex",
        "vuex-module-decorators",
        "element-plus"
      ],
      exclude: [],
    },
  };
});
