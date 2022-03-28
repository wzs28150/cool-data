import Pyramid2 from "./index.vue";

Pyramid2.demoData = {
  option: {
  }
};
// eslint-disable-next-line func-names
Pyramid2.install = function (Vue) {
  Vue.component(Pyramid2.name, Pyramid2);
};

export default Pyramid2;
