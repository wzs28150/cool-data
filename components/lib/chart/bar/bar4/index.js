import Bar4 from "./index.vue";
import defaultOption from "./config";
// eslint-disable-next-line func-names
Bar4.title = "立体柱状图";
Bar4.type = "bar";
Bar4.config = defaultOption;
Bar4.install = function (Vue) {
  Vue.component(Bar4.name, Bar4);
};

export default Bar4;
