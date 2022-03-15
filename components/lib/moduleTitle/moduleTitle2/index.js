import ModuleTitle2 from './index.vue'

// eslint-disable-next-line func-names
ModuleTitle2.mock={
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
ModuleTitle2.install = function(Vue) {
  Vue.component(ModuleTitle2.name, ModuleTitle2)
}

export default ModuleTitle2