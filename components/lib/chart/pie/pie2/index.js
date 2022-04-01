import Pie2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie2.title = "基础饼图1";
Pie2.type = "pie";
Pie2.config = defaultOption;
Pie2.install = function (Vue) {
  Vue.component(Pie2.name, Pie2);
};

export default Pie2;
