<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Line'
}
</script>
<script setup >
import { getCurrentInstance, onMounted, inject, onUnmounted, ref } from 'vue';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { union, cloneDeep, merge } from 'lodash';
use([LineChart]);
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

const { config,setSeries, delSeries } = inject('chart');
const index = ref(null)
const label = ref(null)
const instance = getCurrentInstance()
const lineConfig = ref({
  type: "line",
  name: 'line'
})
onMounted(() => {
  if (props.datasetIndex) {
    lineConfig.value.datasetIndex = props.datasetIndex
  }
  if (index.value == null) {
    setSeries(lineConfig.value).then((res) => {
      index.value = res.index;
      label.value = res.label;
    });
  }
})

onUnmounted(() => {
  // config.series.splice(index.value, 1);
  delSeries(label.value);
});
</script>