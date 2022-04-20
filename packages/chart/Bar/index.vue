<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Bar'
}
</script>
<script setup >
import { getCurrentInstance, onUnmounted, ref, shallowRef, watch } from 'vue';
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
use([
  BarChart
])
const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  bg:{
    type: Boolean,
    default: false
  },
  stack: {
    type: String,
    default: ''
  }
})
const index = shallowRef(null)
const instance = getCurrentInstance()
const config = ref({
  type: "bar",
  barWidth: '15%',
  // barGap: '-100%',
  itemStyle: {
  }
})

watch(() => props, (newVal) => {
  if (index.value != null) {
    setRound(newVal.round)
    setStack(newVal.stack)
  }
}, {
  deep: true,
  immediate: true
})

const setRound = (round) => {
  if (index.value != null) {
    instance.parent.config.series[index.value].itemStyle = round ? {
      borderRadius: [50, 50, 0, 0]
    } : {}
  } else {
    config.value.itemStyle = round ? {
      borderRadius: [50, 50, 0, 0]
    } : {}
  }
}

const setStack = (stack) => {
  if (index.value != null) {
    instance.parent.config.series[index.value].stack = stack ? stack : ''
  } else {
    config.value.stack = stack ? stack : ''
  }
}

if (index.value == null) {
  setRound(props.round)
  setStack(props.stack)
  index.value = instance.parent.config.series.length
  instance.parent.config.series = instance.parent.config.series.concat(config.value)
}

onUnmounted(()=>{
  instance.parent.config.series.splice(index.value, 1)
})

</script>