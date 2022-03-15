import ModuleTitle4 from './index.vue'

// eslint-disable-next-line func-names
ModuleTitle4.mock={
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
ModuleTitle4.install = function(Vue) {
  Vue.component(ModuleTitle4.name, ModuleTitle4)
}

export default ModuleTitle4