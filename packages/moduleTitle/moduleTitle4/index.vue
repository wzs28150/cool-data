<template>
  <div class="module-title module-title-4" :ref="data.ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-4-title">{{ title }}</div>
    </div>-->
    <svg class="module-title-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient
          :id="`module-title-4-linear-left-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="data.mergedColor[1]" :stop-opacity="0" />
          <stop offset="20%" :stop-color="data.mergedColor[2]" :stop-opacity="0"/>
          <stop offset="100%" :stop-color="data.mergedColor[1]" :stop-opacity="1" />
        </linearGradient>

        <linearGradient
          :id="`module-title-4-linear-left2-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="data.mergedColor[2]" :stop-opacity="0"/>
          <stop offset="70%" :stop-color="data.mergedColor[2]" :stop-opacity="0"/>
          <stop offset="100%" :stop-color="data.mergedColor[2]" :stop-opacity="0.8" />
        </linearGradient>

        <linearGradient
          :id="`module-title-4-linear-left3-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="data.mergedColor[3]" :stop-opacity="0"/>
          <stop offset="70%" :stop-color="data.mergedColor[3]" :stop-opacity="0"/>
          <stop offset="100%" :stop-color="data.mergedColor[3]" :stop-opacity="1" />
        </linearGradient>
      </defs>

      <path :d="`M0 0 
      L${data.titleWidth + width * 0.12} 0 
      C ${data.titleWidth + width * 0.13} 1,${data.titleWidth + width * 0.13} 4,${data.titleWidth + width * 0.13} 5 
      C ${data.titleWidth + width * 0.13} 6,${data.titleWidth + width * 0.13} 8,${data.titleWidth + width * 0.13} 9  
      L${data.titleWidth + width * 0.075} ${height * 0.78} 
      L0 ${height * 0.78} 
      L0 0 Z`"  stroke-width="0" :fill="`url(#module-title-4-linear-left-${id})`"> </path>
 
      <path :d="`M0 0 
      L${data.titleWidth + width * 0.12 + width * 0.03} 0 
      C ${data.titleWidth + width * 0.13  + width * 0.03} 1,${data.titleWidth + width * 0.13  + width * 0.03} 4,${data.titleWidth + width * 0.13  + width * 0.03} 5 
      C ${data.titleWidth + width * 0.13  + width * 0.03} 6,${data.titleWidth + width * 0.13  + width * 0.03} 8,${data.titleWidth + width * 0.13  + width * 0.03} 9  
      L${data.titleWidth + width * 0.075  + width * 0.03} ${height * 0.78} 
      L0 ${height * 0.78} 
      L0 0 Z`"  stroke-width="0" :fill="`url(#module-title-4-linear-left2-${id})`"> </path>

      <path :d="`M0 0 
      L${data.titleWidth + width * 0.12 + width * 0.03 * 2} 0 
      C ${data.titleWidth + width * 0.13  + width * 0.03 * 2} 1,${data.titleWidth + width * 0.13  + width * 0.03 * 2} 4,${data.titleWidth + width * 0.13  + width * 0.03 * 2} 5 
      C ${data.titleWidth + width * 0.13  + width * 0.03 * 2} 6,${data.titleWidth + width * 0.13  + width * 0.03 * 2} 8,${data.titleWidth + width * 0.13  + width * 0.03 * 2} 9  
      L${data.titleWidth + width * 0.075  + width * 0.03 * 2} ${height * 0.78} 
      L0 ${height * 0.78} 
      L0 0 Z`"  stroke-width="0" :fill="`url(#module-title-4-linear-left3-${id})`"> </path>
      <text
        class="border-box-1-title"
        :x="2"
        :y="`${height * 0.4375}`"
        :fill="data.mergedColor[0]"
        font-size="20"
        font-weight="bold"
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        letter-spacing="0"
      >{{ title }}</text>

      <polyline
        :points="`
        0 ${height - 1},${width} ${height - 1},${width} ${height}, 0 ${height}
        `"
        :fill="data.mergedColor[0]"
        stroke-width="0"
      />
    </svg>
  </div>
</template>

<script setup name="moduleTitle2">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  title: {
    type: String
  },
  color: {
    type: Array,
    default: () => ([])
  },
  title: {
    type: String
  }
})

const id = uuid()
const text = ref()

const data = reactive({
  ref: 'module-title-4',
  filterId: `module-title-4-filterId-${id}`,
  defaultColor: ['#fff', '#4e4894', '#3c3880', '#181745'],
  titleWidth: 0,
  mergedColor: []
})
// 处理尺寸
const { width, height } = autoResize(data.ref)
// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
  data.titleWidth = text.value.clientWidth * 2
})

</script>