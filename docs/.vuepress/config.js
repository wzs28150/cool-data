module.exports = {
  lang: "zh-CN",
  title: "Cool-Data",
  description: "Cool-Data——一个专注可视化大屏的组件",
  base: "/cool-data/docs/",
  dest: "./cool-data/docs/",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `./favicon.ico` },
    ],
  ],
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    darkMode: true,
    navbar: [
      // NavbarItem
      {
        text: "指南",
        link: "/index.md",
      },
      // NavbarGroup
      {
        text: "组件",
        children: [
          "/components/borderBox.md",
          "/components/title.md",
          "/components/moduleTitle.md",
          "/components/chart.md",
          "/components/decoration.md",
          "/components/layout.md",
          "/components/loading.md"
        ],
      },
      {
        text: "图表组件",
        children: [
          "/components/bar.md",
          "/components/pie.md"
        ],
      },
      {
        text: "案例",
        link: "https://wzs28150.github.io/cool-data/demo/index.html"
      },
      {
        text: "v1.0.8",
        children: [
          {
            text: "v1.0.8",
            link: "/version.md#v1-0-5",
          }
        ],
      },
      {
        text: "github",
        link: "https://github.com/wzs28150/cool-data",
      },
      {
        text: "gitee",
        link: "https://gitee.com/harbin_kuchuang_network_wz666s/cool-data",
      },
    ],
  },
};
