<template>
  <v-chart
    ref="pie3"
    class="chart"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script setup>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  PolarComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { reactive, onMounted, computed } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
import { toRgb } from '../../../util/color';
import easyv from "../../../theme/easyv.js"

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  PolarComponent
]);

const props = defineProps({
  option: {
    type: Object,
    default: ()=>{
      return {}
    }
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
    type: Object,
    default: ()=>{
      return easyv
    }
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
  // 处理数据从小到大
  mergedOption.value.dataset.source.sort((a, b) => a.value - b.value)
  mergedOption.value.radiusAxis.data = mergedOption.value.dataset.source.map(item => item.name)
  let theme = props.theme ?? defaultTheme
  mergedOption.value.dataset.source.map((item, i) => {
    let colorStart = null
    let colorEnd = null
    if (typeof (theme.color[i]) == 'object') {
      colorStart = theme.color[i].colorStops[0].color
      colorEnd = theme.color[i].colorStops[1].color
    } else {
      colorStart = theme.color[i]
    }
    mergedOption.value.series.data.push({
      name: item.name,
      value: item.value,
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: toRgb(colorStart, 1) },
          { offset: 1, color: toRgb(colorEnd ? colorEnd : colorStart, 0.6) }
        ])
      }
    })
  })
}

onMounted(async () => {
  mergeOption();
})
</script>