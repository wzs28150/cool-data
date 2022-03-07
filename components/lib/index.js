import { version } from "../../package.json";
var path = require("path")
// 加载边框组件
export const borderBoxComponents = {};
const borderBoxComponentsLoad = require.context("./borderBox", true, /\.js$/);
borderBoxComponentsLoad.keys().sort(function (a, b) {
  return parseInt(path.dirname(a).replace(/.\/borderBox/g, "")) - parseInt(path.dirname(b).replace(/.\/borderBox/g, ""));
}).forEach((filename) => {
  let ComponentsItem = borderBoxComponentsLoad(filename).default;
  borderBoxComponents[ComponentsItem.name] = ComponentsItem;
});

// 加载加载组件
export const loadingComponents = {};
const loadingComponentsLoad = require.context("./loading", true, /\.js$/);
loadingComponentsLoad.keys().sort(function (a, b) {
  return parseInt(path.dirname(a).replace(/.\/loading/g, "")) - parseInt(path.dirname(b).replace(/.\/loading/g, ""));
}).forEach((filename) => {
  let ComponentsItem = loadingComponentsLoad(filename).default;
  loadingComponents[ComponentsItem.name] = ComponentsItem;
});
// 加载模板组件
export const layoutComponents = {};
const layoutComponentsLoad = require.context("./layout", true, /\.js$/);
layoutComponentsLoad.keys().sort(function (a, b) {
  return parseInt(path.dirname(a).replace(/.\/layout/g, "")) - parseInt(path.dirname(b).replace(/.\/layout/g, ""));
}).forEach((filename) => {
  let ComponentsItem = layoutComponentsLoad(filename).default;
  console.log(ComponentsItem);
  layoutComponents[ComponentsItem.name] = ComponentsItem;
});
// 加载图表组件
export const chartComponents = {};
const chartComponentsLoad = require.context("./chart", true, /\.js$/);
chartComponentsLoad.keys().sort(function (a, b) {
  return parseInt(path.dirname(a).replace(/.\/chart/g, "")) - parseInt(path.dirname(b).replace(/.\/chart/g, ""));
}).forEach((filename) => {
  let ComponentsItem = chartComponentsLoad(filename).default;
  chartComponents[ComponentsItem.name] = ComponentsItem;
});
// 加载装饰器组件
export const decorationComponents = {};
const decorationComponentsLoad = require.context("./decoration", true, /\.js$/);
decorationComponentsLoad.keys().sort(function (a, b) {
  return parseInt(path.dirname(a).replace(/.\/decoration/g, "")) - parseInt(path.dirname(b).replace(/.\/decoration/g, ""));
}).forEach((filename) => {
  let ComponentsItem = decorationComponentsLoad(filename).default;
  decorationComponents[ComponentsItem.name] = ComponentsItem;
});

const components = {
  ...borderBoxComponents,
  ...loadingComponents,
  ...layoutComponents,
  ...chartComponents,
  ...decorationComponents,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    // console.log(components[key]);
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  version,
  install,
  ...components,
};

export default API;
