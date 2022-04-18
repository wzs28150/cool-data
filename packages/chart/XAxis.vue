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
  type: {
    type: String,
    default: 'category'
  },
  splitLine: {
    type: Object,
    default:()=>{
      return {
        show: false
      }
    }
  }
})
const instance = getCurrentInstance()
const { horizontal } = instance.parent.props
instance.parent.config[horizontal ? 'yAxis' : 'xAxis'] = {
  type: props.type,
  splitLine: props.splitLine
}
</script>