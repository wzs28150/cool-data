import Chart from './index.vue'

Chart.demoData = {
  option: {
    legend: { textStyle: { color: '#fff' }, top: "8%" },
    tooltip: {

    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      containLabel: true
    },
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: {
      type: 'category', axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
    },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  }
}
// eslint-disable-next-line func-names
Chart.install = function(Vue) {
  Vue.component(Chart.name, Chart)
}

export default Chart