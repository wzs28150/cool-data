import Layout1 from './index.vue'
Layout1.name = "Layout1";
Layout1.title = "模板布局1"
const picFile = import.meta.globEager("./pic.jpg");
Object.keys(picFile).forEach((item)=>{
  Layout1.pic = picFile[item].default
})
// eslint-disable-next-line func-names
Layout1.install = function(Vue) {
  Vue.component(Layout1.name, Layout1)
}

export default Layout1