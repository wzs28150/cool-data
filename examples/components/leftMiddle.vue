<template>
  <v-chart class="chart" :init-options="initOptions" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";
use([
  SVGRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);
export default {
  data() {
    return {
      option: {
        legend: {
          show: true,
          textStyle: { color: '#fff' },
          top: "5%"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 
          }
        },
        dataset: {
          // 提供一份数据。
          source: [
            ['car', '客运车', '危险品运输车', '网约车', '学生班车'],
            ['行驶', 320, 302, 301, 334],
            ['停车', 120, 132, 101, 134],
            ['熄火', 220, 182, 191, 234],
            ['离线', 150, 212, 201, 154]
          ]
        },

        grid: {
          left: '10%',
          right: '15%',
          bottom: '15%',
          containLabel: true
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: {
          type: 'category', axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
          { type: 'bar', stack: 'total', seriesLayoutBy: 'row' }, 
          { type: 'bar', stack: 'total', seriesLayoutBy: 'row' }, 
          { type: 'bar', stack: 'total', seriesLayoutBy: 'row' },
          { type: 'bar', stack: 'total', seriesLayoutBy: 'row' }
        ]
      },
      initOptions: {
        renderer: 'svg'
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