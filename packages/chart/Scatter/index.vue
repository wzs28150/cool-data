<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Scatter'
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
import { ScatterChart, EffectScatterChart } from 'echarts/charts';
import { cloneDeep } from 'lodash';
import {
  watchDefaultProps,
  getDefaultProps
} from '@packages/util/watchDefaultProps';
use([ScatterChart, EffectScatterChart]);

const props = defineProps({
  ...getDefaultProps(),
  shape: {
    type: String,
    default: 'point'
  },
  effect: {
    type: Boolean,
    default: false
  },
  effectType: {
    type: String,
    default: 'stroke'
  },
  symbolSize: {
    type: [Function, String],
    default: (data) => {
      return data[1];
    }
  }
});

const { config, setSeries, delSeries } = inject('chart');
const index = shallowRef(null);
const itemLabel = shallowRef(null);
const itemConfig = ref({
  type: 'scatter',
  rippleEffect: {
    brushType: 'stroke'
  },
  symbolSize: function (data) {
    // console.log(data);
    return data[1];
  }
});
// 监听基础参数变化
watchDefaultProps(props, config, itemConfig.value, index);
watch(
  [
    () => props.shape,
    () => props.effect,
    () => props.effectType,
    () => props.symbolSize
  ],
  (
    [shape, effect, effectType, symbolSize],
    [oldShape, oldEffect, oldEffectType, oldSymbolSize]
  ) => {
    console.log(shape, oldShape);
    if (shape != oldShape) {
      nextTick(() => {
        setShape(shape);
      });
    }
    if (effect != oldEffect) {
      nextTick(() => {
        setEffect(effect);
      });
    }
    if (effect && effectType != oldEffectType) {
      nextTick(() => {
        setEffectType(effectType);
      });
    }
    if (symbolSize != oldSymbolSize) {
    }
  },
  {
    immediate: true
  }
);
// 设置散点形状
const setShape = (shape) => {
  switch (shape) {
    case 'point':
      if (index.value != null) {
        config.series[index.value].symbolSize = 10;
      } else {
        itemConfig.value.symbolSize = 10;
      }
      break;
    case 'bubble':
      const symbolSize =
        typeof props.symbolSize == 'string'
          ? new Function('return ' + props.symbolSize)()
          : props.symbolSize;
      console.log(symbolSize);
      if (index.value != null) {
        config.series[index.value].symbolSize = symbolSize;
      } else {
        itemConfig.value.symbolSize = symbolSize;
      }
      break;
    default:
      break;
  }
};
// 设置是否涟漪
const setEffect = (effect) => {
  if (index.value != null) {
    config.series[index.value].type = effect ? 'effectScatter' : 'scatter';
  } else {
    itemConfig.value.type = effect ? 'effectScatter' : 'scatter';
  }
};
// 设置涟漪形状
const setEffectType = (effectType) => {
  if (index.value != null) {
    config.series[index.value].rippleEffect.brushType = effectType;
  } else {
    itemConfig.value.rippleEffect.brushType = effectType;
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
