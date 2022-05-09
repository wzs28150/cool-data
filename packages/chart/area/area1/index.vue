<template>
  <v-chart
    class="chart"
    ref="pie1"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme ? theme : defaultTheme"
  />
</template>
<script setup>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { reactive, onMounted, computed } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
import { toRgb } from '../../../util/color';
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
]);

const props = defineProps({
  option: {
    type: Object
  },
  // 数据集
  dataset: {
    type: [Array, Object],
    default: () => {
      return []
    }
  },
  // 主题设置
  theme: {
    type: Object
  }
})

const id = uuid()
const initOptions = reactive({
  renderer: 'canvas',
  id
})

let mergedOption = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || [])
})
// let mergedOption = reactive()
// console.log(mergedOption.value);
const mergeOption = async () => {
  const { dataset } = props

  if (dataset.length > 0) {
    mergedOption.value.dataset = dataset
  }

  const dataLen = mergedOption.value.dataset.dimensions.length
  const seriesItem = mergedOption.value.series[0]

  for (let i = 0; i < dataLen - 1; i++) {
    // 处理主题颜色渐变
    let seriesItemOption = deepClone(seriesItem, true);
    let color = null
    let theme = props.theme ?? defaultTheme
    if (typeof (theme.color[i]) == 'object') {
      color = theme.color[i].colorStops[0].color
    } else {
      color = theme.color[i]
    }
    seriesItemOption.itemStyle.color = color
    seriesItemOption.areaStyle.color = new graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: toRgb(color, 1) },
      { offset: 1, color: toRgb(color, 0) },
    ])
    mergedOption.value.series[i] = seriesItemOption
  }
}

onMounted(async() => {
  mergeOption();
})
</script>