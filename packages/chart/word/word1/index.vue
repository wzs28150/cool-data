<template>
  <v-chart
    ref="bar1"
    class="chart"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
  />
</template>
<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import 'echarts-wordcloud';
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
import easyv from "../../../theme/easyv.js"

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent
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
      return {}
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

  // const dataLen = mergedOption.value.dataset.dimensions.length
  // const seriesItem = mergedOption.value.series[0]
  // for (let i = 0; i < dataLen - 1; i++) {
  //   mergedOption.value.series[i] = seriesItem
  // }
}

onMounted(async() => {
  mergeOption();
})
</script>