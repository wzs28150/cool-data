import Bar1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar1.title = "基础柱图1";
Bar1.name = "Bar1";
Bar1.type = "bar";
Bar1.config = defaultOption;
Bar1.install = function (app) {
  app.component(Bar1.name, Bar1);
};

export default Bar1;
