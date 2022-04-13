import Gauge3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Gauge3.title = "雷达图3";
Gauge3.name = "Gauge3";
Gauge3.type = "gauge";
Gauge3.config = defaultOption;
Gauge3.install = function (app) {
  app.component(Gauge3.name, Gauge3);
};

export default Gauge3;
