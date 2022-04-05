import Pie4 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie4.title = "玉环图2";
Pie4.name = "Pie4";
Pie4.type = "pie";
Pie4.config = defaultOption;
Pie4.install = function (app) {
  app.component(Pie4.name, Pie4);
};

export default Pie4;
