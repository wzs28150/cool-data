import Line3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Line3.title = "虚线折线图";
Line3.name = "Line3";
Line3.type = "line";
Line3.config = defaultOption;
Line3.install = function (app) {
  app.component(Line3.name, Line3);
};

export default Line3;
