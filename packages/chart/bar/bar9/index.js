import Bar9 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar9.title = "点线堆叠图";
Bar9.name = "Bar9";
Bar9.type = "bar";
Bar9.config = defaultOption;
Bar9.install = function (app) {
  app.component(Bar9.name, Bar9);
};

export default Bar9;
