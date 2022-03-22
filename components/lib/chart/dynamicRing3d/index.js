import DynamicRing3d from "./index.vue";

// eslint-disable-next-line func-names
DynamicRing3d.demoData = {
  option: {
   
  },
};
DynamicRing3d.install = function (Vue) {
  Vue.component(DynamicRing3d.name, DynamicRing3d);
};

export default DynamicRing3d;
