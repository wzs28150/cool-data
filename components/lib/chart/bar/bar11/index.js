import Bar11 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar11.title = "点线堆叠图";
Bar11.type = "bar";
Bar11.config = defaultOption;
Bar11.install = function (Vue) {
  Vue.component(Bar11.name, Bar11);
};

export default Bar11;
