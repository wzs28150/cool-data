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
  axisLine: {
    type: Object,
    default: () => {
      return {
        show: false
      }
    }
  },
  splitLine: {
    type: Object,
    default: () => {
      return {
        show: true,
        lineStyle: {
          type: "dashed"
        }
      }
    }
  }
})
const instance = getCurrentInstance()
const { horizontal } = instance.parent.props
instance.parent.config[horizontal ? 'xAxis' : 'yAxis'] = {
  axisLine: props.axisLine,
  splitLine: props.splitLine
}
</script>