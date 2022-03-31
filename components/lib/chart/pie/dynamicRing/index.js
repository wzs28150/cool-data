import DynamicRing from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
DynamicRing.title = "动态环图";
DynamicRing.type = "pie"
DynamicRing.config = defaultOption;
DynamicRing.install = function (Vue) {
  Vue.component(DynamicRing.name, DynamicRing);
};

export default DynamicRing;
