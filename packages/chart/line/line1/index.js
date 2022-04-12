import Line1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Line1.title = "基础折线图1";
Line1.name = "Line1";
Line1.type = "line";
Line1.config = defaultOption;
Line1.install = function (app) {
  app.component(Line1.name, Line1);
};

export default Line1;
