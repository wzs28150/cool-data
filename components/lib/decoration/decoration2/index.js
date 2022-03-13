import Decoration2 from './index.vue'
Decoration2.height = 104;
// eslint-disable-next-line func-names
Decoration2.install = function(Vue) {
  Vue.component(Decoration2.name, Decoration2)
}

export default Decoration2