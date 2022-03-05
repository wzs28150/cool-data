import Demo from './demo';
import Card from './card';
import borderBox1 from './borderBox1/index.vue';
import { version } from '../../package.json';

const components = {
  Demo,
  Card,
  borderBox1
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version,
  install,
  ...components
};

export default API;