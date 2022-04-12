<template>
  <div class="scroll-ranking-bar4" :ref="thisData.ref">
    <div class="scroll-ranking-bar4-inner" :style="`height: ${height}px;`">
      <div class="row-item" v-for="(item, i) in thisData.rows" :key="item.toString() + item.scroll"
        :style="`height: ${thisData.heights[i]}px;`">
        <div class="ranking-info">
          <div class="rank acens">TOP {{ item.ranking }}</div>
          <div class="info-name" v-html="item.name" />
          <div class="ranking-column">
            <div class="inside-point" :style="`left: ${item.percent}%; background-color:${item.color}`"></div>

            <div class="inside-column"
              :style="`width: ${item.percent}%;background-image: linear-gradient(to right, rgba(255,255,255,0), ${item.color} 50%);`">
              <div class="shine" />
            </div>
          </div>
          <div class="ranking-value">{{
            mergedConfig.valueFormatter ? mergedConfig.valueFormatter(item) : item.value + ' ' +
              mergedConfig.unit
          }}
          </div>
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
console.log(defaultTheme);
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
const handleDataset = (dataset = null) => {
  if (!dataset) {
    dataset = mergedConfig.value.dataset
  }

  if (dataset.dimensions) {
    let data = [];
    let theme = props.theme ?? defaultTheme
    let colorLength = theme.color.length - 1
    console.log(theme.color);
    dataset.source.map((item, index) => {
      let color = null
      let i = index > colorLength ? index % colorLength : index
      if (typeof (theme.color[i]) == 'object') {
        color = theme.color[i].colorStops[0].color
      } else {
        color = theme.color[i]
      }
      data[index] = {
        name: item[dataset.dimensions[0]],
        value: item[dataset.dimensions[1]],
        color: color
      }
    })
    mergedConfig.value.data = data
  }
}

const calcRowsData = () => {
  let { data, rowNum, sort } = mergedConfig.value

  sort && data.sort(({ value: a }, { value: b }) => {
    if (parseInt(a) > parseInt(b)) return -1
    if (parseInt(a) < parseInt(b)) return 1
    if (parseInt(a) === parseInt(b)) return 0
  })

  const value = data.map(({ value }) => value)

  const min = Math.min(...value) || 0

  // abs of min
  const minAbs = Math.abs(min)

  const max = Math.max(...value) || 0

  // abs of max
  const maxAbs = Math.abs(max)

  const total = max + minAbs

  data = data.map((row, i) => ({ ...row, ranking: i + 1, percent: (parseInt(row.value) + minAbs) / total * 100 }))

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
  // console.log(avgHeight);
  thisData.avgHeight = avgHeight
  if (!onresize) thisData.heights = new Array(data.length).fill(avgHeight)
}
// 处理数据
const calcData = () => {
  handleDataset()
  calcRowsData()
  calcHeights()
  animation(true)
}
// 处理动画
const animation = async (start = false) => {
  let { avgHeight, animationIndex, rowsData, updater } = thisData
  const { waitTime, carousel, rowNum } = mergedConfig.value
  const rowLength = rowsData.length
  if (rowNum >= rowLength) return
  if (start) {
    await new Promise(resolve => setTimeout(resolve, waitTime))
    if (updater !== thisData.updater) return
  }
  const animationNum = carousel === 'single' ? 1 : rowNum
  let rows = rowsData.slice(animationIndex)
  rows.push(...rowsData.slice(0, animationIndex))
  thisData.rows = rows.slice(0, rowNum + 1)
  thisData.heights = new Array(rowLength).fill(avgHeight)

  await new Promise(resolve => setTimeout(resolve, 300))
  if (updater !== thisData.updater) return


  thisData.heights.splice(0, animationNum, ...new Array(animationNum).fill(0))

  animationIndex += animationNum

  const back = animationIndex - rowLength
  if (back >= 0) animationIndex = back

  thisData.animationIndex = animationIndex
  thisData.animationHandler = setTimeout(animation, waitTime - 300)
}
// 停止动画
const stopAnimation = () => {
  const { animationHandler, updater } = thisData
  thisData.updater = (updater + 1) % 999999
  if (!animationHandler) return
  clearTimeout(animationHandler)
}

const onResize = () => {
  if (!mergedConfig.value) return
  calcHeights(true)
}
onMounted(() => {
  calcData()
})
onUnmounted(() => {
  stopAnimation()
})
</script>