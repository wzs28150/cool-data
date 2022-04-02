import * as path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from "@vitejs/plugin-legacy";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig(({command})=>{

  const plugins = [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ];

  // @vitejs/plugin-legacy
  command === "build" && plugins.push(legacy());
  return {
    base: "./",
    plugins: plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./examples"),
        "@components": path.resolve(__dirname, "./components"),
      },
    },
    server: {
      host: "0.0.0.0",
    },
    optimizeDeps: {
      include: [
        "echarts",
        "vue",
        "vue-router",
        "element-plus"
      ],
      exclude: [],
    },
  }
})
