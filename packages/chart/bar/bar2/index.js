import Bar2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar2.title = "基础柱图2";
Bar2.name = "Bar2";
Bar2.type = "bar";
Bar2.config = defaultOption;
Bar2.install = function (app) {
  app.component(Bar2.name, Bar2);
};

export default Bar2;
