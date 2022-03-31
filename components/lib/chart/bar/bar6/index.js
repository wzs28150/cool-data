import Bar6 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar6.title = "立体圆柱图2";
Bar6.type = "bar";
Bar6.config = defaultOption;
Bar6.install = function (Vue) {
  Vue.component(Bar6.name, Bar6);
};

export default Bar6;
