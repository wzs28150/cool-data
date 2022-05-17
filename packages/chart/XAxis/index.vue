<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'XAxis'
};
</script>
<script setup>
import { watch, inject } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: 'category'
  },
  axisLine: {
    type: Boolean,
    default: true
  },
  axisLabel: {
    type: Boolean,
    default: true
  },
  splitLine: {
    type: Boolean,
    default: false
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
const setXAxis = (horizontal, value) => {
  config[horizontal ? 'yAxis' : 'xAxis'] = {
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
setXAxis(config.horizontal, props);
// 监听chart 方向改变
watch(
  () => config.horizontal,
  (newVal) => {
    setXAxis(newVal, props);
  }
);

watch(
  () => props,
  (newVal) => {
    setXAxis(config.horizontal, newVal);
  },
  {
    deep: true
  }
);
</script>
