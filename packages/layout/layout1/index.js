import Layout1 from "./index.vue";
import picFile from "./pic.jpg";
Layout1.name = "Layout1";
Layout1.title = "模板布局1";
Layout1.pic = picFile;
// eslint-disable-next-line func-names
Layout1.install = function (Vue) {
  Vue.component(Layout1.name, Layout1);
};

export default Layout1;
