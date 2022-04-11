import Bar11 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar11.title = "横向对比柱状图";
Bar11.name = "Bar11";
Bar11.type = "bar";
Bar11.config = defaultOption;
Bar11.install = function (app) {
  app.component(Bar11.name, Bar11);
};

export default Bar11;
