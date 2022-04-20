<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'XAxis'
};
</script>
<script setup>
import { getCurrentInstance, watch } from 'vue';
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
  }
  // splitLine: {
  //   type: Object,
  //   default: () => {
  //     return {
  //       show: true,
  //       lineStyle: {
  //         type: 'dashed'
  //       }
  //     };
  //   }
  // }
});
const instance = getCurrentInstance();
const setYAxis = (horizontal, value) => {
  instance.parent.config[horizontal ? 'xAxis' : 'yAxis'] = {
    type: value.type,
    splitLine: {
      show: value.splitLine,
      lineStyle: {
        type: 'dashed'
      }
    },
    axisLabel: {
      show: value.axisLabel
    },
    axisLine: {
      show: value.axisLine
    }
  };
};
setYAxis(instance.parent.props.horizontal, props);
watch(
  () => instance.parent.props.horizontal,
  (newVal) => {
    setYAxis(newVal, props);
  },
  {
    deep: true
  }
);

watch(
  () => props,
  (newVal) => {
    console.log(newVal);
    setYAxis(instance.parent.props.horizontal, newVal);
  },
  {
    deep: true
  }
);
</script>
