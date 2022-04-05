import Bar10 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar10.title = "渐变柱状堆叠图2";
Bar10.name = "Bar10";
Bar10.type = "bar";
Bar10.config = defaultOption;
Bar10.install = function (app) {
  app.component(Bar10.name, Bar10);
};

export default Bar10;
