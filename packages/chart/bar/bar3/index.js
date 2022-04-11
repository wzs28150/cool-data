import Bar3 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar3.title = "斑马纹理柱状图";
Bar3.name = "Bar3";
Bar3.type = "bar";
Bar3.config = defaultOption;
Bar3.install = function (app) {
  app.component(Bar3.name, Bar3);
};

export default Bar3;
