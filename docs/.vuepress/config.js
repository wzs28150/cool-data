module.exports = {
  title: 'Cool-Data',
  description: 'Just playing around',
  base: "/cool-data/",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '案例', link: 'https://wzs28150.github.io/cool-data/demo/index.html' },
      { text: 'Github', link: 'https://github.com/wzs28150/cool-data' }
    ],
    sidebar: ['/', '/componentDocs/borderBox','/componentDocs/decoration','/componentDocs/layout','/componentDocs/chart']
  },
  plugins: [
    'vuepress-plugin-element-tabs'
  ],
  configureWebpack: {
    node: {
      global: true,
      process: true
    },
  }
}