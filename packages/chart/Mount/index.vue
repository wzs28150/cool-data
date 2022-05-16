<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Mount'
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
import { PictorialBarChart } from 'echarts/charts';
import { cloneDeep, merge, sortedIndexBy } from 'lodash';
use([PictorialBarChart]);
const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  shape: {
    type: String,
    default: 'triangle'
  },
  stack: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  datasetIndex: {
    type: [Number, null],
    default: 0
  }
});
const { config, setSeries, delSeries } = inject('chart');
const index = shallowRef(null);
const itemLabel = shallowRef(null);
const mountConfig = ref({
  type: 'pictorialBar',
  barCategoryGap: '-80%',
  symbol: 'path://M150 0 L75 200 L225 200 Z',
  // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
  itemStyle: {
    opacity: 0.8
  },
  colorBy: 'data',
  // barWidth: '100%',
  // symbolOffset:['15%', 0],
  emphasis: {
    itemStyle: {
      opacity: 1
    }
  },
  label: {
    show: true,
    position: 'top',
    color: '#fff'
  },
  z: 10
});

watch(
  [
    () => props.shape,
    () => props.url,
    () => props.datasetIndex,
    () => props.name
  ],
  (
    [shape, url, datasetIndex, name],
    [oldShape, oldUrl, oldDatasetIndex, oldName]
  ) => {
    if (shape != oldShape) {
      nextTick(() => {
        console.log(shape);
        setShape(shape);
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
    mountConfig.value.name = name;
  }
};
const setDatasetIndex = (datasetIndex) => {
  if (index.value != null) {
    config.series[index.value].datasetIndex = datasetIndex ? datasetIndex : 0;
  } else {
    mountConfig.value.datasetIndex = datasetIndex ? datasetIndex : 0;
  }
};
// 设置圆角
const setShape = (shape) => {
  console.log(shape);
  const symbol = {
    triangle: 'path://M150 0 L75 200 L225 200 Z',
    round: 'path://M10 100 Q 50 -100, 90 100Z',
    sharp: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z'
  };
  if (index.value != null) {
    config.series[index.value].symbol = symbol[shape];
  } else {
    mountConfig.value.symbol = symbol[shape];
  }
};

const setUrl = (url) => {
  if (index.value != null) {
    config.series[index.value].url = url ? url : '';
  } else {
    mountConfig.value.url = url ? url : '';
  }
};

const setBar = () => {
  let itemConfig = cloneDeep(mountConfig.value);
  config.xAxis.min = -1;
  config.xAxis.max = 4;
  config.xAxis.boundaryGap = false;
  setSeries(itemConfig).then((res) => {
    console.log(res);
    index.value = res.index;
    itemLabel.value = res.itemLabel;
  });
};

onMounted(() => {
  setBar();
});

onUnmounted(() => {
  delSeries(itemLabel.value);
});
</script>
