import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { setNodeEnv } from './src/utils/env';
// import { vitePluginMock } from './src/utils/mock';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { zip, progress } from 'esc-plugin';
export default defineConfig(({ mode, command }) => {
  setNodeEnv(mode);
  const port = parseInt(process.env.APP_PORT || '3000');
  const isBuild = command === 'build';

  const plugins = [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: false,
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    // })
  ];
  if (isBuild) {
    plugins.push(legacy());
    plugins.push(progress());
    plugins.push(
      zip({
        type: 'zip',
        archiverName: 'dist.zip',
        sourceName: 'dist',
        open: true,
      })
    );
  }

  // mode === 'development' && process.env.APP_MOCK === 'true' && plugins.push(vitePluginMock());

  return {
    base: './',
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port,
      host: '0.0.0.0',
      open: true,
    },
    define: {
      // 定义全局常量
    },
    optimizeDeps: {
      include: ['axios', 'mockjs', 'vue', 'vuex', 'vuex-module-decorators', 'element-plus'],
      exclude: [],
    },
    build: {
      assetsDir: 'static',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            var info = assetInfo.name.split('.');
            var extType = info[info.length - 1];
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'media';
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'img';
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts';
            }
            // console.log(assetInfo.name)
            return `static/${extType}/[name]-[hash][extname]`;
          },
        },
      },
    },
  };
});
