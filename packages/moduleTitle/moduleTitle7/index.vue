<template>
  <div class="module-title module-title-7" :ref="data.ref">
    <svg class="module-title-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="`module-title-7-light-${id}`" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>

        <linearGradient
          :id="`module-title-7-bg-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="data.mergedColor[1]" :stop-opacity="1" />
          <stop offset="30%" :stop-color="data.mergedColor[1]" :stop-opacity="1" />
          <stop offset="50%" :stop-color="data.mergedColor[1]" :stop-opacity="0.4" />
          <stop offset="100%" :stop-color="data.mergedColor[1]" :stop-opacity="0" />
        </linearGradient>
      </defs>


      <polyline
        :points="`0 0, ${width} 0, ${width} ${height}, 0 ${height}`"
     
        :fill="`url(#module-title-7-bg-${id})`"
      />
      <rect
        :x="height * 0.3"
        :y="height * 0.25"
        :width="4"
        :height="height * 0.5"
        :fill="data.mergedColor[2]"
      />
      <text
        class="border-box-1-title"
        :x="`${height * 0.6}`"
        :y="`${height * 0.55}`"
        :fill="data.mergedColor[0]"
        font-size="18"
        
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        letter-spacing="0"
      >{{ title }}</text>
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
  }
})

const id = uuid()
const text = ref()

const data = reactive({
  ref: 'module-title-7',
  filterId: `module-title-7-filterId-${id}`,
  defaultColor: ['#fff', '#123aa7', '#185bff'],
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
  data.titleWidth = text.value.getBoundingClientRect().width
})

</script>