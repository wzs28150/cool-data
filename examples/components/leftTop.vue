<template>
  <ve-ring
    height="250px"
    width="100%"
    :data="chartData"
    :extend="chartExtend"
    :settings="chartSettings"
  ></ve-ring>
</template>

<script>
import VeRing from 'v-charts/lib/ring.common'
export default {
  data() {
    this.chartExtend = {
      legend: {
        show: true,
        textStyle: { color: '#fff' },
        top: "middle",
        right: '15%',
        orient: 'vertical'
      },  //隐藏legend
      series: {
        center: ['35%', '50%']
      }
    };

    return {
      chartSettings: {
        radius: ['60px', '80px'],
        label: {
          show: false,
          // position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
      },
      chartData: {
        columns: ['type', 'num'],
        rows: [
          { 'type': '客运车', 'num': 1231 },
          { 'type': '危险品运输车', 'num': 1223 },
          { 'type': '网约车', 'num': 2123 },
          { 'type': '学生班车', 'num': 4123 },
        ]
      },
    }
  },
  components: {
    VeRing
  }
}
</script>