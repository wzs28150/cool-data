import Line4 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Line4.title = "基础折线图4";
Line4.name = "Line4";
Line4.type = "line";
Line4.config = defaultOption;
Line4.install = function (app) {
  app.component(Line4.name, Line4);
};

export default Line4;
