import Radar1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Radar1.title = "基础雷达1";
Radar1.name = "Radar1";
Radar1.type = "radar";
Radar1.config = defaultOption;
Radar1.install = function (app) {
  app.component(Radar1.name, Radar1);
};

export default Radar1;
