import Ring3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Ring3.title = "3d动态环图";
Ring3.name = "Ring3";
Ring3.type = "ring";
Ring3.config = defaultOption;
Ring3.install = function (app) {
  app.component(Ring3.name, Ring3);
};

export default Ring3;
