<template>
  <div class="title-7 title" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="data.filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="data.mergedColor[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter :id="`f3-${id}`" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>

        <filter :id="`inset-shadow-${id}`" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood :flood-color="data.mergedColor[0]" flood-opacity="0.5" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <linearGradient :id="`linear-${id}`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="data.mergedColor[0]" />
          <stop offset="100%" :stop-color="data.mergedColor[0]" :stop-opacity="0.2" />
        </linearGradient>
        <linearGradient :id="`linear-bg-${id}`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="data.mergedColor[0]" :stop-opacity="0" />
          <stop offset="60%" :stop-color="data.mergedColor[0]" :stop-opacity="0.2" />
          <stop offset="100%" :stop-color="data.mergedColor[0]" :stop-opacity="0.3" />
        </linearGradient>

        <linearGradient :id="`linear-left-${id}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="data.mergedColor[2]" :stop-opacity="0" />
          <stop offset="60%" :stop-color="data.mergedColor[2]" :stop-opacity="0.6" />
          <stop offset="100%" :stop-color="data.mergedColor[2]" />
        </linearGradient>

        <linearGradient :id="`linear-right-${id}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="data.mergedColor[2]" />
          <stop offset="60%" :stop-color="data.mergedColor[2]" :stop-opacity="0.6" />
          <stop offset="100%" :stop-color="data.mergedColor[2]" :stop-opacity="0" />
        </linearGradient>
      </defs>

      <text
        class="title-7-title"
        :x="`${width * 0.03}`"
        :y="`${height * 0.2 + 20}`"
        :fill="data.mergedColor[1]"
        font-size="36"
        font-weight="bold"
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        :style="`text-shadow: 0 0 5px ${data.mergedColor[1]};`"
 
      >{{ title }}</text>

      <path
          :d="`M0 ${height * 0.6 + 32} C ${width * 0.01} ${height * 0.5 + 32},${width * 0.01} ${height * 0.4 + 32} , ${width * 0.02} ${height * 0.4 + 32} L${data.titleWidth + width * 0.03 + width * 0.01} ${height * 0.4 + 32} C ${data.titleWidth + width * 0.03 + width * 0.02} ${height * 0.4 + 32},${data.titleWidth + width * 0.03 + width * 0.02} ${height * 0.2 + 16},${data.titleWidth + width * 0.03 + width * 0.03} ${height * 0.2 + 16} L${width} ${height * 0.2 + 16}`"
          :stroke="'#8aaafb'"
          stroke-width="1"
          fill="none"
        />
    </svg>
  </div>
</template>


<script setup name="Title8">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
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
  ref: 'title-7',
  filterId: `title-7-filterId-${id}`,
  defaultColor: ['#7fffff', '#57fffc', '#009caa', '#00ffc5', '#0090ff'],
  mergedColor: [],
  titleWidth: 0
})
// 处理尺寸
const { width, height } = autoResize(data.ref)
// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
  data.titleWidth = text.value.clientWidth
})

</script>