import Title2 from './index.vue'
Title2.height = 104;
// eslint-disable-next-line func-names
Title2.install = function(Vue) {
  Vue.component(Title2.name, Title2)
}

export default Title2