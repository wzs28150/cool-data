import Word1 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Word1.title = "基础词云";
Word1.name = "Word1";
Word1.type = "word";
Word1.config = defaultOption;
Word1.install = function (app) {
  app.component(Word1.name, Word1);
};

export default Word1;
