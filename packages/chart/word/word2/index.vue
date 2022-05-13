<template>
  <div class="ciyun-chart">
    <canvas
      id="myCanvas"
      class="chart"
    />
    <div
      id="tags"
      style="display:none"
    >
      <a
        v-for="item in mergedOption.dataset.source"
        :key="item.value"
        href="http://www.baidu.com"
        target="_blank"
      >{{ item.name }}</a>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue';
import { deepMerge, deepClone } from '../../../util/index';
import defaultOption from './config';
import easyv from '../../../theme/easyv.js';
import './tagcanvas';
const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {};
    }
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
      return easyv;
    }
  }
});

let mergedOption = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || []);
});
// let mergedOption = reactive()
// console.log(mergedOption.value);
const selectFrom = (lowerValue, upperValue) =>{
  //取值范围总数
  var choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}
const mergeOption = async () => {
  const { dataset } = props;

  if (dataset.length > 0) {
    mergedOption.value.dataset = dataset;
  }
  try {
    var i,
      et = document.getElementById('tags').childNodes;
    for (i in et) {
      // 随机颜色  textColour 设为null
      if (et[i].nodeName == 'A') {
        et[i].style.color =
          'rgb(' +
          selectFrom(50, 255) +
          ',' +
          selectFrom(50, 255) +
          ',' +
          selectFrom(50, 255) +
          ')';
      }
      et[i].nodeName == 'A' &&
        et[i].addEventListener('mouseover', function (e) {
          e.preventDefault();
        });
    }

    TagCanvas.Start('myCanvas', 'tags', {
      // 默认颜色
      textColour: null,
      // 默认移入边框
      outlineMethod: "size",
      reverse: true,
      depth: 0.5,
      maxSpeed: 0.05,
      textFont: 'Microsoft YaHei',
      textHeight: 12,
      zoomMin: 0.8,
      minSpeed: 0.01,
      dragControl: false
    });
  } catch (e) {}
};

onMounted(async () => {
  mergeOption();
});
</script>

<style lang="less" scoped>
.ciyun-chart {
  text-align: center;
  width: 100%;
  height: 100%;
}
#tags {
  width: 100%;
}
</style>
