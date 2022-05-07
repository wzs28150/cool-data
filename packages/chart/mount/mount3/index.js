import Mount3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Mount3.title = "三角山峰图";
Mount3.name = "Mount3";
Mount3.type = "mount";
Mount3.config = defaultOption;
Mount3.install = function (app) {
  app.component(Mount3.name, Mount3);
};

export default Mount3;
