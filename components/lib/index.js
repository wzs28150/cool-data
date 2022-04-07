import path from "path";

// 加载边框组件
export const borderBoxComponents = {};
const borderBoxComponentsLoad = require.context("./borderBox", true, /\.js$/);
borderBoxComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/borderBox/g, "")) -
      parseInt(path.dirname(b).replace(/.\/borderBox/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = borderBoxComponentsLoad(filename).default;
    borderBoxComponents[ComponentsItem.name] = ComponentsItem;
  });

// 加载标题组件
export const titleComponents = {};
const titleComponentsLoad = require.context("./title", true, /\.js$/);
titleComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/title/g, "")) -
      parseInt(path.dirname(b).replace(/.\/title/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = titleComponentsLoad(filename).default;
    titleComponents[ComponentsItem.name] = ComponentsItem;
  });

// 加载模块标题组件
export const moduleTitleComponents = {};
const moduleTitleComponentsLoad = require.context(
  "./moduleTitle",
  true,
  /\.js$/
);
moduleTitleComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/moduleTitle/g, "")) -
      parseInt(path.dirname(b).replace(/.\/moduleTitle/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = moduleTitleComponentsLoad(filename).default;
    moduleTitleComponents[ComponentsItem.name] = ComponentsItem;
  });

// 加载加载组件
export const loadingComponents = {};
const loadingComponentsLoad = require.context("./loading", true, /\.js$/);
loadingComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/loading/g, "")) -
      parseInt(path.dirname(b).replace(/.\/loading/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = loadingComponentsLoad(filename).default;
    loadingComponents[ComponentsItem.name] = ComponentsItem;
  });
// 加载模板组件
export const layoutComponents = {};
const layoutComponentsLoad = require.context("./layout", true, /\.js$/);
layoutComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/layout/g, "")) -
      parseInt(path.dirname(b).replace(/.\/layout/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = layoutComponentsLoad(filename).default;
    layoutComponents[ComponentsItem.name] = ComponentsItem;
  });
// 加载图表组件
export const chartComponents = {};
const chartComponentsLoad = require.context("./chart", true, /index.js$/);
chartComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/chart/g, "")) -
      parseInt(path.dirname(b).replace(/.\/chart/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = chartComponentsLoad(filename).default;
    chartComponents[ComponentsItem.name] = ComponentsItem;
  });
// 加载装饰器组件
export const decorationComponents = {};
const decorationComponentsLoad = require.context("./decoration", true, /\.js$/);
decorationComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/decoration/g, "")) -
      parseInt(path.dirname(b).replace(/.\/decoration/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = decorationComponentsLoad(filename).default;
    decorationComponents[ComponentsItem.name] = ComponentsItem;
  });
// 加载背景组件
export const backgroundComponents = {};
const backgroundComponentsLoad = require.context("./background", true, /\.js$/);
backgroundComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/background/g, "")) -
      parseInt(path.dirname(b).replace(/.\/background/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = backgroundComponentsLoad(filename).default;
    backgroundComponents[ComponentsItem.name] = ComponentsItem;
  });

export const Theme = {};
const themeComponentsLoad = require.context("./color", true, /\.js$/);
themeComponentsLoad
  .keys()
  .sort(function (a, b) {
    return (
      parseInt(path.dirname(a).replace(/.\/background/g, "")) -
      parseInt(path.dirname(b).replace(/.\/background/g, ""))
    );
  })
  .forEach((filename) => {
    let ComponentsItem = themeComponentsLoad(filename).default;
    console.log(ComponentsItem);
    Theme[ComponentsItem.themeName] = ComponentsItem.theme;
  });
// export const Theme = {
//   classic: classic.theme,
//   quiet: quiet.theme,
//   soft: soft.theme,
//   // littlelion: littlelion.theme,
//   easyv: easyv.theme,
//   purple: purple.theme,
//   elegant: elegant.theme,
//   bright: bright.theme,
//   business: business.theme,
//   nostalgia: nostalgia.theme,
//   fresh: fresh.theme,
//   gradual: gradual.theme,
//   retro: retro.theme,
//   news: news.theme,
// };

const components = {
  ...borderBoxComponents,
  ...loadingComponents,
  ...layoutComponents,
  ...chartComponents,
  ...decorationComponents,
  ...titleComponents,
  ...moduleTitleComponents,
  ...backgroundComponents,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    console.log(components[key]);
    Vue.component(components[key].name, components[key]);
  });
};

// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }

const API = {
  install,
  ...components,
};

export default API;
