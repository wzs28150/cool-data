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

watch(()=>props.dataNum, () => {
  mergeOption()
})

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
  addInsetProgress(color)
  addInsetShadow(color)
  addInsetCircle(color)
  addOutsideScale(color)
  addInsetSmallProgress(color)
  centerCircle()
}
// 内部进度条
const addInsetProgress = (color) => {
  let { series, dataNum } = mergedOption.value
  let { radius } = props
  series[0] = {
    type: "gauge",
    // center: ['20%', '50%'],
    radius: radius,

    splitNumber: 10,
    axisLine: {
      lineStyle: {
        color: [
          [dataNum / 100, color],
          [1, color],
        ],
        width: 2,
      },
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      color: "#ffffff",
    },
    detail: {
      show: false,
      formatter: function (value) {
        if (value !== 0) {
          var num = Math.round(value);
          return parseInt(num).toFixed(0) + "%";
        } else {
          return 0;
        }
      },
      offsetCenter: [0, 67],
      padding: [0, 0, 0, 0],
      fontSize: 18,
      fontWeight: "700",
      color: "#ffffff",
    },
    title: {
      //标题
      show: false,
    },
    data: [
      {
        name: "",
        value: dataNum,
      },
    ],
    pointer: {
      show: true,
      length: parseInt(radius) * 0.95 + "%",
      radius: "20%",
      width: 3, //指针粗细
    },
    animationDuration: 4000,
  }
}
// 加载内部阴影
const addInsetShadow = (color) => {
  let { series, dataNum } = mergedOption.value
  let { radius } = props
  series[1] = {
    type: "gauge",
    radius: parseInt(radius) * 0.76 + "%",
    splitNumber: 10,
    axisLine: {
      lineStyle: {
        color: [
          [
            dataNum / 100,
            new graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: toRgb(color, 0),
              },
              {
                offset: 0.5,
                color: toRgb(color, 0.2),
              },
              {
                offset: 1,
                color: toRgb(color, 1),
              },
            ]),
          ],
          [1, toRgb(color, 0)],
        ],
        width: parseInt(radius) * 0.4,
      },
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      show: false,
    },
    animationDuration: 4000,
  }
}
// 加载内部小圆扇形阴影外边
const addInsetCircle = (color) => {
  let { series, dataNum } = mergedOption.value
  let { radius } = props
  series[2] = {
    type: "gauge",
    radius: parseInt(radius) * 0.8 + "%",
    splitNumber: 10,
    axisLine: {
      lineStyle: {
        color: [
          [dataNum / 100, color],
          [1, "rgba(0,0,0,0)"],
        ],
        width: 5,
      },
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      show: false,
    },
  }
}
// 加载外部刻度
const addOutsideScale = (color) => {
  let { series } = mergedOption.value
  let { radius } = props
  series[3] = {
    type: "gauge",
    radius: parseInt(radius) * 0.967 + "%",
    min: 0, //最小刻度
    max: 100, //最大刻度
    splitNumber: 5, //刻度数量
    startAngle: 225,
    endAngle: -45,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1, "rgba(0,0,0,0)"]],
      },
    }, //仪表盘轴线
    axisLabel: {
      show: true,
      color: "#ffffff",
      fontSize: parseInt(radius) * 0.2,
      fontFamily: "digital-7",
      // fontWeight: "bold",
      // position: "top",
      distance: -25,
      formatter: function (v) {
        switch (v + "") {
          case "0":
            return "0";
          case "10":
            return "10";
          case "20":
            return "20";
          case "30":
            return "30";
          case "40":
            return "40";
          case "50":
            return "50";
          case "60":
            return "60";
          case "70":
            return "70";
          case "80":
            return "80";
          case "90":
            return "90";
          case "100":
            return "100";
        }
      },
    }, //刻度标签。
    axisTick: {
      show: true,
      splitNumber: 3,
      lineStyle: {
        color: color, //用颜色渐变函数不起作用
        width: 1,
      },
      length: -6,
    }, //刻度样式
    splitLine: {
      show: true,
      length: -12,
      lineStyle: {
        color: toRgb(color, 0.3), //用颜色渐变函数不起作用
      },
    }, //分隔线样式
    detail: {
      show: false,
    },
  }
}
// 加载内部进度条,扇形阴影内边
const addInsetSmallProgress = (color) => {
  let { series, dataNum } = mergedOption.value
  let { title, radius } = props
  series[4] = {
    type: "gauge",
    // center: ['20%', '50%'],
    radius: parseInt(radius) * 0.483 + "%",

    splitNumber: 10,
    axisLine: {
      lineStyle: {
        color: [
          [dataNum / 100, color],
          [1, color],
        ],
        width: 1,
      },
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      color: "#ffffff",
    },
    detail: {
      formatter: function (value) {
        if (value !== 0) {
          var num = Math.round(value);
          return parseInt(num).toFixed(0) + "%";
        } else {
          return 0;
        }
      },
      offsetCenter: [0, parseInt(radius) * 0.65],
      padding: [0, 0, 0, 0],
      fontSize: parseInt(radius) * 0.25,
      color: "#ffffff",
      fontFamily: "digital-7",
    },
    title: {
      //标题
      show: true,
      offsetCenter: [0, parseInt(radius) * 0.35], // x, y，单位px
      color: "#fff",
      fontSize: parseInt(radius) * 0.15, //表盘上的标题文字大小
      fontWeight: 400,
      fontFamily: "MicrosoftYaHei",
    },
    data: [
      {
        name: title ? title : "项目进度",
        value: dataNum
      },
    ],
    pointer: {
      show: true,
      length: "70%",
      radius: "20%",
      width: 3, //指针粗细
    },
    animationDuration: 4000,
  }
}
//指针上的圆
const centerCircle = () => {
  let { series } = mergedOption.value
  series[5] = {
    type: "pie",
    tooltip: {
      show: false,
    },
    legendHoverLink: false,
    radius: ["0%", "4%"],
    center: ["50%", "50%"],
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    data: [
      {
        value: 120,
        itemStyle: {
          color: "#ffffff",
        },
      },
    ],
  }
}

onMounted(async () => {
  mergeOption();
})
</script>