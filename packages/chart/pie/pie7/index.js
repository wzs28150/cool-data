import Pie7 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie7.title = "3d动态环图";
Pie7.name = "Pie7";
Pie7.type = "pie";
Pie7.config = defaultOption;
Pie7.install = function (app) {
  app.component(Pie7.name, Pie7);
};

export default Pie7;
