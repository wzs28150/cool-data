<template>
  <div class="module-title module-title-5" :ref="data.ref">
    <svg class="module-title-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="`module-title-5-light-${id}`" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>
      </defs>

      <polyline
        :points="`0 0, ${width} 0, ${width} ${height}, 0 ${height}`"
        :fill="data.mergedColor[1]"
        fill-opacity="0.3"
      />
      <rect
        :x="height * 0.365"
        :y="height * 0.365"
        :width="height * 0.25"
        :height="height * 0.25"
        :fill="data.mergedColor[2]"
        :filter="`url(#module-title-5-light-${id})`"
      />
      <text
        class="border-box-1-title"
        :x="`${height * 0.365 + height * 0.365 + height * 0.25}`"
        :y="`${height * 0.55}`"
        :fill="data.mergedColor[0]"
        font-size="20"
        font-weight="bold"
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
  ref: 'module-title-5',
  filterId: `module-title-5-filterId-${id}`,
  defaultColor: ['#fff', '#935f22', '#ff8400'],
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