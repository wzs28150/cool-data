import Gauge2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Gauge2.title = "雷达图1";
Gauge2.name = "Gauge2";
Gauge2.type = "gauge";
Gauge2.config = defaultOption;
Gauge2.install = function (app) {
  app.component(Gauge2.name, Gauge2);
};

export default Gauge2;
