import Layout3 from "./index.vue";
import picFile from "./pic.jpg";
Layout3.name = "Layout3";
Layout3.title = "模板布局3";
Layout3.pic = picFile;
// eslint-disable-next-line func-names
Layout3.install = function (Vue) {
  Vue.component(Layout3.name, Layout3);
};

export default Layout3;
