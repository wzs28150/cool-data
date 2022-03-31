<template>
  <v-chart
    class="chart"
    autoresize
    ref="bar2"
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../../util/index'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default {
  name: "Bar2",
  props: {
    // 其他自定义echarts属性
    option: {
      type: Object
    },
    // 数据集
    dataset: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 主题设置
    theme: {
      type: Object
    }
  },
  data() {
    const id = uuid()
    return {
      initOptions: {
        renderer: 'canvas',
        id
      },
      mergedOption: {

      }
    }
  },
  methods: {
    mergeOption() {
      const { option, dataset } = this
      this.mergedOption = deepMerge(deepClone(defaultOption, true), option || [])

      if (dataset.source) {
        this.mergedOption.dataset = dataset
      }

      const dataLen = this.mergedOption.dataset.dimensions.length
      const seriesItem = this.mergedOption.series[0]
      for (let i = 0; i < dataLen - 1; i++) {
        this.mergedOption.series[i] = seriesItem
      }
    }
  },
  mounted() {
    const { mergeOption } = this
    mergeOption();
  },
  components: {
    VChart
  }
}
</script>