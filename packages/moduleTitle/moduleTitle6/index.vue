<template>
  <div class="module-title module-title-6" :ref="data.ref">
    <svg class="module-title-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="`module-title-6-light-${id}`" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>
      </defs>

      <rect :x="0" :y="0" :width="6" :height="22" rx="3" ry="3" :fill="data.mergedColor[1]" />

      <text
        class="border-box-1-title"
        :x="`${width * 0.05}`"
        :y="13"
        :fill="data.mergedColor[0]"
        font-size="20"
        font-weight="bold"
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        letter-spacing="0"
      >{{ title }}</text>

      <text
        class="border-box-1-title"
        :x="`${width * 0.05}`"
        :y="`${height * 0.7}`"
        :fill="data.mergedColor[0]"
        fill-opacity="0.5"
        font-size="16"
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        letter-spacing="0"
      >{{ en }}</text>
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
  en: {
    type: String
  },
})

const id = uuid()
const text = ref()

const data = reactive({
  ref: 'module-title-6',
  filterId: `module-title-6-filterId-${id}`,
  defaultColor: ['#fff', '#2ccbf8', '#ff8400'],
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