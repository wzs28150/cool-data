<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Bar'
};
</script>
<script setup>
import {
  onUnmounted,
  ref,
  shallowRef,
  watch,
  inject,
  onMounted,
  nextTick
} from 'vue';
import { use } from 'echarts/core';
import { ScatterChart } from 'echarts/charts';
import { cloneDeep } from 'lodash';
import {
  watchDefaultProps,
  getDefaultProps
} from '@packages/util/watchDefaultProps';
use([ScatterChart]);

const props = defineProps({
  ...getDefaultProps()
});
const { config, setSeries, delSeries } = inject('chart');
const index = shallowRef(null);
const itemLabel = shallowRef(null);
const itemConfig = ref({
  type: 'scatter'
});
watchDefaultProps(props, config, itemConfig.value, index);
const setScatter = () => {
  setSeries(cloneDeep(itemConfig.value)).then((res) => {
    index.value = res.index;
    itemLabel.value = res.itemLabel;
  });
};

onMounted(() => {
  setScatter();
});

onUnmounted(() => {
  delSeries(itemLabel.value);
});
</script>
