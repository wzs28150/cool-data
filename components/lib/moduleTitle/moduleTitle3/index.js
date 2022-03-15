import ModuleTitle3 from './index.vue'

// eslint-disable-next-line func-names
ModuleTitle3.mock={
  btnList: [
    {
      'label': '本月',
      'value': '1'
    },
    {
      'label': '近三月',
      'value': '2'
    },
    {
      'label': '近半年',
      'value': '3'
    }
  ]
}
ModuleTitle3.install = function(Vue) {
  Vue.component(ModuleTitle3.name, ModuleTitle3)
}

export default ModuleTitle3