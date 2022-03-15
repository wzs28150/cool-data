<template>
  <div class="module-title module-title-2" :ref="ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-2-title">{{ title }}</div>
    </div>-->
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient
          :id="`module-title-2-linear-right-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[1]" :stop-opacity="0.6" />
          <stop offset="40%" :stop-color="mergedColor[1]" :stop-opacity="0.3" />
          <stop offset="100%" :stop-color="mergedColor[1]" :stop-opacity="0" />
        </linearGradient>

        <linearGradient
          :id="`module-title-2-linear-right2-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[1]" />
          <stop offset="100%" :stop-color="mergedColor[1]" :stop-opacity="0.6" />
        </linearGradient>

        <linearGradient :id="`module-title-2-linear-path-${id}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="mergedColor[2]" />
          <stop offset="100%" :stop-color="mergedColor[2]" :stop-opacity="0" />
        </linearGradient>

        <linearGradient id="grad1">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <polyline
        :points="`
        ${width * 0.057} 0,${width} 0,${width} ${height * 0.84},${width * 0.015} ${height * 0.84}
        `"
        :fill="`url(#module-title-2-linear-right-${id})`"
      />

      <polyline
        :points="`
        ${width * 0.057} 6,${width * 0.216} 6,${width * 0.186} ${height * 0.73},${width * 0.03} ${height * 0.73}
        `"
        :fill="`url(#module-title-2-linear-right2-${id})`"
      />

      <text
        class="border-box-1-title"
        :x="`${width * 0.06}`"
        :y="`${height * 0.521}`"
        :fill="mergedColor[0]"
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
        :fill="`url(#module-title-2-linear-path-${id})`"
      />

      <polyline
        :points="`${width * 0.022} 0, ${width * 0.03} 0, ${width * 0.007} ${height * 0.52},0 ${height * 0.52}`"
        :fill="mergedColor[1]"
        stroke-width="0"
      />

      <polyline
        :points="`${width * 0.037} 0, ${width * 0.045} 0, ${width * 0.028} ${height * 0.369},${width * 0.02} ${height * 0.369}`"
        :fill="mergedColor[1]"
        stroke-width="0"
      />
    </svg>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize'
import { getRgbValue } from '../../../util/color';
import { uuid, deepMerge, deepClone } from '../../../util/index'
export default {
  name: "ModuleTitle2",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    },
    btnList: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: Array,
      default: () => ([])
    },
  },
  data() {
    const id = uuid()
    return {
      ref: 'module-title-2',
      active: 0,
      defaultColor: ['#fff', '#251cb9', '#9798a2'],
      mergedColor: [],
      id: id
    }
  },
  watch: {
    color() {
      const { mergeColor } = this

      mergeColor()
    },

  },
  methods: {
    change(e) {
      this.active = e.target.dataset.index
    },
    mergeColor() {
      const { color, defaultColor } = this

      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || [])
    },
    rgb(color) {
      return color ? getRgbValue(color) : color
    }
  },
  mounted() {
    const { mergeColor } = this
    mergeColor()
  }
}
</script>