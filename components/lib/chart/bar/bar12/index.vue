<template>
  <v-chart
    class="chart"
    autoresize
    ref="bar12"
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../../util/index'
import { toRgb } from '../../../../util/color';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent,
  DatasetComponent
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent,
  DatasetComponent
]);

export default {
  name: "Bar12",
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

      const dataLen = this.mergedOption.dataset.dimensions.length - 1
      this.mergedOption.dataset = [
        this.mergedOption.dataset
      ]
      let seriesItem = this.mergedOption.series[0];
      for (let i = 0; i < dataLen; i++) {
        this.mergedOption.dataset[i + 1] = {
          transform: {
            type: 'filter',
            config: { dimension: this.mergedOption.dataset[0].dimensions[i + 1], '>': 0 }
          }
        }
        // 处理主题颜色渐变
        let seriesItemOption = deepClone(seriesItem, true);
        let colorStart = null
        let colorEnd = null
        if (typeof (this.theme.color[i]) == 'object') {
          colorStart = this.theme.color[i].colorStops[0].color
          colorEnd = this.theme.color[i].colorStops[1].color
        } else {
          colorStart = this.theme.color[i]
        }
        seriesItemOption.itemStyle.color = new graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: toRgb(colorStart, 1) },
          { offset: 1, color: toRgb(colorEnd ? colorEnd : colorStart, 0.6) },
        ])
        this.mergedOption.series[i] = seriesItemOption
      }
      console.log(this.mergedOption);
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