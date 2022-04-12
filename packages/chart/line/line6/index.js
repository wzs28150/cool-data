import Line6 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Line6.title = "基础折线图5";
Line6.name = "Line6";
Line6.type = "line";
Line6.config = defaultOption;
Line6.install = function (app) {
  app.component(Line6.name, Line6);
};

export default Line6;
