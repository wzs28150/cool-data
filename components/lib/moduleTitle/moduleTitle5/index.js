import ModuleTitle5 from './index.vue'

// eslint-disable-next-line func-names
ModuleTitle5.mock={
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
ModuleTitle5.install = function(Vue) {
  Vue.component(ModuleTitle5.name, ModuleTitle5)
}

export default ModuleTitle5