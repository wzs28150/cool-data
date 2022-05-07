import Jade2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Jade2.title = "玉玦图2";
Jade2.name = "Jade2";
Jade2.type = "jade";
Jade2.config = defaultOption;
Jade2.install = function (app) {
  app.component(Jade2.name, Jade2);
};

export default Jade2;
