<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Area'
};
</script>
<script setup>
import { onMounted, inject, onUnmounted, ref, nextTick, watch } from 'vue';
import { LineChart } from 'echarts/charts';
import { MarkPointComponent } from 'echarts/components';
import { use, graphic } from 'echarts/core';
import { cloneDeep } from 'lodash';
import { toRgb } from '@packages/util/color';
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
    default: 'stack'
  },
  step: {
    type: [Boolean, String],
    default: false
  }
});

const { config, setSeries, delSeries, theme } = inject('chart');
const index = ref(null);
const itemLabel = ref(null);
const itemConfig = ref({
  type: 'line',
  name: 'line',
  stack: '',
  smooth: false,
  itemStyle: {},
  areaStyle: {},
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
// 设置平滑
const setSmooth = (smooth) => {
  if (index.value != null) {
    config.series[index.value].smooth = smooth;
  } else {
    itemConfig.value.smooth = smooth;
  }
};
// 设置虚线
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
// 设置堆叠
const setStack = (stack) => {
  if (index.value != null) {
    config.series[index.value].stack = stack;
  } else {
    itemConfig.value.stack = stack;
  }
};
// 设置时序
const setStep = (step) => {
  if (index.value != null) {
    config.series[index.value].step = step ? 'end' : false;
  } else {
    itemConfig.value.step = step ? 'end' : false;
  }
};
// 设置渐变区域色
const setColor = (index) => {
  let color = null;
  if (typeof theme.color[index] == 'object') {
    color = theme.color[index].colorStops[0].color;
  } else {
    color = theme.color[index];
  }
  config.series[index].itemStyle.color = color;
  config.series[index].areaStyle.color = new graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      { offset: 0, color: toRgb(color, 1) },
      { offset: 1, color: toRgb(color, 0) }
    ]
  );
};

const setArea = () => {
  setSeries(cloneDeep(itemConfig.value)).then((res) => {
    index.value = res.index;
    itemLabel.value = res.itemLabel;
    // 处理颜色渐变
    setColor(index.value);
  });
};

onMounted(() => {
  setArea();
});

onUnmounted(() => {
  delSeries(itemLabel.value);
});
</script>
