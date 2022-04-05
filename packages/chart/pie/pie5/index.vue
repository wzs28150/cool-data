<template>
  <v-chart
    class="chart"
    ref="pie5"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="props.theme"
  />
</template>
<script setup>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  PolarComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { reactive, onMounted, computed, ref } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
import { toRgb } from '../../../util/color';
use([
  CanvasRenderer,
  BarChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  PolarComponent
]);

const props = defineProps({
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
  reverse: {
    type: Boolean,
    default: true
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
  // 处理数据从小到大
  mergedOption.value.dataset.source.sort((a, b) => a.value - b.value)
  // 设置旋转方向
  if (!props.reverse) {
    mergedOption.value.angleAxis.clockwise = false
  }
  // 设置坐标名称
  mergedOption.value.radiusAxis.data = mergedOption.value.dataset.source.map(item => item.name)

  mergedOption.value.dataset.source.map((item, i) => {
    let colorStart = null
    let colorEnd = null
    if (typeof (props.theme.color[i]) == 'object') {
      colorStart = props.theme.color[i].colorStops[0].color
      colorEnd = props.theme.color[i].colorStops[1].color
    } else {
      colorStart = props.theme.color[i]
    }
    mergedOption.value.series[0].data.push({
      name: item.name,
      value: item.value,
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: toRgb(colorStart, 1) },
          { offset: 1, color: toRgb(colorEnd ? colorEnd : colorStart, 0.6) },
        ])
      }
    })

    mergedOption.value.series[1].data.push({
      name: item.name,
      value: item.value,
    })
  })
}

onMounted(async () => {
  mergeOption();
})
</script>