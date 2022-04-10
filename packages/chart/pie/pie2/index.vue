<template>
  <v-chart
    class="chart"
    ref="pie2"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme ? theme : defaultTheme"
  />
</template>
<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { reactive, onMounted, computed, ref,onBeforeUnmount } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

use([
  CanvasRenderer,
  PieChart,
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
  },
  // 自动播放时间间隔
  autoPlay: {
    type: Number,
    default: 3000
  }
})
const pie2 = ref(null)
const actionTimer = ref(null)
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

const startActions = () => {
  let dataIndex = -1;
  // console.log(pie2.value);
  const dataLen = mergedOption.value.dataset.source.length;
  actionTimer.value = setInterval(() => {
    pie2.value.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex
    });
    dataIndex = (dataIndex + 1) % dataLen;
    // 设置选中
    pie2.value.dispatchAction({
      type: "select",
      seriesIndex: 0,
      dataIndex
    });
  }, props.autoPlay);
}

onMounted(async () => {
  mergeOption();
  startActions();
})
onBeforeUnmount(()=>{
  clearInterval(actionTimer.value);        
})
</script>