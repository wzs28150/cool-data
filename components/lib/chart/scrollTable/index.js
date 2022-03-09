import ScrollTable from './index.vue'

// eslint-disable-next-line func-names
ScrollTable.install = function(Vue) {
  Vue.component(ScrollTable.name, ScrollTable)
}

export default ScrollTable