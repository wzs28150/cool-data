import ModuleTitle1 from './index.vue'
// eslint-disable-next-line func-names
ModuleTitle1.height = 60;
ModuleTitle1.name = 'ModuleTitle1'
ModuleTitle1.mock={
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
ModuleTitle1.install = function(Vue) {
  Vue.component(ModuleTitle1.name, ModuleTitle1)
}

export default ModuleTitle1