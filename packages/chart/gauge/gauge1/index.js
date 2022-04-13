import Gauge1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Gauge1.title = "百分比";
Gauge1.name = "Gauge1";
Gauge1.type = "gauge";
Gauge1.config = defaultOption;
Gauge1.install = function (app) {
  app.component(Gauge1.name, Gauge1);
};

export default Gauge1;
