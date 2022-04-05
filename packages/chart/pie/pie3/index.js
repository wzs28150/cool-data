import Pie3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie3.title = "玉环图";
Pie3.name = "Pie3";
Pie3.type = "pie";
Pie3.config = defaultOption;
Pie3.install = function (app) {
  app.component(Pie3.name, Pie3);
};

export default Pie3;
