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
          data: ['客运车', '危险品运输车', '网约车', '学生班车']
        },
        series: [
          {
            name: '行驶',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '停车',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '熄火',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '离线',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
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