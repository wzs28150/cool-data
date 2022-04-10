import Layout4 from "./index.vue";
import picFile from "./pic.jpg";
Layout4.name = "Layout4";
Layout4.title = "模板布局4";
Layout4.pic = picFile;
// eslint-disable-next-line func-names
Layout4.install = function (Vue) {
  Vue.component(Layout4.name, Layout4);
};

export default Layout4;
