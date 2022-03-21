const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/cool-data/demo' : '/',
  outputDir: 'docs/.vuepress/dist/demo',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('examples'),
        '@@': resolve('components'),
      }
    },
  }
}