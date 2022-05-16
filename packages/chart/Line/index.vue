<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Line'
};
</script>
<script setup>
import {
  getCurrentInstance,
  onMounted,
  inject,
  onUnmounted,
  ref,
  nextTick,
  watch
} from 'vue';
import { LineChart } from 'echarts/charts';
import { MarkPointComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { union, cloneDeep, merge } from 'lodash';
use([LineChart, MarkPointComponent]);
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
  },
  smooth: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  },
  stack: {
    type: String,
    default: ''
  }
});

const { config, setSeries, delSeries } = inject('chart');
const index = ref(null);
const itemLabel = ref(null);
const lineConfig = ref({
  type: 'line',
  name: 'line',
  stack: '',
  smooth: false,
  markPoint: {
    data: [
      {
        type: 'max'
      }
    ],
    symbol: 'circle',
    symbolSize: 10,
    label: {
      position: 'top'
    }
  }
});
watch(
  [() => props.smooth, () => props.dashed, () => props.stack],
  ([smooth, dashed, stack], [oldSmooth, oldDashed, oldStack]) => {
    if (smooth != oldSmooth) {
      nextTick(() => {
        setSmooth(smooth);
      });
    }
    if (dashed != oldDashed) {
      nextTick(() => {
        setDashed(dashed);
      });
    }
    if (stack != oldStack) {
      nextTick(() => {
        setStack(stack);
      });
    }
  },
  {
    immediate: true
  }
);

const setSmooth = (smooth) => {
  if (index.value != null) {
    config.series[index.value].smooth = smooth;
  } else {
    lineConfig.value.smooth = smooth;
  }
};

const setDashed = (dashed) => {
  if (index.value != null) {
    config.series[index.value].lineStyle = dashed
      ? {
          type: 'dashed'
        }
      : {
          type: 'solid'
        };
  } else {
    lineConfig.value.smooth = dashed
      ? {
          type: 'dashed'
        }
      : {
          type: 'solid'
        };
  }
};
const setStack = (stack) => {
  if (index.value != null) {
    config.series[index.value].stack = stack;
  } else {
    lineConfig.value.stack = stack;
  }
};
const setLine = () => {
  let itemConfig = cloneDeep(lineConfig.value);
  setSeries(itemConfig).then((res) => {
    index.value = res.index;
    itemLabel.value = res.itemLabel;
  });
};

onMounted(() => {
  setLine();
});

onUnmounted(() => {
  // config.series.splice(index.value, 1);
  delSeries(itemLabel.value);
});
</script>
