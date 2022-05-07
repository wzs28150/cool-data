import Ring1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Ring1.title = "动态环图";
Ring1.name = "Ring1";
Ring1.type = "ring";
Ring1.config = defaultOption;
Ring1.install = function (app) {
  app.component(Ring1.name, Ring1);
};

export default Ring1;
