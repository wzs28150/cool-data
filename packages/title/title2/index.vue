<template>
  <div class="title-2 title" :ref="data.ref">
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
      </defs>

      <text
        class="border-box-2-title"
        :x="`${width / 2}`"
        :y="`${height * 0.46}`"
        :fill="data.mergedColor[0]"
        font-size="32"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        :style="`text-shadow: 0 0 5px ${data.mergedColor[0]};`"
        ref="text"
        letter-spacing="4"
      >{{ title }}</text>

      <polyline
        :points="`
        ${width * 0.5} ${height * 0.15}, 
        ${width * 0.5 - width * 0.198 + width * 0.05 - data.titleWidth * 0.5} ${height * 0.15}, 
        ${width * 0.5 - width * 0.204 + width * 0.05 - data.titleWidth * 0.5} ${height * 0.285}, 
        ${width * 0.5 - width * 0.204 + width * 0.05 - data.titleWidth * 0.5} ${height * 0.48},
        ${width * 0.5 - width * 0.185 + width * 0.05 - data.titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 - width * 0.119 + width * 0.05 - data.titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 - width * 0.114 + width * 0.05 - data.titleWidth * 0.5} ${height * 0.711},
        ${width * 0.5} ${height * 0.711}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <polyline
        v-for="i in 3"
        :key="`k${i}`"
        :points="`
         ${width * 0.5 - width * 0.177 + width * 0.02 * (i - 1) + width * 0.05 - data.titleWidth * 0.5} ${height * 0.72}, 
         ${width * 0.5 - width * 0.161 + width * 0.02 * (i - 1) + width * 0.05 - data.titleWidth * 0.5} ${height * 0.72}, 
         ${width * 0.5 - width * 0.163 + width * 0.02 * (i - 1) + width * 0.05 - data.titleWidth * 0.5} ${height * 0.76},
         ${width * 0.5 - width * 0.179 + width * 0.02 * (i - 1) + width * 0.05 - data.titleWidth * 0.5} ${height * 0.76}
        `"
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="1"
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="2s"
          :begin="`${i * 0.33}s`"
          repeatCount="indefinite"
        />
      </polyline>

      <polyline
        :points="`
        ${width * 0.5} ${height * 0.15}, 
        ${width * 0.5 + width * 0.198 - width * 0.05 + data.titleWidth * 0.5} ${height * 0.15}, 
        ${width * 0.5 + width * 0.204 - width * 0.05 + data.titleWidth * 0.5} ${height * 0.285}, 
        ${width * 0.5 + width * 0.204 - width * 0.05 + data.titleWidth * 0.5} ${height * 0.48},
        ${width * 0.5 + width * 0.185 - width * 0.05 + data.titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 + width * 0.119 - width * 0.05 + data.titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 + width * 0.114 - width * 0.05 + data.titleWidth * 0.5} ${height * 0.711},  
        ${width * 0.5} ${height * 0.711}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <polyline
        v-for="i in 3"
        :key="i"
        :points="`${width * 0.5 + width * 0.177 - width * 0.02 * (i - 1) - width * 0.05 + data.titleWidth * 0.5} ${height * 0.72}, 
        ${width * 0.5 + width * 0.161 - width * 0.02 * (i - 1) - width * 0.05 + data.titleWidth * 0.5} ${height * 0.72}, 
        ${width * 0.5 + width * 0.163 - width * 0.02 * (i - 1) - width * 0.05 + data.titleWidth * 0.5} ${height * 0.76},
        ${width * 0.5 + width * 0.179 - width * 0.02 * (i - 1) - width * 0.05 + data.titleWidth * 0.5} ${height * 0.76}`"
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="0.7"
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="2s"
          :begin="`${i * 0.33}s`"
          repeatCount="indefinite"
        />
      </polyline>
    </svg>
    <div
      class="title-2-left"
      :style="`width: ${width * 0.5 - width * 0.204 + width * 0.05 - data.titleWidth * 0.5}px; height: 100%;`"
    >
      <slot name="left" />
    </div>
    <div
      class="title-2-right"
      :style="`width: ${width * 0.5 - width * 0.204 - width * 0.05 + data.titleWidth * 0.5}px; height: 100%;`"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script setup name="BorderBox1">
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
  ref: 'title-2',
  filterId: `title-2-filterId-${id}`,
  defaultColor: ['#8aaafb', '#1f33a2'],
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
  data.titleWidth = text.value.getBoundingClientRect().width
})

</script>