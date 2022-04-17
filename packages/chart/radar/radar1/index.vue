<template>
  <v-chart
    ref="radar1"
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
import { RadarChart } from "echarts/charts";
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
import { toRgb } from '../../../util/color';

use([
  CanvasRenderer,
  RadarChart,
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
      return []
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
  addRadar()
  setAreaBg()
}
// 添加雷达的坐标系
const addRadar = () => {
  const { radar, dataset } = mergedOption.value
  console.log(dataset.dimensions);
  radar.indicator = []
  radar.radius = '70%'
  radar.center = ['50%', '50%']
  dataset.max.map((item, index) => {
    radar.indicator.push({
      name: dataset.dimensions[index + 1],
      max: item
    })
  })
}
// 添加雷达的背景色
const setAreaBg = () => {
  const { dataset, series } = mergedOption.value
  let { theme } = props
  dataset.source.map((item, i) => {
    let color = null
    if (typeof (theme.color[i]) == 'object') {
      color = theme.color[i].colorStops[0].color
    } else {
      color = theme.color[i]
    }
    console.log(color);
    series.push({
      type: 'radar',
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 1, 1, [
          { offset: 0, color: toRgb(color, 1) },
          { offset: 0.5, color: 'rgba(0,0,0,0)' },
          { offset: 1, color: toRgb(color, 1) }
        ]),
        opacity: 1 // 区域透明度
      }
    })
  })
}

onMounted(async () => {
  mergeOption();
})
</script>