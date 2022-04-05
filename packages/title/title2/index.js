import Title2 from './index.vue'
// eslint-disable-next-line func-names
Title2.height = 104;
Title2.name = 'Title2'
Title2.install = function(Vue) {
  Vue.component(Title2.name, Title2)
}

export default Title2