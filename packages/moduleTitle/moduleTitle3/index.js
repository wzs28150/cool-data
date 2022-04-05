import ModuleTitle3 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle3.mock={
  btnList: []
}
ModuleTitle3.name = 'ModuleTitle3'
ModuleTitle3.install = function(Vue) {
  Vue.component(ModuleTitle3.name, ModuleTitle3)
}

export default ModuleTitle3