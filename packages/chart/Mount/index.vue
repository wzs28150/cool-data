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
import { cloneDeep } from 'lodash';
import {
  watchDefaultProps,
  getDefaultProps
} from '@packages/util/watchDefaultProps';
use([PictorialBarChart]);
const props = defineProps({
  ...getDefaultProps(),
  shape: {
    type: String,
    default: 'triangle'
  },
  stack: {
    type: String,
    default: ''
  }
});
const { config, setSeries, delSeries } = inject('chart');
const index = shallowRef(null);
const itemLabel = shallowRef(null);
const itemConfig = ref({
  type: 'pictorialBar',
  componentType: 'mount',
  barCategoryGap: '-80%',
  symbol: 'path://M150 0 L75 200 L225 200 Z',
  itemStyle: {
    opacity: 0.8
  },
  colorBy: 'data',
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
// 监听基础参数变化
watchDefaultProps(props, config, itemConfig.value, index);
// 监听独有参数变化
watch(
  [() => props.shape, () => config.xAxis],
  ([shape, xAxis], [oldShape, oldXAxis]) => {
    if (shape != oldShape) {
      nextTick(() => {
        setShape(shape);
      });
    }
    if (xAxis != oldXAxis) {
      // 设置山峰交错不溢出
      nextTick(() => {
        config.xAxis.min = -1;
        config.xAxis.max = 4;
        config.xAxis.boundaryGap = false;
      });
    }
  },
  {
    deep: true,
    immediate: true
  }
);
// 设置山峰形状
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
    itemConfig.value.symbol = symbol[shape];
  }
};

const setMount = () => {
  setSeries(cloneDeep(itemConfig.value)).then((res) => {
    index.value = res.index;
    itemLabel.value = res.itemLabel;
  });
};

onMounted(() => {
  setMount();
});

onUnmounted(() => {
  delSeries(itemLabel.value);
});
</script>
