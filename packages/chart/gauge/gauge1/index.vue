<template>
  <v-chart class="chart" ref="gauge1" autoresize :init-options="initOptions" :option="mergedOption"
    :theme="theme ? theme : defaultTheme" />
</template>
<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, CustomChart, GaugeChart } from "echarts/charts";
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
import defaultOption from './config';
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

use([
  CanvasRenderer,
  PieChart,
  CustomChart,
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
  }
})

const id = uuid()
const gauge1 = ref()
const initOptions = reactive({
  renderer: 'canvas',
  id
})

const angle = ref(0)

let mergedOption = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || [])
})

watch(angle, (news) => {
  gauge1.value.setOption(mergedOption.value)
})
// let mergedOption = reactive()
// console.log(mergedOption.value);
const mergeOption = async () => {
  const { dataset } = props

  // if (dataset.length > 0) {
  //   mergedOption.value.dataset = dataset
  // }

  // const dataLen = mergedOption.value.dataset.dimensions.length
  // const seriesItem = mergedOption.value.series[0]
  // for (let i = 0; i < dataLen - 1; i++) {
  //   mergedOption.value.series[i] = seriesItem
  // }
  addRing()
  addTitle()
}

const addTitle = () => {
  const { title, value } = mergedOption.value
  title.text = "{a|" + value + "}{c|%}"
}

const addRing = () => {
  let { value } = mergedOption.value
  mergedOption.value.series = []
  mergedOption.value.series = [
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
            startAngle: ((0 + angle.value) * Math.PI) / 180,
            endAngle: ((90 + angle.value) * Math.PI) / 180,
          },
          style: {
            stroke: "#0CD3DB",
            fill: "transparent",
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.6,
            startAngle: ((180 + angle.value) * Math.PI) / 180,
            endAngle: ((270 + angle.value) * Math.PI) / 180,
          },
          style: {
            stroke: "#0CD3DB",
            fill: "transparent",
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
            startAngle: ((270 - angle.value) * Math.PI) / 180,
            endAngle: ((40 - angle.value) * Math.PI) / 180,
          },
          style: {
            stroke: "#0CD3DB",
            fill: "transparent",
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65,
            startAngle: ((90 - angle.value) * Math.PI) / 180,
            endAngle: ((220 - angle.value) * Math.PI) / 180,
          },
          style: {
            stroke: "#0CD3DB",
            fill: "transparent",
            lineWidth: 1.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
        let point = getCirlPoint(x0, y0, r, 90 - angle.value);
        return {
          type: "circle",
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4,
          },
          style: {
            stroke: "#0CD3DB", //粉
            fill: "#0CD3DB",
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5", //绿点
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.65;
        let point = getCirlPoint(x0, y0, r, 270 - angle.value);
        return {
          type: "circle",
          shape: {
            cx: point.x,
            cy: point.y,
            r: 4,
          },
          style: {
            stroke: "#0CD3DB", //绿
            fill: "#0CD3DB",
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "吃猪肉频率",
      type: "pie",
      radius: ["58%", "45%"],
      silent: true,
      clockwise: true,
      startAngle: 90,
      z: 0,
      zlevel: 0,
      label: {
        position: "center",
      },
      data: [
        {
          value: value,
          name: "",
          itemStyle: {
            color: {
              // 完成的圆环的颜色
              colorStops: [
                {
                  offset: 0,
                  color: "#4FADFD", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#28E8FA", // 100% 处的颜色
                },
              ],
            },
          },
        },
        {
          value: 100 - mergedOption.value.value,
          name: "",
          label: {
            show: false,
          },
          itemStyle: {
            color: "#173164",
          },
        },
      ],
    },
    {
      name: "",
      type: "gauge",
      radius: "58%",
      center: ["50%", "50%"],
      startAngle: 0,
      endAngle: 359.9,
      splitNumber: 8,
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 60,
        lineStyle: {
          width: 5,
          color: "#061740",
        },
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          opacity: 0,
        },
      },
      detail: {
        show: false,
      },
      data: [
        {
          value: 0,
          name: "",
        },
      ],
    },
  ]
}

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
const getCirlPoint = (x0, y0, r, angle) => {
  let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
  let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
  return {
    x: x1,
    y: y1,
  };
}

onMounted(async () => {
  mergeOption();
  // setInterval(function () {
  //   //用setInterval做动画感觉有问题
  //   // let {angle} = mergedOption.value
  //   angle.value = angle.value + 3;
  // }, 100);
})
</script>