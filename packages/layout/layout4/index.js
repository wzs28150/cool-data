import Layout4 from './index.vue'
Layout4.name = "Layout4";
Layout4.title = "模板布局4"
const picFile = import.meta.globEager("./pic.jpg");
Object.keys(picFile).forEach((item)=>{
  Layout4.pic = picFile[item].default
})
// eslint-disable-next-line func-names
Layout4.install = function(Vue) {
  Vue.component(Layout4.name, Layout4)
}

export default Layout4