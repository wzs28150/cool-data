import Title1 from './index.vue'

// eslint-disable-next-line func-names
Title1.height = 60;
Title1.install = function(Vue) {
  Vue.component(Title1.name, Title1)
}

export default Title1