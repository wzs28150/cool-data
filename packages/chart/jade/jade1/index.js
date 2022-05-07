import Jade1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Jade1.title = "玉玦图1";
Jade1.name = "Jade1";
Jade1.type = "jade";
Jade1.config = defaultOption;
Jade1.install = function (app) {
  app.component(Jade1.name, Jade1);
};

export default Jade1;
