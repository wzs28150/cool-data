import Chart from './index.vue'

// eslint-disable-next-line func-names
Chart.install = function(Vue) {
  Vue.component(Chart.name, Chart)
}

export default Chart