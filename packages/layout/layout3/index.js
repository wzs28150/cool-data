import Layout3 from './index.vue'
Layout3.name = "Layout3";
Layout3.title = "模板布局3"
const picFile = import.meta.globEager("./pic.jpg");
Object.keys(picFile).forEach((item)=>{
  Layout3.pic = picFile[item].default
})
// eslint-disable-next-line func-names
Layout3.install = function(Vue) {
  Vue.component(Layout3.name, Layout3)
}

export default Layout3