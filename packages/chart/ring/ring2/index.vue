<template>
  <v-chart
    ref="ring2"
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
import { PieChart, GaugeChart } from "echarts/charts";
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
  PieChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent
]);

const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 数据集
  dataset: {
    type: [Array, Object],
    default: () => {
      return [];
    }
  },
  theme: {
    type: Object,
    default: ()=>{
      return easyv
    }
  },
  title: {
    type: String,
    default: ''
  }
})

const id = uuid()
const initOptions = reactive({
  renderer: 'svg',
  id
})

let mergedOption = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || [])
})
// let mergedOption = reactive()
// console.log(mergedOption.value);
const mergeOption = async () => {
  const { dataset } = props

  if (dataset.dimensions) {
    mergedOption.value.dataset = dataset
  }

  addLegend()
  addTitle()
}

const addLegend = () => {
  const { legend, dataset } = mergedOption.value
  legend.formatter = (name) => {
    const item = dataset.source.filter((item) => item[dataset.dimensions[0]] === name)[0];
    return (
      name + `\n(${item[dataset.dimensions[1]]}条)`
    );
  }
}

const addTitle = () => {
  let { title, dataset } = mergedOption.value
  if (props.title) {
    title.subtext = props.title
  }
  let total = 0
  dataset.source.map(item => {

  })
  title.text = total
}

onMounted(async () => {
  mergeOption();
})
</script>