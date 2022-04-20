<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'XAxis'
}
</script>
<script setup >
import { getCurrentInstance, watch } from 'vue';
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
  }
})
const instance = getCurrentInstance()
const setXAxis = (horizontal, value) => {
  instance.parent.config[horizontal ? 'yAxis' : 'xAxis'] = {
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
  }
}
setXAxis(instance.parent.props.horizontal, props)
watch(() => instance.parent.props.horizontal, (newVal) => {
  setXAxis(newVal, props)
}, {
  deep: true
})

watch(
  () => props,
  (newVal) => {
    console.log(newVal);
    setXAxis(instance.parent.props.horizontal, newVal);
  },
  {
    deep: true
  }
);

</script>