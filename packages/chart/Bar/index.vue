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
  nextTick,
  onMounted,
  getCurrentInstance
} from 'vue';
import { use } from 'echarts/core';
import { BarChart, PictorialBarChart } from 'echarts/charts';
import { union, cloneDeep, merge, sortedIndexBy } from 'lodash';
use([BarChart, PictorialBarChart]);
const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  bg: {
    type: Boolean,
    default: false
  },
  zebra: {
    type: Boolean,
    default: false
  },
  stack: {
    type: String,
    default: ''
  }
});
const { config, setSeries, delSeries } = inject('chart');
const index = shallowRef(null);
const label = shallowRef(null);
const barConfig = ref({
  type: 'bar',
  barWidth: '10%',
  showBackground: false,
  // barGap: '-100%',
  backgroundStyle: {},
  itemStyle: {}
});

// const zebraConfig = ref({
//   type: 'pictorialBar',
//   symbol: 'rect',
//   barWidth: '20%',
//   itemStyle: {
//     color: '#293656'
//   },
//   barGap: '30%',
//   symbolRepeat: true,
//   symbolSize: ['100%', 4],
//   symbolMargin: 2,
//   z: -10
// });

watch(
  () => props.round,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
    if (index.value != null) {
      if (newVal != oldVal) {
        setRound(newVal);
      }
    }
  }
);
watch(
  () => props.stack,
  (newVal, oldVal) => {
    if (newVal != oldVal) {
      setStack(newVal);
    }
  }
);
watch(
  () => props.bg,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
    if (index.value != null) {
      if (newVal != oldVal) {
        setBg(newVal);
      }
    }
  }
);

watch(
  () => props.zebra,
  (newVal, oldVal) => {
    if (index.value != null) {
      if (newVal != oldVal) {
        setZebra(newVal);
      }
    }
  }
);
// 设置圆角
const setRound = (round) => {
  if (index.value != null) {
    config.series[index.value].itemStyle = round
      ? {
          borderRadius: [50, 50, 0, 0]
        }
      : {};
    config.series[index.value].backgroundStyle = round
      ? {
          borderRadius: [50, 50, 0, 0]
        }
      : {};
  } else {
    barConfig.value.itemStyle = round
      ? {
          borderRadius: [50, 50, 0, 0]
        }
      : {};
    barConfig.value.backgroundStyle = round
      ? {
          borderRadius: [50, 50, 0, 0]
        }
      : {};
  }
};
// 设置堆叠
const setStack = (stack) => {
  if (index.value != null) {
    config.series[index.value].stack = stack ? stack : '';
  } else {
    barConfig.value.stack = stack ? stack : '';
  }
};
// 设置背景
const setBg = (bg) => {
  console.log(2);
  if (index.value != null) {
    config.series[index.value].showBackground = bg ? bg : false;
  } else {
    barConfig.value.showBackground = bg ? bg : false;
  }
};
// 设置斑马纹
const setZebra = (zebra) => {
  if (index.value != null) {
    let zebraindex = sortedIndexBy(
      config.series,
      { label: 'zebra' + label.value.replace(/[^\d]/g, '') },
      'label'
    );
    if (zebra) {
      config.series[index.value] = merge(config.series[index.value], {
        showBackground: true,
        datasetIndex: 0,
        barGap: '30%',
        backgroundStyle: {
          color: '#293656',
          borderWidth: 5,
          borderColor: '#293656'
        },
        z: -12
      });
      config.series[zebraindex].itemStyle.opacity = 1;
    } else {
      config.series[index.value] = merge(config.series[index.value], {
        showBackground: props.bg ? true : false,
        datasetIndex: 0,
        barGap: '30%',
        backgroundStyle: {},
        z: 0
      });
      config.series[zebraindex].itemStyle.opacity = 0;
    }
  } else {
    if (zebra) {
      barConfig.value = merge(cloneDeep(barConfig.value), {
        showBackground: true,
        datasetIndex: 0,
        barGap: '30%',
        backgroundStyle: {
          color: '#293656',
          borderWidth: 5,
          borderColor: '#293656'
        },
        z: -12,
        zebra: true
      });
    }
  }
};

const setBar = () => {
  setRound(props.round);
  setBg(props.bg);
  setStack(props.stack);
  setZebra(props.zebra);
  let itemConfig = cloneDeep(barConfig.value);
  setSeries(itemConfig).then((res) => {
    index.value = res.index;
    label.value = res.label;
  });
};

onMounted(() => {
  setBar();
});

onUnmounted(() => {
  delSeries(label.value);
});
</script>
