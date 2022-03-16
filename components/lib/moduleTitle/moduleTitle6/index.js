import ModuleTitle6 from './index.vue'

// eslint-disable-next-line func-names
ModuleTitle6.mock={
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
ModuleTitle6.install = function(Vue) {
  Vue.component(ModuleTitle6.name, ModuleTitle6)
}

export default ModuleTitle6