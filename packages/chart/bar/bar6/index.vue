<template>
  <v-chart
    class="chart"
    ref="bar5"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme ? theme : defaultTheme"
  />
</template>
<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PictorialBarChart, BarChart  } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent,
  DatasetComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { reactive, onMounted, computed } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

use([
  CanvasRenderer,
  PictorialBarChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  TransformComponent,
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
  const dataLen = mergedOption.value.dataset.dimensions.length - 1
  mergedOption.value.dataset = [
    mergedOption.value.dataset
  ]

  let seriesItem = mergedOption.value.series[0];
  let bottomItem = mergedOption.value.series[1];
  let topItem = mergedOption.value.series[2];
  for (let i = 0; i < dataLen; i++) {
    mergedOption.value.dataset[i + 1] = {
      transform: {
        type: 'filter',
        config: { dimension: mergedOption.value.dataset[0].dimensions[i + 1], '>': 0 }
      }
    }

    mergedOption.value.series[i] = {
      ...seriesItem,
    }

    let symbolOffsetX = 0
    if (dataLen % 2 == 0) {
      symbolOffsetX = (2 * (i - dataLen / 2) + 1) * 6
    } else {
      // 奇数个
      symbolOffsetX = (i - Math.floor(dataLen / 2)) * 12
    }
    let theme = props.theme ?? defaultTheme
    mergedOption.value.series[i + dataLen] = {
      ...topItem,
      datasetIndex: 1,
      symbolOffset: [symbolOffsetX, -3],
      itemStyle: {
        color: theme.color[i]
      }
    }

    mergedOption.value.series[i + dataLen * 2] = {
      ...bottomItem,
      datasetIndex: 2,
      symbolOffset: [symbolOffsetX, 3],
      itemStyle: {
        color: theme.color[i]
      }
    }
  }
}

onMounted(async () => {
  mergeOption();
})
</script>