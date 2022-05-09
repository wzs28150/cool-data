import Area3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Area3.title = "基本时序区域图";
Area3.name = "Area3";
Area3.type = "area";
Area3.config = defaultOption;
Area3.install = function (app) {
  app.component(Area3.name, Area3);
};

export default Area3;
