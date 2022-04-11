<template>
  <div class="module-title module-title-3" :ref="data.ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-3-title">{{ title }}</div>
    </div>-->
    <svg class="module-title-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient
          :id="`module-title-3-linear-right-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="data.mergedColor[1]" :stop-opacity="1" />
          <stop offset="30%" :stop-color="data.mergedColor[1]" :stop-opacity="0.4" />
          <stop offset="60%" :stop-color="data.mergedColor[1]" :stop-opacity="0" />
          <stop offset="100%" :stop-color="data.mergedColor[1]" :stop-opacity="0" />
        </linearGradient>

        <linearGradient
          :id="`module-title-3-linear-right2-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="data.mergedColor[1]" />
          <stop offset="100%" :stop-color="data.mergedColor[1]" :stop-opacity="0" />
        </linearGradient>

        <linearGradient :id="`module-title-3-linear-path-${id}`">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>

        <linearGradient id="grad1">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>

      <polyline
        :points="`
        0 ${height * 0.3},${width} ${height * 0.3},${width} ${height * 0.625}, 0 ${height * 0.625}
        `"
        :fill="`url(#module-title-3-linear-right-${id})`"
      />

      <text
        class="border-box-1-title"
        :x="2"
        :y="`${height * 0.4}`"
        :fill="data.mergedColor[0]"
        font-size="20"
        font-weight="bold"
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        letter-spacing="0"
      >{{ title }}</text>

      <circle cx="4" :cy="height - 3" r="3" :fill="data.mergedColor[2]" />
      <circle :cx="width * 0.03" :cy="height - 3" r="2.5" :fill="data.mergedColor[3]" />

      <circle :cx="width * 0.05" :cy="height - 3" r="2" :fill="data.mergedColor[4]" />

      <polyline
        :points="`
        ${width * 0.07} ${height - 4},${width} ${height - 4},${width} ${height - 3}, ${width * 0.07} ${height - 3}
        `"
        :fill="`url(#module-title-3-linear-right2-${id})`"
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
  ref: 'module-title-3',
  filterId: `module-title-3-filterId-${id}`,
  defaultColor: ['#fff', '#00794e', '#00ffa6', '#019b6f', '#025146'],
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