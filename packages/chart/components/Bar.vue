<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'XAxis'
}
</script>
<script setup >
import { getCurrentInstance } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})
const instance = getCurrentInstance()
instance.parent.config.series.push({
  type: "bar",
  // stack: 'one',
  barWidth: 10
  // barGap: '-100%',
  // itemStyle: {
  //   borderRadius: [7, 7, 0, 0]
  // }
})
</script>