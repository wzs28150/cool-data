import Word2 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Word2.title = "3D词云";
Word2.name = "Word2";
Word2.type = "word";
Word2.config = defaultOption;
Word2.install = function (app) {
  app.component(Word2.name, Word2);
};

export default Word2;
