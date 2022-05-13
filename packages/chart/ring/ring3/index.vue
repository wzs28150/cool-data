<template>
  <v-chart
    ref="ring3"
    class="chart"
    autoresize
    :init-options="initOptions"
    :option="option"
    :theme="theme ? theme : defaultTheme"
    @click="handleClick"
    @mouseover="handleMouseover"
    @globalout="handleGlobalout"
  />
  <div class="pie7-bg" />
</template>
<script setup>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, CustomChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  PolarComponent
} from "echarts/components";

import 'echarts-gl'
import VChart from "vue-echarts";
import { reactive, onMounted, computed, ref } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
import { getPie3D, getParametricEquation } from './chart3D'
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

use([
  CanvasRenderer,
  PieChart,
  CustomChart,
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
  // 圆环尺寸
  radius: {
    type: String,
    default: '50%'
  },
  // 圆环宽度
  ringWidth: {
    type: Number,
    default: 10
  },
  // 选中偏移距离
  selectedOffset: {
    type: Number,
    default: 10
  },
  // 自动播放时间间隔
  autoPlay: {
    type: Number,
    default: 3000
  },
  // 圆环中心设置
  ringCenter: {
    type: Array,
    default: () => {
      return ["35%", "50%"]
    }
  },
  // 图例设置
  legend: {
    type: Object,
    default: () => {
      return {
        top: "middle",
        right: "10%",
        orient: "vertical",
        textStyle: {
          color: "#eee"
        }
      }
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
const hoveredIndex = ref('')
const selectedIndex = ref('')
const initOptions = reactive({
  renderer: 'canvas',
  id
})
const option = ref();

let mergedOption = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || [])
})


const mergeOption = async () => {
  const { dataset } = props

  if (dataset.length > 0) {
    mergedOption.value.dataset = dataset
  }

  let theme = props.theme ?? defaultTheme
  // 设置label
  mergedOption.value.dataset[0].source.forEach((item, index) => {
    let color = ''
    if (typeof (theme.color[index]) == 'object') {
      color = theme.color[index].colorStops[0].color
    } else {
      color = theme.color[index]
    }
    item.itemStyle = {
      color: color
    }
    item.label = {
      show: true,
      color: color,
      formatter: [
        '{b|{b}}',
        `{c|{c}}{b|${mergedOption.value.unit}}`,
        '{d|{d}%}'
      ].join('\n'), // 用\n来换行
      rich: {
        b: {
          color: '#fff',
          lineHeight: 25,
          align: 'left'
        },
        c: {
          fontSize: 22,
          color: '#fff',
          textShadowColor: '#1c90a6',
          textShadowOffsetX: 0,
          textShadowOffsetY: 2,
          textShadowBlur: 5
        },
        d: {
          color: color,
          align: 'left'
        }
      }
    }
    item.labelLine = {
      lineStyle: {
        width: 1,
        color: 'rgba(255,255,255,0.7)'
      }
    }
  })
  // 设置曲面数据
  option.value = getPie3D(mergedOption.value.dataset[0].source, 0.8, 240, 22, 30, 0.6)
  // 设置文字
  option.value.series.push({
    backgroundColor: 'transparent',
    type: 'pie',
    label: {
      opacity: 1,
      fontSize: 13,
      lineHeight: 20
    },
    startAngle: -40, // 起始角度，支持范围[0, 360]。
    clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    radius: ['20%', '50%'],
    center: ['50%', '50%'],
    data: mergedOption.value.dataset[0].source,
    itemStyle: {
      opacity: 0  //这里必须是0，不然2d的图会覆盖在表面
    }
  })
}
// 鼠标滑过
const handleMouseover = (params) => {
  let isSelected
  let isHovered
  let startRatio
  let endRatio
  let k
  if (!option.value.series[params.seriesIndex].pieData) {
    return
  }
  if (!option.value.series[params.seriesIndex].pieStatus) {
    return
  }
  if (hoveredIndex.value === params.seriesIndex) {
    // 否则进行高亮及必要的取消高亮操作
  } else {
    console.log(hoveredIndex.value);
    // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
    if (hoveredIndex.value !== '') {
      // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
      isSelected = option.value.series[hoveredIndex.value].pieStatus.selected
      isHovered = false
      startRatio = option.value.series[hoveredIndex.value].pieData.startRatio
      endRatio = option.value.series[hoveredIndex.value].pieData.endRatio
      k = option.value.series[hoveredIndex.value].pieStatus.k
      // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
      option.value.series[
        hoveredIndex.value
      ].parametricEquation = getParametricEquation(
        startRatio,
        endRatio,
        isSelected,
        isHovered,
        k,
        option.value.series[hoveredIndex.value].pieData.value
      )
      option.value.series[hoveredIndex.value].pieStatus.hovered = isHovered
      // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
      hoveredIndex.value = ''
    }
    // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
    if (
      params.seriesName !== 'mouseoutSeries' &&
      params.seriesName !== 'pie2d'
    ) {
      // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
      isSelected =
        option.value.series[params.seriesIndex].pieStatus.selected
      isHovered = true
      startRatio =
        option.value.series[params.seriesIndex].pieData.startRatio
      endRatio = option.value.series[params.seriesIndex].pieData.endRatio
      k = option.value.series[params.seriesIndex].pieStatus.k
      // 对当前点击的扇形，执行高亮操作（对 option 更新）
      option.value.series[
        params.seriesIndex
      ].parametricEquation = getParametricEquation(
        startRatio,
        endRatio,
        isSelected,
        isHovered,
        k,
        option.value.series[params.seriesIndex].pieData.value + 60
      )
      option.value.series[
        params.seriesIndex
      ].pieStatus.hovered = isHovered
      // 记录上次高亮的扇形对应的系列号 seriesIndex
      hoveredIndex.value = params.seriesIndex
    }
    // 使用更新后的 option，渲染图表
    // pie7.value.setOption(option.value)
  }
}
// 鼠标移出
const handleGlobalout = () => {
  let isSelected
  let isHovered
  let startRatio
  let endRatio
  let k
  const optionName = 'options';

  if (hoveredIndex.value !== '') {
    // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
    isSelected = option.value.series[hoveredIndex.value].pieStatus.selected
    isHovered = false
    k = option.value.series[hoveredIndex.value].pieStatus.k
    startRatio = option.value.series[hoveredIndex.value].pieData.startRatio
    endRatio = option.value.series[hoveredIndex.value].pieData.endRatio
    // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
    option.value.series[
      hoveredIndex.value
    ].parametricEquation = getParametricEquation(
      startRatio,
      endRatio,
      isSelected,
      isHovered,
      k,
      option.value.series[hoveredIndex.value].pieData.value
    )
    option.value.series[hoveredIndex.value].pieStatus.hovered = isHovered
    // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
    hoveredIndex.value = ''
  }
}
// 处理点击
const handleClick = (params) => {
  if (!option.value.series[params.seriesIndex].pieData) {
    return
  }
  if (!option.value.series[params.seriesIndex].pieStatus) {
    return
  }
  const isSelected = !option.value.series[params.seriesIndex].pieStatus
    .selected
  const isHovered =
    option.value.series[params.seriesIndex].pieStatus.hovered
  const k = option.value.series[params.seriesIndex].pieStatus.k
  const startRatio =
    option.value.series[params.seriesIndex].pieData.startRatio
  const endRatio =
    option.value.series[params.seriesIndex].pieData.endRatio

  if (selectedIndex.value !== '' && selectedIndex.value !== params.seriesIndex) {
    option.value.series[
      selectedIndex.value
    ].parametricEquation = getParametricEquation(
      option.value.series[selectedIndex.value].pieData.startRatio,
      option.value.series[selectedIndex.value].pieData.endRatio,
      false,
      false,
      k,
      option.value.series[selectedIndex.value].pieData.value
    )
    option.value.series[selectedIndex.value].pieStatus.selected = false
  }

  option.value.series[
    params.seriesIndex
  ].parametricEquation = getParametricEquation(
    startRatio,
    endRatio,
    isSelected,
    isHovered,
    k,
    option.value.series[params.seriesIndex].pieData.value
  )

  option.value.series[params.seriesIndex].pieStatus.selected = isSelected
  // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
  selectedIndex.value = isSelected ? params.seriesIndex : null
}

onMounted(async () => {
  mergeOption();
})
</script>