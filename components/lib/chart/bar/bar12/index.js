import Bar12 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar12.title = "点线堆叠图";
Bar12.type = "bar";
Bar12.config = defaultOption;
Bar12.install = function (Vue) {
  Vue.component(Bar12.name, Bar12);
};

export default Bar12;
