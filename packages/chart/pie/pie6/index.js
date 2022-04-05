import Pie6 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Pie6.title = "动态环图";
Pie6.name = "Pie6";
Pie6.type = "pie";
Pie6.config = defaultOption;
Pie6.install = function (app) {
  app.component(Pie6.name, Pie6);
};

export default Pie6;
