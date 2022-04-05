import Title5 from './index.vue'
// eslint-disable-next-line func-names
Title5.height = 92;
Title5.name = 'Title5'
Title5.install = function(Vue) {
  Vue.component(Title5.name, Title5)
}

export default Title5