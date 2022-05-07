import Jade3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Jade3.title = "玉玦图3";
Jade3.name = "Jade3";
Jade3.type = "jade";
Jade3.config = defaultOption;
Jade3.install = function (app) {
  app.component(Jade3.name, Jade3);
};

export default Jade3;
