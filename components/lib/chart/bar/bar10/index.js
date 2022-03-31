import Bar10 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar10.title = "点线堆叠图";
Bar10.type = "bar";
Bar10.config = defaultOption;
Bar10.install = function (Vue) {
  Vue.component(Bar10.name, Bar10);
};

export default Bar10;
