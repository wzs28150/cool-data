import Funnel1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Funnel1.title = "基础漏斗图1";
Funnel1.name = "Funnel1";
Funnel1.type = "funnel";
Funnel1.config = defaultOption;
Funnel1.install = function (app) {
  app.component(Funnel1.name, Funnel1);
};

export default Funnel1;
