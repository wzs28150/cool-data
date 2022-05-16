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
  }
});

const { config, setSeries, delSeries } = inject('chart');
const index = ref(null);
const label = ref(null);
const instance = getCurrentInstance();
const lineConfig = ref({
  type: 'line',
  name: 'line',
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
  [() => props.smooth, ()=> props.dashed],
  ([smooth, dashed], [oldSmooth, oldDashed]) => {
    if (smooth != oldSmooth) {
      nextTick(() => {
        setSmooth(smooth);
      });
    }
    if(dashed != oldDashed){
      nextTick(() => {
        setDashed(smooth);
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
    config.series[index.value].lineStyle = dashed ? {
        type: 'dashed'
    }: {};
  } else {
    lineConfig.value.smooth = smooth;
  }
}

const setLine = () => {
  let itemConfig = cloneDeep(lineConfig.value);
  setSeries(itemConfig).then((res) => {
    index.value = res.index;
    label.value = res.label;
  });
};

onMounted(() => {
  setLine();
});

onUnmounted(() => {
  // config.series.splice(index.value, 1);
  delSeries(label.value);
});
</script>
