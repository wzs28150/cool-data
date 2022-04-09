<template>
  <div class="dv-scroll-ranking-board" :ref="thisData.ref">
    <div
      class="row-item"
      v-for="(item, i) in thisData.rows"
      :key="item.toString() + item.scroll"
      :style="`height: ${heights[i]}px;`"
    >
      <div class="ranking-info">
        <div class="rank">No.{{ item.ranking }}</div>
        <div class="info-name" v-html="item.name" />
        <div
          class="ranking-value"
        >{{ mergedConfig.valueFormatter ? mergedConfig.valueFormatter(item) : item.value + mergedConfig.unit }}</div>
      </div>

      <div class="ranking-column">
        <div class="inside-column" :style="`width: ${item.percent}%;`">
          <div class="shine" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import { deepMerge, deepClone } from '../../../util';
import autoResize from '../../../util/autoResize';
import defaultConfig from './config';
import easyv from "../../../theme/easyv.js"
const defaultTheme = easyv.theme

const props = defineProps({
  option: {
    type: Object,
    default: () => ({})
  },
  dataset: {
    type: Object,
    default: () => ({})
  },
  theme: {
    type: Object
  }
})

watch(() => props.option, () => {
  stopAnimation()
  thisData.animationIndex = 0

  calcData()
})



const thisData = reactive({
  ref: 'scroll-ranking-bar',
  rowsData: [],
  rows: [],
  heights: [],
  animationIndex: 0,
  animationHandler: '',
  updater: 0
})

// 处理尺寸
const { width, height } = autoResize(thisData.ref, () => {
  onResize()
})

const mergedConfig = computed(() => {
  return deepMerge(deepClone(defaultConfig, true), props.option || [])
})
// 合并配置
const handleDataset = (dataset=null) => { 
  if(!dataset){
    dataset = mergedConfig.value.dataset
  }
  
  if (dataset.dimensions) {
    let data = [];
    dataset.source.map((item, index)=>{
      data[index] = {
        name: item[dataset.dimensions[0]],
        value: item[dataset.dimensions[1]]
      } 
    })
    mergedConfig.value.data = data
  }
}

const calcRowsData = () => {
  let { data, rowNum, sort } = mergedConfig.value

  sort && data.sort(({ value: a }, { value: b }) => {
    if (a > b) return -1
    if (a < b) return 1
    if (a === b) return 0
  })

  const value = data.map(({ value }) => value)

  const min = Math.min(...value) || 0

  // abs of min
  const minAbs = Math.abs(min)

  const max = Math.max(...value) || 0

  // abs of max
  const maxAbs = Math.abs(max)

  const total = max + minAbs

  data = data.map((row, i) => ({ ...row, ranking: i + 1, percent: (row.value + minAbs) / total * 100 }))

  const rowLength = data.length

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [...data, ...data]
  }

  data = data.map((d, i) => ({ ...d, scroll: i }))

  thisData.rowsData = data
  thisData.rows = data
}

const calcHeights = (onresize = false) => {
  // console.log(height.value);
  const { rowNum, data } = mergedConfig.value
  const avgHeight = height.value / rowNum
  thisData.avgHeight = avgHeight
  if (!onresize) thisData.heights = new Array(data.length).fill(avgHeight)
}
// 处理数据
const calcData = () => {
  handleDataset()
  calcRowsData()
  calcHeights()
}
// 处理动画
const animation = async (start = false) => { }
// 停止动画
const stopAnimation = () => { }

const onResize = () => {

}
onMounted(() => {
  calcData()
})
onUnmounted(() => {
  stopAnimation()
})
</script>