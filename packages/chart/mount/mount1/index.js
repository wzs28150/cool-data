import Mount1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Mount1.title = "尖角山峰图";
Mount1.name = "Mount1";
Mount1.type = "mount";
Mount1.config = defaultOption;
Mount1.install = function (app) {
  app.component(Mount1.name, Mount1);
};

export default Mount1;
