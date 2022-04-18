<template>
  <div ref="chart" class="chart">
    <div id="main" class="chart" />
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance, reactive, watch, computed } from 'vue';
import { use, init, registerTheme } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import { deepMerge, deepClone } from '../../util/index'
import { Theme } from "@packages";
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
      return Theme.easyv
    }
  }
})
registerTheme('easyv', props.theme)

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
// 监听配置变化
watch(() => instance.config, () => {
  if (myChart.value) {
    initChart()
  }
}, {
  deep: true
})
// 初始化图表
const initChart = () => {
  if (myChart.value) {
    myChart.value.dispose();
  }
  const configs = deepMerge(deepClone(option.value, true), instance.config || []);
  myChart.value = init(document.getElementById('main'), 'easyv');
  myChart.value.setOption({
    ...configs
  });
}

onMounted(() => {
  instance.config.dataset = props.dataset
  initChart()
})

</script>

