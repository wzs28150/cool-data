import Pie1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie1.title = "基础饼图1";
Pie1.type = "pie";
Pie1.config = defaultOption;
Pie1.install = function (Vue) {
  Vue.component(Pie1.name, Pie1);
};

export default Pie1;
