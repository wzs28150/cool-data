import Layout2 from "./index.vue";
import picFile from "./pic.jpg";
Layout2.name = "Layout2";
Layout2.title = "模板布局2";
Layout2.pic = picFile;
// eslint-disable-next-line func-names
Layout2.install = function (Vue) {
  Vue.component(Layout2.name, Layout2);
};

export default Layout2;
