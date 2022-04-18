<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'XAxis'
}
</script>
<script setup >
import { getCurrentInstance, onMounted } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  datasetIndex: {
    type: [Number, null],
    default: null
  }
})
const instance = getCurrentInstance()
const lineConfig = {
  type: "line"
}
onMounted(() => {
  if (props.datasetIndex) {
    lineConfig.datasetIndex = props.datasetIndex
  }
  instance.parent.config.series.push(lineConfig)
})
</script>