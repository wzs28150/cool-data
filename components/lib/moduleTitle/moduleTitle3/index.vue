<template>
  <div class="module-title module-title-3" :ref="ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-3-title">{{ title }}</div>
    </div>-->
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient
          :id="`module-title-3-linear-right-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[1]" :stop-opacity="1" />
          <stop offset="30%" :stop-color="mergedColor[1]" :stop-opacity="0.4" />
          <stop offset="60%" :stop-color="mergedColor[1]" :stop-opacity="0" />
          <stop offset="100%" :stop-color="mergedColor[1]" :stop-opacity="0" />
        </linearGradient>

        <linearGradient
          :id="`module-title-3-linear-right2-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[1]" />
          <stop offset="100%" :stop-color="mergedColor[1]" :stop-opacity="0" />
        </linearGradient>

        <linearGradient :id="`module-title-3-linear-path-${id}`" >
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>

        <linearGradient id="grad1" >
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
        :fill="mergedColor[0]"
        font-size="20"
        font-weight="bold"
        text-anchor="left"
        dominant-baseline="middle"
        ref="text"
        letter-spacing="0"
      >{{ title }}</text>

      <circle cx="4" :cy="height - 3" r="3" :fill="mergedColor[2]"></circle>
      <circle :cx="width * 0.03" :cy="height - 3" r="2.5" :fill="mergedColor[3]"></circle>

      <circle :cx="width * 0.05" :cy="height - 3" r="2" :fill="mergedColor[4]"></circle>

      <polyline
        :points="`
        ${width * 0.07} ${height - 4},${width} ${height - 4},${width} ${height - 3}, ${width * 0.07} ${height - 3}
        `"
        :fill="`url(#module-title-3-linear-right2-${id})`"
      />
    </svg>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize'
import { getRgbValue } from '../../../util/color';
import { uuid, deepMerge, deepClone } from '../../../util/index'
export default {
  name: "ModuleTitle3",
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
      ref: 'module-title-3',
      active: 0,
      defaultColor: ['#fff', '#00794e', '#00ffa6', '#019b6f', '#025146'],
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