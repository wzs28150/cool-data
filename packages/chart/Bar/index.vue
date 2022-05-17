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
import { getDefaultProps } from '@packages/util';
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
const { config, setSeries, delSeries, throughUrl } = inject('chart');
const index = shallowRef(null);
const itemLabel = shallowRef(null);
const barConfig = ref({
  type: 'bar',
  barWidth: props.width,
  showBackground: false,
  // barGap: '-100%',
  backgroundStyle: {},
  itemStyle: {}
});

watch(
  [
    () => props.round,
    () => props.stack,
    () => props.bg,
    () => props.url,
    () => props.zebra,
    () => props.width,
    () => props.name
  ],
  (
    [round, stack, bg, url, zebra, width, datasetIndex, name],
    [
      oldRound,
      oldStack,
      oldBg,
      oldUrl,
      oldZebra,
      oldWidth,
      oldDatasetIndex,
      oldName
    ]
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
const setName = (name) => {
  if (index.value != null) {
    config.series[index.value].name = name;
  } else {
    barConfig.value.name = name;
  }
};
const setDatasetIndex = (datasetIndex) => {
  if (index.value != null) {
    config.series[index.value].datasetIndex = datasetIndex ? datasetIndex : 0;
  } else {
    barConfig.value.datasetIndex = datasetIndex ? datasetIndex : 0;
  }
};
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
    barConfig.value.itemStyle['borderRadius'] = round ? borderRadius : 0;
    barConfig.value.backgroundStyle = round
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
    barConfig.value.stack = stack ? stack : '';
  }
};
// 设置背景
const setBg = (bg) => {
  if (index.value != null) {
    config.series[index.value].showBackground = bg ? bg : false;
  } else {
    barConfig.value.showBackground = bg ? bg : false;
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
//       barConfig.value = merge(cloneDeep(barConfig.value), {
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

const setUrl = (url) => {
  if (index.value != null) {
    config.series[index.value].url = url ? url : '';
  } else {
    barConfig.value.url = url ? url : '';
  }
};

const setWidth = (width) => {
  if (index.value != null) {
    config.series[index.value].barWidth = width;
  } else {
    barConfig.value.barWidth = width;
  }
};

const setBar = () => {
  let itemConfig = cloneDeep(barConfig.value);
  setSeries(itemConfig).then((res) => {
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
