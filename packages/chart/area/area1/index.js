import Area1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Area1.title = "基本曲线区域图";
Area1.name = "Area1";
Area1.type = "area";
Area1.config = defaultOption;
Area1.install = function (app) {
  app.component(Area1.name, Area1);
};

export default Area1;
