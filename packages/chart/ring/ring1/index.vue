<template>
  <v-chart
    ref="ring1"
    class="chart"
    autoresize
    :init-options="initOptions"
    :option="mergedOption"
    :theme="theme"
    @selectchanged="handleSelect"
  />
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
import VChart from "vue-echarts";
import { reactive, onMounted, computed, ref,onBeforeUnmount } from "vue";
import { uuid, deepMerge, deepClone } from '../../../util/index'
import defaultOption from './config';
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
const total = ref(0)
const title = ref('')
const ring1 = ref(null)
const actionTimer = ref()
const initOptions = reactive({
  renderer: 'canvas',
  id
})

let mergedOption = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || [])
})
// let mergedOption = reactive()
// console.log(mergedOption.value);
// 渲染百分比
const renderPercentItem = (params, api) => {
  const valOnRadian = api.value(1);
  return {
    type: 'text',
    extra: {
      valOnRadian: valOnRadian,
      transition: 'valOnRadian',
      enterFrom: { valOnRadian: 0 }
    },
    style: {
      text: makeText(valOnRadian),
      fontSize: 14,
      fontWeight: 700,
      x: params.coordSys.cx,
      y: params.coordSys.cy + 15,
      fill: '#eee',
      align: 'center',
      verticalAlign: 'middle',
      enterFrom: { opacity: 0 }
    },
    during: function (apiDuring) {
      apiDuring.setStyle(
        'text',
        makeText(apiDuring.getExtra('valOnRadian'))
      );
    }
  }
}

// 渲染标题
const renderTitleItem = (params) => {
  return {
    type: 'text',
    style: {
      text: title.value,
      fontSize: 16,
      fontWeight: 700,
      x: params.coordSys.cx,
      y: params.coordSys.cy - 15,
      fill: '#eee',
      align: 'center',
      verticalAlign: 'middle',
      enterFrom: { opacity: 0 }
    }
  }
}

const makeText = (valOnRadian) => {
  return ((valOnRadian / total.value) * 100).toFixed(0) + '%';
}

const mergeOption = async () => {
  const { dataset } = props

  if (dataset.length > 0) {
    mergedOption.value.dataset = dataset
  }
  // 设置圆环尺寸
  mergedOption.value.series[0].radius = [props.radius, (parseInt(props.radius) + props.ringWidth) + '%']
  // 设置圆环位置
  mergedOption.value.series[0].center = props.ringCenter
  mergedOption.value.polar.center = props.ringCenter
  // 设置选中偏移量
  mergedOption.value.series[0].selectedOffset = props.selectedOffset
  // 计算总数
  mergedOption.value.dataset[0].source.map((it) => {
    total.value = typeof (it.value) == 'number' ? it.value + total.value : Number(it.value) + total.value
  })
  // 设置初始标题
  title.value = mergedOption.value.dataset[0].source[0].name
  setText(0)
}

const setText = (index) => {
  mergedOption.value.angleAxis = {
    type: 'value',
    startAngle: 0,
    show: false,
    min: 0,
    max: total.value
  }
  mergedOption.value.series[1] = {
    type: 'custom',
    coordinateSystem: 'polar',
    renderItem: renderPercentItem,
    data: [[1, Number(mergedOption.value.dataset[0].source[index].value)]]
  }
  mergedOption.value.series[2] = {
    type: 'custom',
    coordinateSystem: 'polar',
    renderItem: renderTitleItem
  }
}

const startActions = () => {
  let dataIndex = -1;
  if (!ring1.value) {
    return;
  }
  const dataLen = mergedOption.value.dataset[0].source.length;
  actionTimer.value = setInterval(() => {
    ring1.value.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex
    });
    dataIndex = (dataIndex + 1) % dataLen;
    // 设置选中
    ring1.value.dispatchAction({
      type: "select",
      seriesIndex: 0,
      dataIndex
    });
  }, props.autoPlay);
}
const stopActions = () => {
  clearInterval(actionTimer.value);
}
const handleSelect = ({ selected }) => {
  // 选中之后更新中间的标题及百分比
  const index = selected[0].dataIndex[0]
  title.value = mergedOption.value.dataset[0].source[index].name
  setText(index)
  ring1.value.setOption(mergedOption.value)
}

onMounted(async () => {
  mergeOption();
  stopActions();
  startActions()
})

onBeforeUnmount(()=>{
  stopActions();
})
</script>