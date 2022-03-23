import DynamicRing from "./index.vue";
import defaultOption from './config';
// eslint-disable-next-line func-names
DynamicRing.demoData = {
  option: defaultOption
};
DynamicRing.install = function (Vue) {
  Vue.component(DynamicRing.name, DynamicRing);
};

export default DynamicRing;
