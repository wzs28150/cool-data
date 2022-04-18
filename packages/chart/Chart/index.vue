<template>
  <div
    ref="chart"
    class="chart"
  >
    <div
      id="main"
      class="chart"
    />
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance, reactive, watch, computed } from 'vue';
import { use, init } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import { deepMerge, deepClone } from '../../util/index'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from "echarts/components";
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
]);
const chart = ref()
const option = ref({
  title: {},
  xAxis: {},
  yAxis: {},
  series: [

  ]
})
const props = defineProps({
  horizontal: {
    type: Boolean,
    default: false
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
    default: () => {
      return easyv
    }
  }
})
const instance = getCurrentInstance()
instance.config = reactive({
  grid: {
    left: "10%",
    right: "15%",
    bottom: "10%",
    containLabel: true
  },
  title: {},
  xAxis: {},
  yAxis: {},
  series: [

  ]
})
let myChart = ref()
// watch(()=>props.dataset,()=>{
//   instance.config.dataset = props.dataset
// },{
//   deep: true
// })
// watch(()=>instance.config ,()=>{
//   myChart.value.setOption({
//     ...config
//   });
// },{
//   deep: true
// })

const configs = computed(()=>{
  return deepMerge(deepClone(option.value, true), instance.config || [])
})

onMounted(() => {
  instance.config.dataset = props.dataset
  console.log(configs.value);
  myChart.value = init(document.getElementById('main'));
  myChart.value.setOption({
    ...configs.value
  });
})

</script>

