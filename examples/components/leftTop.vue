<template>
  <v-chart
    class="chart"
    :init-options="initOptions"
    :autoresize="true"
    :loading-options="loadingOptions"
    :loading="loading"
    :option="option"
  />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
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
          trigger: 'item'
        },
        legend: {
          top: "middle",
          right: '10%',
          textStyle: { color: '#fff' },
          orient: 'vertical'
        },

        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['30%', '50%'],
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
      },
      loadingOptions: {
        color: '#fff',
        textColor: '#fff',
        maskColor: 'rgba(#113549B2, 0.6)',
      },
      initOptions: {
        renderer: 'canvas'
      },
      loading: false
    }
  },
  components: {
    VChart
  },
  mounted(){
    setTimeout(() => {
      this.loading = false
    }, 500);
  }
}
</script>

<style scoped>
.chart {
  height: 100%;
}
</style>