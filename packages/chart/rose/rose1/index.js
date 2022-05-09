import Rose1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Rose1.title = "玫瑰图1";
Rose1.name = "Rose1";
Rose1.type = "rose";
Rose1.config = defaultOption;
Rose1.install = function (app) {
  app.component(Rose1.name, Rose1);
};

export default Rose1;
