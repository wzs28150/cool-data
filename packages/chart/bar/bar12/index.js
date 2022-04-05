import Bar12 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar12.title = "横向对比柱状图";
Bar12.name = "Bar12";
Bar12.type = "bar";
Bar12.config = defaultOption;
Bar12.install = function (app) {
  app.component(Bar12.name, Bar12);
};

export default Bar12;
