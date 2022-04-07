import ModuleTitle7 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle7.mock={
  btnList: []
}
ModuleTitle7.name = 'ModuleTitle7'
ModuleTitle7.install = function(Vue) {
  Vue.component(ModuleTitle7.name, ModuleTitle7)
}

export default ModuleTitle7