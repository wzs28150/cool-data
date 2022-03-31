<template>
  <v-chart
    class="chart"
    ref="bar8"
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PictorialBarChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../../util/index'
import { toRgb } from '../../../../util/color';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  PictorialBarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent
]);

export default {
  name: "Bar8",
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
        let color = null
        if(typeof(this.theme.color[i]) == 'object'){
          color = this.theme.color[i].colorStops[0].color
        } else {
          color = this.theme.color[i]
        }
        seriesItemOption.itemStyle.normal.color = new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: toRgb(color,1) },
          { offset: 1, color: toRgb(color,0.1) },
        ]),
          this.mergedOption.series[i] = seriesItemOption
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