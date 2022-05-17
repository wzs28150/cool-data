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
import { getDefaultProps } from '@packages/util';
use([ScatterChart]);

const props = defineProps({
  ...getDefaultProps()
});
const { config, setSeries, delSeries, throughUrl } = inject('chart');
const index = shallowRef(null);
const itemLabel = shallowRef(null);
const itemConfig = ref({
  type: 'scatter'
});

watch(
  [
    () => props.stack,
    () => props.url,
    () => props.name,
    () => props.datasetIndex
  ],
  (
    [stack, url, datasetIndex, name],
    [oldStack, oldUrl, oldDatasetIndex, oldName]
  ) => {
    if (stack != oldStack) {
      nextTick(() => {
        setStack(stack);
      });
    }

    if (url != oldUrl) {
      nextTick(() => {
        setUrl(url);
      });
    }
    if (datasetIndex != oldDatasetIndex) {
      nextTick(() => {
        setDatasetIndex(datasetIndex);
      });
    }

    if (name != oldName) {
      nextTick(() => {
        setName(name);
      });
    }
  },
  {
    immediate: true
  }
);
const setName = (name) => {
  if (index.value != null) {
    config.series[index.value].name = name;
  } else {
    itemConfig.value.name = name;
  }
};
const setDatasetIndex = (datasetIndex) => {
  if (index.value != null) {
    config.series[index.value].datasetIndex = datasetIndex ? datasetIndex : 0;
  } else {
    itemConfig.value.datasetIndex = datasetIndex ? datasetIndex : 0;
  }
};
// 设置堆叠
const setStack = (stack) => {
  if (index.value != null) {
    config.series[index.value].stack = stack ? stack : '';
  } else {
    itemConfig.value.stack = stack ? stack : '';
  }
};

const setUrl = (url) => {
  if (index.value != null) {
    config.series[index.value].url = url ? url : '';
  } else {
    itemConfig.value.url = url ? url : '';
  }
};

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
