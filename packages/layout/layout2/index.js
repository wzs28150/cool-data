import Layout2 from './index.vue'
Layout2.name = "Layout2";
Layout2.title = "模板布局2"
const picFile = import.meta.globEager("./pic.jpg");
Object.keys(picFile).forEach((item)=>{
  Layout2.pic = picFile[item].default
})
// eslint-disable-next-line func-names
Layout2.install = function(Vue) {
  Vue.component(Layout2.name, Layout2)
}

export default Layout2