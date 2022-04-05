import ModuleTitle5 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle5.mock={
  btnList: []
}
ModuleTitle5.name = 'ModuleTitle5'
ModuleTitle5.install = function(Vue) {
  Vue.component(ModuleTitle5.name, ModuleTitle5)
}

export default ModuleTitle5