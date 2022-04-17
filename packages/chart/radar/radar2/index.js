import Radar2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Radar2.title = "基础雷达1";
Radar2.name = "Radar2";
Radar2.type = "radar";
Radar2.config = defaultOption;
Radar2.install = function (app) {
  app.component(Radar2.name, Radar2);
};

export default Radar2;
