<template>
  <v-chart
    class="chart"
    autoresize
    ref="pie5"
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../../util/index'
import { toRgb } from '../../../../util/color';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent
]);

export default {
  name: "pie5",
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
    // 自动播放时间间隔
    autoPlay: {
      type: Number,
      default: 3000
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

      if (dataset.length > 0) {
        this.mergedOption.dataset = dataset
      }
      // 处理数据从小到大
      this.mergedOption.dataset.source.sort((a, b) => a.value - b.value)
      // 设置坐标名称
      this.mergedOption.radiusAxis.data = this.mergedOption.dataset.source.map(item => item.name)
      // 处理颜色
      this.mergedOption.dataset.source.map((item, i) => {
        let colorStart = null
        let colorEnd = null
        if (typeof (this.theme.color[i]) == 'object') {
          colorStart = this.theme.color[i].colorStops[0].color
          colorEnd = this.theme.color[i].colorStops[1].color
        } else {
          colorStart = this.theme.color[i]
        }
        this.mergedOption.series[0].data.push({
          name: item.name,
          value: item.value,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: toRgb(colorStart, 1) },
              { offset: 1, color: toRgb(colorEnd ? colorEnd : colorStart, 0.6) },
            ])
          }
        })
        this.mergedOption.series[1].data.push({
          name: item.name,
          value: item.value,
        })
      })
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