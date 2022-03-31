<template>
  <v-chart
    class="chart"
    ref="bar6"
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PictorialBarChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../../util/index'
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
  name: "Bar6",
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
      let bottomItem = this.mergedOption.series[1];
      let topItem = this.mergedOption.series[2];
      console.log(dataLen % 2, Math.floor(dataLen / 2));
      for (let i = 0; i < dataLen; i++) {
        this.mergedOption.dataset[i + 1] = {
          transform: {
            type: 'filter',
            config: { dimension: this.mergedOption.dataset[0].dimensions[i + 1], '>': 0 }
          }
        }
        this.mergedOption.series[i] = {
          ...seriesItem,
        }
        let symbolOffsetX = 0
        if (dataLen % 2 == 0) {
          symbolOffsetX = (2 * (i - dataLen / 2 ) + 1) * 6
        } else {
          // 奇数个
          symbolOffsetX = (i - Math.floor(dataLen / 2)) * 12
        }
        this.mergedOption.series[i + dataLen] = {
          ...topItem,
          datasetIndex: 1,
          symbolOffset: [symbolOffsetX, -3],
          itemStyle: {
            normal: {
              color: this.theme.color[i]
            }
          }
        },
        this.mergedOption.series[i + dataLen * 2] = {
          ...bottomItem,
          datasetIndex: 2,
          symbolOffset: [symbolOffsetX, 3],
          itemStyle: {
            normal: {
              color: this.theme.color[i]
            }
          }
        }
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