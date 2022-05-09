import Mount2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Mount2.title = "三角山峰图";
Mount2.name = "Mount2";
Mount2.type = "mount";
Mount2.config = defaultOption;
Mount2.install = function (app) {
  app.component(Mount2.name, Mount2);
};

export default Mount2;
