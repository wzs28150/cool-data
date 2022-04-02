import packageInfo from "../package.json";
import BorderBox1 from "./lib/borderBox/borderBox1/index";

export const borderBoxComponents = {
  BorderBox1,
};

const components = {
  ...borderBoxComponents,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    // console.log(components[key]);
    Vue.component(components[key].name, components[key]);
  });
};

export default {
  version: packageInfo.version,
  install,
  ...components,
};
