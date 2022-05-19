<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Line'
};
</script>
<script setup>
import { onMounted, inject, onUnmounted, ref, nextTick, watch } from 'vue';
import { LineChart } from 'echarts/charts';
import { MarkPointComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { cloneDeep } from 'lodash';
import {
  watchDefaultProps,
  getDefaultProps
} from '@packages/util/watchDefaultProps';
use([LineChart, MarkPointComponent]);
const props = defineProps({
  ...getDefaultProps(),
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
  },
  step: {
    type: [Boolean, String],
    default: false
  }
});

const { config, setSeries, delSeries } = inject('chart');
const index = ref(null);
const itemLabel = ref(null);
const itemConfig = ref({
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
// 监听基础参数变化
watchDefaultProps(props, config, itemConfig.value, index);
// 监听独有参数变化
watch(
  [() => props.smooth, () => props.dashed, () => props.stack, () => props.step],
  (
    [smooth, dashed, stack, step],
    [oldSmooth, oldDashed, oldStack, oldStep]
  ) => {
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
    if (step != oldStep) {
      nextTick(() => {
        setStep(step);
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
    itemConfig.value.smooth = smooth;
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
    itemConfig.value.smooth = dashed
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
    itemConfig.value.stack = stack;
  }
};

const setStep = (step) => {
  if (index.value != null) {
    config.series[index.value].step = step ? 'end' : false;
  } else {
    itemConfig.value.step = step ? 'end' : false;
  }
};

const setLine = () => {
  setSeries(cloneDeep(itemConfig.value)).then((res) => {
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
