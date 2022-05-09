import Scatter1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Scatter1.title = "基础散点图1";
Scatter1.name = "Scatter1";
Scatter1.type = "scatter";
Scatter1.config = defaultOption;
Scatter1.install = function (app) {
  app.component(Scatter1.name, Scatter1);
};

export default Scatter1;
