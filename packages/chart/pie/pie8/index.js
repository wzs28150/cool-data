import Pie8 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie8.title = "3d动态环图";
Pie8.name = "Pie8";
Pie8.type = "pie";
Pie8.config = defaultOption;
Pie8.install = function (app) {
  app.component(Pie8.name, Pie8);
};

export default Pie8;
