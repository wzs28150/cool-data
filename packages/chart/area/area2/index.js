import Area2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Area2.title = "基本折线区域图";
Area2.name = "Area2";
Area2.type = "area";
Area2.config = defaultOption;
Area2.install = function (app) {
  app.component(Area2.name, Area2);
};

export default Area2;
