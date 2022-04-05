import Pie5 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie5.title = "玉环图3";
Pie5.name = "Pie5";
Pie5.type = "pie";
Pie5.config = defaultOption;
Pie5.install = function (app) {
  app.component(Pie5.name, Pie5);
};

export default Pie5;
