<template>
  <v-chart
    class="chart"
    autoresize
    ref="pie2"
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import defaultOption from './config';
import { uuid, deepMerge, deepClone } from '../../../../util/index'
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
  name: "pie2",
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
      // const dataLen = this.mergedOption.dataset.dimensions.length
      // const seriesItem = this.mergedOption.series[0]
      // for (let i = 0; i < dataLen - 1; i++) {
      //   this.mergedOption.series[i] = seriesItem
      // }
    },
    startActions(){
      let dataIndex = -1;
      const pie2 = this.$refs.pie2;
      if (!pie2) {
        return;
      }
      const dataLen = this.mergedOption.dataset.source.length;
      this.actionTimer = setInterval(() => {
        pie2.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex
        });
        dataIndex = (dataIndex + 1) % dataLen;
        // 设置选中
        pie2.dispatchAction({
          type: "select",
          seriesIndex: 0,
          dataIndex
        });
      }, this.autoPlay);
    }
  },
  mounted() {
    const { mergeOption,startActions } = this
    mergeOption();
    startActions();
  },
  components: {
    VChart
  }
}
</script>