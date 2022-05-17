<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'YAxis'
};
</script>
<script setup>
import { watch, inject } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: 'value'
  },
  axisLine: {
    type: Boolean,
    default: false
  },
  axisLabel: {
    type: Boolean,
    default: true
  },
  splitLine: {
    type: Boolean,
    default: true
  },
  scale: {
    type: Boolean,
    default: false
  },
  formatter: {
    type: String,
    default: ''
  }
});

const { config } = inject('chart');

const setYAxis = (horizontal, value) => {
  config[horizontal ? 'xAxis' : 'yAxis'] = {
    type: value.type,
    splitLine: {
      show: value.splitLine,
      lineStyle: {
        type: 'dashed'
      }
    },
    scale: value.scale,
    axisLabel: {
      show: value.axisLabel,
      formatter: value.formatter ? value.formatter : '{value}'
    },
    axisLine: {
      show: value.axisLine
    }
  };
};
// 初始设置
setYAxis(config.horizontal, props);

// 监听chart 方向改变
watch(
  () => config.horizontal,
  (newVal) => {
    setYAxis(newVal, props);
  }
);

watch(
  () => props,
  (newVal) => {
    setYAxis(config.horizontal, newVal);
  },
  {
    deep: true
  }
);
</script>
