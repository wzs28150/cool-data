import Decoration1 from './index.vue'

// eslint-disable-next-line func-names
Decoration1.width = 300;
Decoration1.height = 300;
Decoration1.install = function(Vue) {
  Vue.component(Decoration1.name, Decoration1)
}

export default Decoration1