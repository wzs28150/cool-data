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
  computed
} from 'vue';
import { useRouter } from 'vue-router';
import { use, init, registerTheme } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { autoresizeProps, useAutoresize } from '../../util/autoResize';
import { groupAndSort, pathTest } from '../../util/index';
import { merge, cloneDeep, union, pullAllBy, sortedIndexBy } from 'lodash';
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
const router = useRouter();
// console.log(router);
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
  through: {
    type: String,
    default: 'none'
  },
  throughUrl: {
    type: [String, Array, Object],
    default: ''
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
let throughUrl = ref(JSON.parse(JSON.stringify(props.throughUrl)));
// 设置主题
const setTheme = (horizontal) => {
  // 如果有设置方向
  if (horizontal) {
    theme.value.color.map((item, i) => {
      if (typeof item == 'object') {
        theme.value.color[i].x = 1;
        theme.value.color[i].y = 0;
      }
    });
  } else {
    theme.value.color.map((item, i) => {
      if (typeof item == 'object') {
        theme.value.color[i].x = 0;
        theme.value.color[i].y = 1;
      }
    });
  }
  registerTheme('easyv', theme.value);
};
// 设置数据集
const setDataset = () => {
  datasetCache.value = props.dataset;
  // props.dataset[0].dimensions.map((item, index) => {
  //   if (index > 0) {
  //     // datasetCache.value = union(datasetCache.value, [
  //     //   {
  //     //     transform: {
  //     //       type: 'filter',
  //     //       config: {
  //     //         dimension: config.dataset[0].dimensions[index],
  //     //         '>': 0
  //     //       }
  //     //     }
  //     //   }
  //     // ]);
  //   }
  // });
  config.dataset = datasetCache.value;
};

// const dataset = computed(() => {
//   return JSON.parse(JSON.stringify(props.dataset));
// });
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
  [() => props.dataset, () => props.horizontal, () => props.through],
  ([dataset, horizontal, through], [oldDataset, oldHorizontal, oldThrough]) => {
    if (dataset != oldDataset) {
      config.dataset = dataset;
      setDataset();
    }
    if (horizontal != oldHorizontal) {
      config.horizontal = horizontal;
      setTheme(horizontal);
    }
    if (through != oldThrough) {
      switch (through) {
        case 'whole':
          throughUrl.value = '';
          break;
        case 'data':
          throughUrl.value = {};
          break;
        case 'series':
          throughUrl.value = {};
          break;
        default:
          break;
      }
    }
  },
  {
    deep: true,
    immediate: true
  }
);

// 初始化图表
const initChart = () => {
  if (chart.value) {
    chart.value.dispose();
  }
  // console.log(config);
  const configs = merge(cloneDeep(option.value), config || []);
  chart.value = init(document.getElementById('main'), 'easyv');
  chart.value.setOption({
    ...configs
  });

  chart.value.on('legendselectchanged', function (params) {
    event.stopPropagation();
  });

  chart.value.on('click', (params) => {
    switch (props.through) {
      case 'whole':
        throughUrl.value = props.throughUrl;
        break;
      case 'data':
        throughUrl.value = props.throughUrl[params.name];
        break;
      case 'series':
        throughUrl.value = config.series[params.seriesIndex].url;
        break;
      default:
        break;
    }
    if (throughUrl.value) {
      console.log(pathTest(throughUrl.value));
      pathTest(throughUrl.value)
        ? window.open(throughUrl.value)
        : window.open(
            window.location.origin + import.meta.env.BASE_URL + throughUrl.value
          );
    }

    // window.open(window.location.origin + import.meta.env.BASE_URL + pathArr[params.seriesName])
  });
};

let seriesCache = ref([]);

const setSeries = (itemConfig) => {
  return new Promise((resolve) => {
    // let children = instance.slots.default();
    let itemIndex =
      seriesCache.value.filter((item) => {
        return item.type == itemConfig.type;
      }).length + 1;
    let label = itemConfig.type + itemIndex;
    seriesCache.value = union(seriesCache.value, [
      { ...itemConfig, label: label }
    ]);

    // 处理特殊样式添加 PictorialBar
    // if (itemConfig.type == 'bar') {
    //   let zebraItem = cloneDeep(zebraConfig.value);
    //   zebraItem.itemStyle.opacity = itemConfig.zebra ? 1 : 0;
    //   seriesCache.value = union(seriesCache.value, [
    //     {
    //       ...zebraItem,
    //       datasetIndex: 3,
    //       label: 'zebra' + itemIndex
    //     }
    //   ]);
    // }
    // 分组排序
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
  // setTheme();
  initChart();
});
</script>
