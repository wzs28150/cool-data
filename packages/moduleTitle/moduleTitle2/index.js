import ModuleTitle2 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle2.mock={
  btnList: []
}
ModuleTitle2.name = 'ModuleTitle2'
ModuleTitle2.install = function(Vue) {
  Vue.component(ModuleTitle2.name, ModuleTitle2)
}

export default ModuleTitle2