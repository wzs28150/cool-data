<template>
  <div class="scroll-table" :ref="thisData.ref">
    <div
      class="header"
      v-if="thisData.header.length && mergedConfig"
      :style="`background-color: ${mergedConfig.headerBGC};`"
    >
      <div
        class="header-item"
        v-for="(headerItem, i) in thisData.header"
        :key="`${headerItem}${i}`"
        :style="`
          height: ${mergedConfig.headerHeight}px;
          line-height: ${mergedConfig.headerHeight}px;
          width: ${thisData.widths[i]}px;
        `"
        :align="thisData.aligns[i]"
        v-html="headerItem"
      />
    </div>

    <div
      v-if="mergedConfig"
      class="rows"
      :style="`height: ${height - (thisData.header.length ? mergedConfig.headerHeight : 0)}px;`"
    >
      <div
        class="row-item"
        v-for="(row, ri) in thisData.rows"
        :key="`${row.toString()}${row.scroll}`"
        :style="`
          height: ${thisData.heights[ri]}px;
          line-height: ${thisData.heights[ri]}px;
          background-color: ${mergedConfig[row.rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC']};
        `"
      >
        <div
          class="ceil"
          v-for="(ceil, ci) in row.ceils"
          :key="`${ceil}${ri}${ci}`"
          :style="`width: ${thisData.widths[ci]}px;`"
          :align="thisData.aligns[ci]"
          v-html="ceil"
          @click="emitEvent('click', ri, ci, row, ceil)"
          @mouseenter="handleHover(true, ri, ci, row, ceil)"
          @mouseleave="handleHover(false)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed, watch, onUnmounted } from 'vue';
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

const emit = defineEmits(['click', 'mouseover'])

const thisData = reactive({
  ref: "scroll-table",
  header: [],
  rowsData: [],
  rows: [],
  widths: [],
  heights: [],
  avgHeight: 0,
  aligns: [],
  animationIndex: 0,
  animationHandler: '',
  updater: 0,
  needCalc: false
})

watch(() => props.option, () => {
  stopAnimation()
  thisData.animationIndex = 0

  calcData()
})

// 处理尺寸
const { width, height } = autoResize(thisData.ref, () => {
  onResize()
})

let mergedConfig = computed(() => {
  return deepMerge(deepClone(defaultConfig, true), props.option || [])
})

/**
 * 合并配置，处理主题颜色
 */
const mergeConfig = () => {
  const { dataset } = props

  if (dataset.dimensions) {
    mergedConfig.value.dataset = dataset
  }
  let theme = null
  if (props.theme) {
    theme = props.theme
  } else {
    theme = defaultTheme
  }
  if (theme.scrollTable) {
    mergedConfig.value.headerBGC = theme.scrollTable.color.headerBGC
    mergedConfig.value.oddRowBGC = theme.scrollTable.color.oddRowBGC
    mergedConfig.value.evenRowBGC = theme.scrollTable.color.evenRowBGC
  }

}
/**
 * 处理数据集
 */
const handleDataset = (dataset=null) => {
  // let { dataset } = mergedConfig.value
  if(!dataset){
    dataset = mergedConfig.value.dataset
  }

  if (dataset.dimensions) {
    mergedConfig.value.header = [];
    mergedConfig.value.header = [...dataset.dimensions];
    dataset.source.map((row, i) => {
      // console.log(row, i);
      mergedConfig.value.data[i] = dataset.dimensions.map(function (k) {
        return row[k]
      })
    })
  } else if (dataset.source) {
    mergedConfig.value.header = [];
    mergedConfig.value.header = [...dataset.source[0]];
    mergedConfig.value.data = dataset.source.slice(1)
  }
}
/**
 *  计算头部数据
 */
const calcHeaderData = () => {
  let { header, index, indexHeader } = mergedConfig.value
  if (!header.length) {
    thisData.header = []
    return
  }
  header = [...header]
  if (index) header.unshift(indexHeader)
  thisData.header = header
}
/**
 * 计算行数据
 */
const calcRowsData = () => {
  let { data, index, headerBGC, rowNum } = mergedConfig.value

  if (index) {
    data = data.map((row, i) => {
      row = [...row]

      const indexTag = `<span class="index" style="background-color: ${headerBGC};">${i + 1}</span>`

      row.unshift(indexTag)

      return row
    })
  }

  data = data.map((ceils, i) => ({ ceils, rowIndex: i }))

  const rowLength = data.length

  if (rowLength > rowNum && rowLength < 2 * rowNum) {
    data = [...data, ...data]
  }

  data = data.map((d, i) => ({ ...d, scroll: i }))
  // console.log(data);
  thisData.rowsData = data
  thisData.rows = data
}
/**
 * 计算宽度
 */
const calcWidths = () => {
  const { rowsData } = thisData

  const { columnWidth, header } = mergedConfig.value

  const usedWidth = columnWidth.reduce((all, w) => all + w, 0)

  let columnNum = 0
  if (rowsData[0]) {
    columnNum = rowsData[0].ceils.length
  } else if (header.length) {
    columnNum = header.length
  }

  const avgWidth = (width.value - usedWidth) / (columnNum - columnWidth.length)

  const widths = new Array(columnNum).fill(avgWidth)

  thisData.widths = deepMerge(widths, columnWidth)
}
/**
 * 计算高度
 * @param {Boolean} onresize 
 */
const calcHeights = (onresize = false) => {
  const { header } = thisData
  const { headerHeight, rowNum, data } = mergedConfig.value
  let allHeight = height.value
  if (header.length) allHeight -= headerHeight

  const avgHeight = allHeight / rowNum

  thisData.avgHeight = avgHeight

  if (!onresize) thisData.heights = new Array(data.length).fill(avgHeight)
}
/**
 * 处理文字位置
 */
const calcAligns = () => {
  const { header } = thisData
  const columnNum = header.length
  let aligns = new Array(columnNum).fill('left')
  const { align } = mergedConfig.value
  thisData.aligns = deepMerge(aligns, align)
}
/**
 * 处理滚动动画
 * @param {Boolean} start 
 */
const animation = async (start = false) => {
  const { needCalc } = thisData

  if (needCalc) {
    calcRowsData()
    calcHeights()
    thisData.needCalc = false
  }

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

  thisData.rows = rows.slice(0, carousel === 'page' ? rowNum * 2 : rowNum + 1)
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
/**
 * 停止滚动动画
 */
const stopAnimation = () => {
  const { animationHandler, updater } = thisData
  thisData.updater = (updater + 1) % 999999
  if (!animationHandler) return
  clearTimeout(animationHandler)
}
/**
 * 处理鼠标滑过数据
 * @param {*} enter 
 * @param {*} ri 
 * @param {*} ci 
 * @param {*} row 
 * @param {*} ceil 
 */
const handleHover = (enter, ri, ci, row, ceil) => {
  if (enter) emitEvent('mouseover', ri, ci, row, ceil)
  if (!mergedConfig.value.hoverPause) return

  if (enter) {
    stopAnimation()
  } else {
    animation(true)
  }
}
/**
 * 事件绑定
 * @param {String} type 事件名称 
 * @param {Number} ri 行数 
 * @param {Number} ci 列数
 * @param {Array} row 
 * @param {Array} ceil 
 */
const emitEvent = (type, ri, ci, row, ceil) => {
  const { ceils, rowIndex } = row
  emit(type, {
    row: ceils,
    ceil,
    rowIndex,
    columnIndex: ci
  })
}
/**
 * 尺寸变化时处理宽高
 */
const onResize = () => {
  if (!mergedConfig.value) return
  calcWidths()
  calcHeights()
}

const updateRows = (rows, animationIndex) => {
  const { animationHandler } = thisData
  // mergedConfig.value.data = [...rows]
  handleDataset(rows)
  thisData.needCalc = true

  if (typeof animationIndex === 'number') this.animationIndex = animationIndex
  if (!animationHandler) animation(true)
}

const calcData = () => {
  mergeConfig()
  handleDataset()
  calcHeaderData()
  calcRowsData()
  calcWidths()
  calcHeights()
  calcAligns()
  animation(true)
}

onMounted(() => {
  calcData()
})

onUnmounted(() => {
  stopAnimation()
})

defineExpose({ updateRows })
</script>