<template>
  <div ref="root" class="chart">
    <div id="main" class="chart" />
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import {
  ref,
  onMounted,
  reactive,
  watch,
  shallowRef,
  toRefs,
  provide,
  getCurrentInstance,
  computed
} from 'vue';
import { use, init, registerTheme } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { autoresizeProps, useAutoresize } from '../../util/autoResize';
import { groupAndSort } from '../../util/index';
import {
  merge,
  cloneDeep,
  union,
  pullAllBy,
  sortedIndexBy,
  difference
} from 'lodash';
import { Theme } from '@packages';

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
]);
const root = shallowRef();
const chart = shallowRef();
const option = ref({
  title: {},
  grid: {
    left: '10%',
    right: '10%',
    top: '10%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {},
  yAxis: {},
  series: [],
  Legend: {}
});
const props = defineProps({
  horizontal: {
    type: Boolean,
    default: false
  },
  // 数据集
  dataset: {
    type: [Array, Object],
    default: () => {
      return {};
    }
  },
  // 主题设置
  theme: {
    type: Object,
    default: () => {
      return Theme.easyv;
    }
  },
  ...autoresizeProps
});

const { autoresize, theme } = toRefs(props);
registerTheme('easyv', theme.value);

const config = reactive({
  grid: {
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  title: {
    show: false
  },
  xAxis: {},
  yAxis: {},
  series: [],
  legend: {
    show: false
  },
  horizontal: false
});

const zebraConfig = ref({
  type: 'pictorialBar',
  symbol: 'rect',
  barWidth: '10%',
  itemStyle: {
    color: '#293656',
    opacity: 1
  },
  barGap: '30%',
  symbolRepeat: true,
  symbolSize: ['100%', 4],
  symbolMargin: 2,
  z: -10
});

let datasetCache = ref([]);
const setDataset = () => {
  datasetCache.value = props.dataset;
  props.dataset[0].dimensions.map((item, index) => {
    if (index > 0) {
      datasetCache.value = union(datasetCache.value, [
        {
          transform: {
            type: 'filter',
            config: {
              dimension: config.dataset[0].dimensions[index],
              '>': 0
            }
          }
        }
      ]);
    }
  });
  config.dataset = datasetCache.value;
};

const dataset = computed(()=>{
  return JSON.parse(JSON.stringify(props.dataset))
})
console.log(dataset.value);
// 监听配置变化
watch(
  () => config,
  () => {
    if (chart.value) {
      initChart();
    }
  },
  {
    deep: true
  }
);
watch(
  () => dataset.value,
  (newVal, oldVal) => {
    // if (chart.value) {
    // console.log(newVal.horizontal, oldVal.horizontal);
    // }
    console.log(newVal);
    console.log(newVal == oldVal);
    // if(newVal != oldVal){
    //   config.dataset = newVal;
    // }
    config.dataset = newVal;
    setDataset()
    // config.horizontal = newVal.horizontal;
  },
  {
    deep: true,
    immediate: true
  }
);

watch(
  () => props.horizontal,
  (newVal, oldVal) => {
    // if (chart.value) {
    // console.log(newVal.horizontal, oldVal.horizontal);
    // }
    if(newVal != oldVal){
      config.horizontal = newVal;
    }
  },
  {
    immediate: true
  }
);

// 初始化图表
const initChart = () => {
  if (chart.value) {
    chart.value.dispose();
  }
  console.log(config);
  const configs = merge(cloneDeep(option.value), config || []);
  chart.value = init(document.getElementById('main'), 'easyv');
  chart.value.setOption({
    ...configs
  });
};

let seriesCache = ref([]);

const setSeries = (itemConfig) => {
  return new Promise((resolve) => {
    // let children = instance.slots.default();
    setDataset()
    let itemIndex =
      seriesCache.value.filter((item) => {
        return item.type == itemConfig.type;
      }).length + 1;
    let label = itemConfig.type + itemIndex;
    seriesCache.value = union(seriesCache.value, [
      { ...itemConfig, label: label }
    ]);

    // 处理特殊样式添加 PictorialBar
    if (itemConfig.type == 'bar') {
      let zebraItem = cloneDeep(zebraConfig.value);
      zebraItem.itemStyle.opacity = itemConfig.zebra ? 1 : 0;
      seriesCache.value = union(seriesCache.value, [
        {
          ...zebraItem,
          datasetIndex: 3,
          label: 'zebra' + itemIndex
        }
      ]);
    }

    seriesCache.value = groupAndSort('type', 'label', seriesCache.value);

    config.series = seriesCache.value;
    let index = sortedIndexBy(seriesCache.value, { label: label }, 'label');
    // console.log(seriesCache.value);
    resolve({ index, label });
  });
};
const delSeries = (label) => {
  pullAllBy(
    config.series,
    [{ label: 'zebra' + label.replace(/[^\d]/g, '') }],
    'label'
  );
  pullAllBy(config.series, [{ label: label }], 'label');
};

provide('chart', {
  config,
  setSeries,
  delSeries
});

useAutoresize(chart, autoresize, root);

onMounted(() => {
  initChart();
});
</script>
