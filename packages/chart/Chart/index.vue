<template>
  <div ref="root" class="chart">
    <div id="main" class="chart" />
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance, reactive, watch, shallowRef , toRefs} from 'vue';
import { use, init, registerTheme } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { autoresizeProps, useAutoresize } from '../../util/autoResize';
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
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
]);
const root = shallowRef();
const chart = shallowRef()
const option = ref({
  title: {},
  grid: {
    left: "10%",
    right: "10%",
    top: '10%',
    bottom: "10%",
    containLabel: true
  },
  xAxis: {},
  yAxis: {},
  series: [],
  Legend: {}
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
  },
  ...autoresizeProps
})

const { autoresize, theme, dataset } = toRefs(props);
registerTheme('easyv', theme.value)

const instance = getCurrentInstance()
instance.config = reactive({
  grid: {
    left: "10%",
    right: "10%",
    bottom: "10%",
    top: '10%',
    containLabel: true
  },
  title: {
    show: false
  },
  xAxis: {},
  yAxis: {},
  series: [

  ],
  legend: {
    show: false
  }
})
// 监听配置变化
watch(() => instance.config, () => {
  if (chart.value) {
    initChart()
  }
}, {
  deep: true
})
watch(() => props.dataset, () => {
  if (chart.value) {
    initChart()
  }
}, {
  deep: true
})
// 初始化图表
const initChart = () => {
  if (chart.value) {
    chart.value.dispose();
  }
  const configs = deepMerge(deepClone(option.value, true), instance.config || []);
  configs.dataset = dataset.value
  chart.value = init(document.getElementById('main'), 'easyv');
  chart.value.setOption({
    ...configs
  });
}

useAutoresize(chart, autoresize, root);

onMounted(() => {
  initChart()
})

</script>

