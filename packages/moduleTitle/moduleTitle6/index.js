import ModuleTitle6 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle6.mock={
  btnList: []
}
ModuleTitle6.name = 'ModuleTitle6'
ModuleTitle6.install = function(Vue) {
  Vue.component(ModuleTitle6.name, ModuleTitle6)
}

export default ModuleTitle6