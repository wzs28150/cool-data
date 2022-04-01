import Pie4 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie4.title = "玉环图";
Pie4.type = "pie";
Pie4.config = defaultOption;
Pie4.install = function (Vue) {
  Vue.component(Pie4.name, Pie4);
};

export default Pie4;
