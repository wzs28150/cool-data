import Title3 from './index.vue'
Title3.height = 185;
Title3.name = 'Title3'
// eslint-disable-next-line func-names
Title3.install = function(Vue) {
  Vue.component(Title3.name, Title3)
}

export default Title3