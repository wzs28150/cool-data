<template>
  <v-chart class="chart" ref="gauge2" autoresize :init-options="initOptions" :option="mergedOption"
    :theme="theme ? theme : defaultTheme" />
</template>
<script setup>
import { use, graphic } from "echarts/core";
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
import { reactive, onMounted, computed, watch, ref } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { toRgb } from '../../../util/color';
import defaultOption from './config';
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

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
    type: Object
  },
  // 数据
  dataNum: {
    type: Number
  },
  title: {
    type: String
  },
  radius: {
    type: String,
    default: '70%'
  },
  // 主题设置
  theme: {
    type: Object
  }
})

const id = uuid()
const gauge2 = ref()
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
  const { dataNum } = props

  if (dataNum) {
    mergedOption.value.dataNum = dataNum
  }
  let theme = props.theme ?? defaultTheme
  let color = null
  if (typeof (theme.color[0]) == 'object') {
    color = theme.color[0].colorStops[0].color
  } else {
    color = theme.color[0]
  }

  addSeries()
}

const addSeries = () => {
  const { series, dataNum, radius } = mergedOption.value
  series[0] = {
    type: "gauge",
    startAngle: 210,
    endAngle: -30,
    min: 0,
    max: 1,
    splitNumber: 1000,
    borderRadius: "10px",
    roundCap: true,
    radius: "60%", // 可调整该属性修改圆环大小
    center: ["50%", "50%"],
    progress: {
      show: true,
      width: 10,

      itemStyle: {
        opacity: 1,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: "rgba(100,200,228,1)",
          },
          {
            offset: 0.5,
            color: "rgba(48,62,245,1)",
          },
          {
            offset: 1,
            color: "rgba(48,62,245,1)",
          },
        ]),
      },
    },
    itemStyle: {
      color: "#58D9F9",
      shadowColor: "rgba(0,138,255,0.45)",
      shadowBlur: 10,
      shadowOffsetX: 2,
      shadowOffsetY: 2,
    },
    axisLine: {
      // roundCap: true,
      lineStyle: {
        width: 10,
        color: [
          [
            0.2,
            {
              type: "linear",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#F5F5F5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#DADADC", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          ],
          [
            0.4,
            {
              type: "linear",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#F5F5F5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#DADADC", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          ],
          [
            0.6,
            {
              type: "linear",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#F5F5F5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#DADADC", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          ],
          [
            0.8,
            {
              type: "linear",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#F5F5F5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#DADADC", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          ],
          [
            1,
            {
              type: "linear",
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "#F5F5F5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#DADADC", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          ],
        ],
      },
    },
    pointer: {
      width: 0,
    },
    axisTick: {
      length: 12,
      lineStyle: {
        color: "auto",
        width: 0,
      },
    },
    splitLine: {
      length: 20,
      lineStyle: {
        color: "auto",
        width: 0,
      },
    },
    axisLabel: {
      color: "#464646",
      fontSize: 20,
      distance: -60,
      formatter: function (value) { },
    },
    title: {
      offsetCenter: [0, "-30%"],
      fontSize: 20,

      color: "#1678FF",
    },
    detail: {
      fontSize: 30,
      // fontFamily: "Acens",
      offsetCenter: [0, "15%"],
      valueAnimation: true,
      formatter: function (value) {
        return Math.round(value * 1000);
      },

      color: "#1678FF",
    },
    data: [
      {
        value: dataNum,
        name: "芝麻分",
      },
    ],
  }
}

onMounted(async () => {
  mergeOption();
})
</script>