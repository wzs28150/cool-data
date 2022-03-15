import Title5 from './index.vue'
Title5.height = 92;
// eslint-disable-next-line func-names
Title5.install = function(Vue) {
  Vue.component(Title5.name, Title5)
}

export default Title5