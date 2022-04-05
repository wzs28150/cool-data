import ModuleTitle4 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle4.mock={
  btnList: []
}
ModuleTitle4.name = 'ModuleTitle4'
ModuleTitle4.install = function(Vue) {
  Vue.component(ModuleTitle4.name, ModuleTitle4)
}

export default ModuleTitle4