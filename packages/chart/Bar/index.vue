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
import { BarChart, PictorialBarChart } from 'echarts/charts';
import { cloneDeep } from 'lodash';
import {
  watchDefaultProps,
  getDefaultProps
} from '@packages/util/watchDefaultProps';
use([BarChart, PictorialBarChart]);
const props = defineProps({
  ...getDefaultProps(),
  round: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '20%'
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
const itemLabel = shallowRef(null);
const itemConfig = ref({
  type: 'bar',
  barWidth: props.width,
  showBackground: false,
  // barGap: '-100%',
  backgroundStyle: {},
  itemStyle: {}
});
watchDefaultProps(props, config, itemConfig.value, index);
watch(
  [
    () => props.round,
    () => props.stack,
    () => props.bg,
    () => props.zebra,
    () => props.width
  ],
  (
    [round, stack, bg, zebra, width],
    [oldRound, oldStack, oldBg, oldZebra, oldWidth]
  ) => {
    if (round != oldRound) {
      nextTick(() => {
        setRound(round);
      });
    }

    if (stack != oldStack) {
      nextTick(() => {
        setStack(stack);
      });
    }

    if (bg != oldBg) {
      nextTick(() => {
        setBg(bg);
      });
    }

    // if (zebra != oldZebra) {
    //   nextTick(() => {
    //     setZebra(zebra);
    //   });
    // }

    if (width != oldWidth) {
      nextTick(() => {
        setWidth(width);
      });
    }
  },
  {
    immediate: true
  }
);
// 设置圆角
const setRound = (round) => {
  let borderRadius = config.horizontal ? [0, 50, 50, 0] : [50, 50, 0, 0];
  if (index.value != null) {
    config.series[index.value].itemStyle['borderRadius'] = round
      ? borderRadius
      : null;
    config.series[index.value].backgroundStyle = round
      ? {
          borderRadius: borderRadius
        }
      : {};
  } else {
    itemConfig.value.itemStyle['borderRadius'] = round ? borderRadius : 0;
    itemConfig.value.backgroundStyle = round
      ? {
          borderRadius: borderRadius
        }
      : {};
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
// 设置背景
const setBg = (bg) => {
  if (index.value != null) {
    config.series[index.value].showBackground = bg ? bg : false;
  } else {
    itemConfig.value.showBackground = bg ? bg : false;
  }
};
// 设置斑马纹
// const setZebra = (zebra) => {
//   if (index.value != null) {
//     let zebraindex = sortedIndexBy(
//       config.series,
//       { label: 'zebra' + label.value.replace(/[^\d]/g, '') },
//       'label'
//     );
//     if (zebra) {
//       config.series[index.value] = merge(config.series[index.value], {
//         showBackground: true,
//         datasetIndex: 0,
//         barGap: '30%',
//         backgroundStyle: {
//           color: '#293656',
//           borderWidth: 5,
//           borderColor: '#293656'
//         },
//         z: -12
//       });
//       config.series[zebraindex].itemStyle.opacity = 1;
//     } else {
//       config.series[index.value] = merge(config.series[index.value], {
//         showBackground: props.bg ? true : false,
//         datasetIndex: 0,
//         barGap: '30%',
//         backgroundStyle: {},
//         z: 0
//       });
//       config.series[zebraindex].itemStyle.opacity = 0;
//     }
//   } else {
//     if (zebra) {
//       itemConfig.value = merge(cloneDeep(itemConfig.value), {
//         showBackground: true,
//         datasetIndex: 0,
//         barGap: '30%',
//         backgroundStyle: {
//           color: '#293656',
//           borderWidth: 5,
//           borderColor: '#293656'
//         },
//         z: -12,
//         zebra: true
//       });
//     }
//   }
// };

const setWidth = (width) => {
  if (index.value != null) {
    config.series[index.value].barWidth = width;
  } else {
    itemConfig.value.barWidth = width;
  }
};

const setBar = () => {
  setSeries(cloneDeep(itemConfig.value)).then((res) => {
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
