import Bar5 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar5.title = "立体圆柱图";
Bar5.type = "bar";
Bar5.config = defaultOption;
Bar5.install = function (Vue) {
  Vue.component(Bar5.name, Bar5);
};

export default Bar5;
