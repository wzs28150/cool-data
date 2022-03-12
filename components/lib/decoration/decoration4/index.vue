<template>
  <div class="decoration-4" :ref="ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter id="inset-shadow" filterUnits="objectBoundingBox">
          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />/>
        </filter>
      </defs>
      <polyline
        :points="`0 ${height * 0.75},${width * 0.087} ${height * 0.75},${width * 0.1} ${height * 0.4}, ${width * 0.16} ${height * 0.4},${width * 0.166} ${height * 0.57},${width / 2 - titleWidth / 2 - 18 - 75} ${height * 0.57}`"
        :stroke="mergedColor[0]"
        stroke-width="2"
      />
      <g fill="none" :stroke="mergedColor[0]" stroke-width="1">
        <path
          stroke-dasharray="5 2"
          :d="`M ${width * 0.17} ${height * 0.45} ${width * 0.3} ${height * 0.45}`"
        />
      </g>
      <circle
        :cx="`${width * 0.105}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="fade(mergedColor[0] || defaultColor[1], 30)"
        class="c1"
      />
      <circle
        :cx="`${width * 0.121}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        class="c2"
      />
      <circle
        :cx="`${width * 0.14}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="mergedColor[0]"
        stroke-width="2"
        fill="none"
        class="c3"
      />
      <circle
        :cx="`${width * 0.155}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="mergedColor[0]"
        stroke-width="2"
        fill="none"
        class="c4"
      />

      <circle
        :cx="`${width / 2 - titleWidth / 2 - 10 - 75}`"
        :cy="height * 0.57"
        r="7"
        :stroke="mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <text
        class="border-box-11-title"
        :x="`${width / 2}`"
        :y="`${height / 2}`"
        fill="#52ffff"
        font-size="36"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        :style="`text-shadow: 0 0 5px ${mergedColor[0]};`"
      >{{ title }}</text>

      <circle
        :cx="`${width / 2 + titleWidth / 2 + 10 + 75}`"
        :cy="height / 2"
        r="7"
        :stroke="mergedColor[0]"
        stroke-width="3"
        fill="none"
      />
    </svg>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: "Decoration4",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    },
    titleWidth: {
      type: Number,
      default: 100
    }
  },
  data() {
    const id = uuid()
    return {
      ref: 'border-box-4',
      filterId: `border-box-11-filterId-${id}`,
      defaultColor: ['#52ffff', '#1f33a2'],
      mergedColor: []
    }
  },
  watch: {
    color() {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    mergeColor() {
      const { color, defaultColor } = this

      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || [])
    },
    fade
  },
  mounted() {
    const { mergeColor } = this

    mergeColor()
  }
}
</script>

<style lang="less">
.decoration-4 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>