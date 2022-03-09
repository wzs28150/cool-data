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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 
          }
        },
        legend: {
          show: true,
          textStyle: { color: '#fff' },
          top: "5%"
        },
        grid: {
          left: '10%',
          right: '15%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          type: 'value'
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          type: 'category',
        },
        dataset: {
          source: [
            ['type', '行驶', '停车', '熄火','离线'],
            ['客运车', 43.3, 85.8, 93.7],
            ['危险品运输车', 83.1, 73.4, 55.1],
            ['网约车', 86.4, 65.2, 82.5],
            ['学生班车', 72.4, 53.9, 39.1]
          ]
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
          },
          {
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
          },
          {
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            }
          }
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