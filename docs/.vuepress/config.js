
let origin = ''
let isClient = typeof window !== "undefined";
if (isClient) {
  console.log(window.location.host);
  origin = window.location.hostname
}
module.exports = {
  lang: "zh-CN",
  title: "Cool-Datav",
  description: "Cool-Datav——一个专注可视化大屏的组件",
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
          "/components/loading.md",
        ],
      },
      {
        text: "图表组件",
        children: ["/components/bar.md", "/components/pie.md", "/components/digitalflop.md"],
      },
      {
        text: "案例",
        link: origin == 'wzs28150.github.io'? 'https://wzs28150.github.io': ( origin == 'harbin_kuchuang_network_wz666s.gitee.io'? 'https://harbin_kuchuang_network_wz666s.gitee.io' : '') + "/../case/index.html#/index",
      },
      {
        text: "v0.1.0",
        children: [
          {
            text: "v0.1.0",
            link: "/version.md#v0.1.0",
          },
        ],
      },
      {
        text: "github",
        link: "https://github.com/wzs28150/cool-data/docs",
      },
      {
        text: "gitee",
        link: "https://gitee.com/harbin_kuchuang_network_wz666s/cool-data/docs",
      },
    ],
  },
};
