import Line2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Line2.title = "基础折线图2";
Line2.name = "Line2";
Line2.type = "line";
Line2.config = defaultOption;
Line2.install = function (app) {
  app.component(Line2.name, Line2);
};

export default Line2;
