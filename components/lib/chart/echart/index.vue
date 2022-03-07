<template>
  <div class="chart" id="main"></div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  name: 'Chart',
  props: {
    option: {
      type: Object,
      require: true
    }
  },
  methods: {

  },
  mounted(){
    var myChart = echarts.init(document.getElementById('main'))
    console.log(myChart);
    myChart.setOption(this.option)
  }
}
</script>