<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {

  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: "middle",
          right: '15%',
          textStyle: { color: '#fff' },
          orient: 'vertical'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['35%', '50%'],
            center: ['35%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
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
            data: [
              { value: 1048, name: '客运车' },
              { value: 735, name: '危险品运输车' },
              { value: 484, name: '网约车' },
              { value: 300, name: '学生班车' }
            ]
          }
        ]
      }
    }
  },
  components: {
    VChart
  }
}
</script>

<style scoped>
.chart {
  height: 100%;
}
</style>