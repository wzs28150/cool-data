import Bar7 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar7.title = "胶囊堆叠图";
Bar7.type = "bar";
Bar7.config = defaultOption;
Bar7.install = function (Vue) {
  Vue.component(Bar7.name, Bar7);
};

export default Bar7;
