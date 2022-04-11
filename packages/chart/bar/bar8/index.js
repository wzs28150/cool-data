import Bar8 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar8.title = "渐变柱状堆叠图";
Bar8.name = "Bar8";
Bar8.type = "bar";
Bar8.config = defaultOption;
Bar8.install = function (app) {
  app.component(Bar8.name, Bar8);
};

export default Bar8;
