import Line5 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Line5.title = "时序折线图";
Line5.name = "Line5";
Line5.type = "line";
Line5.config = defaultOption;
Line5.install = function (app) {
  app.component(Line5.name, Line5);
};

export default Line5;
