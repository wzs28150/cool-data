<template>
  <div class="module-title module-title-4" :ref="ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-4-title">{{ title }}</div>
    </div>-->
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient
          :id="`module-title-4-linear-left-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[1]" :stop-opacity="0" />
          <stop offset="20%" :stop-color="mergedColor[2]" :stop-opacity="0"/>
          <stop offset="100%" :stop-color="mergedColor[1]" :stop-opacity="1" />
        </linearGradient>

        <linearGradient
          :id="`module-title-4-linear-left2-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[2]" :stop-opacity="0"/>
          <stop offset="70%" :stop-color="mergedColor[2]" :stop-opacity="0"/>
          <stop offset="100%" :stop-color="mergedColor[2]" :stop-opacity="0.8" />
        </linearGradient>

        <linearGradient
          :id="`module-title-4-linear-left3-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" :stop-color="mergedColor[3]" :stop-opacity="0"/>
          <stop offset="70%" :stop-color="mergedColor[3]" :stop-opacity="0"/>
          <stop offset="100%" :stop-color="mergedColor[3]" :stop-opacity="1" />
        </linearGradient>
      </defs>

      <path :d="`M0 0 
      L${titleWidth + width * 0.12} 0 
      C ${titleWidth + width * 0.13} 1,${titleWidth + width * 0.13} 4,${titleWidth + width * 0.13} 5 
      C ${titleWidth + width * 0.13} 6,${titleWidth + width * 0.13} 8,${titleWidth + width * 0.13} 9  
      L${titleWidth + width * 0.075} ${height * 0.78} 
      L0 ${height * 0.78} 
      L0 0 Z`"  stroke-width="0" :fill="`url(#module-title-4-linear-left-${id})`"> </path>
 
      <path :d="`M0 0 
      L${titleWidth + width * 0.12 + width * 0.03} 0 
      C ${titleWidth + width * 0.13  + width * 0.03} 1,${titleWidth + width * 0.13  + width * 0.03} 4,${titleWidth + width * 0.13  + width * 0.03} 5 
      C ${titleWidth + width * 0.13  + width * 0.03} 6,${titleWidth + width * 0.13  + width * 0.03} 8,${titleWidth + width * 0.13  + width * 0.03} 9  
      L${titleWidth + width * 0.075  + width * 0.03} ${height * 0.78} 
      L0 ${height * 0.78} 
      L0 0 Z`"  stroke-width="0" :fill="`url(#module-title-4-linear-left2-${id})`"> </path>

      <path :d="`M0 0 
      L${titleWidth + width * 0.12 + width * 0.03 * 2} 0 
      C ${titleWidth + width * 0.13  + width * 0.03 * 2} 1,${titleWidth + width * 0.13  + width * 0.03 * 2} 4,${titleWidth + width * 0.13  + width * 0.03 * 2} 5 
      C ${titleWidth + width * 0.13  + width * 0.03 * 2} 6,${titleWidth + width * 0.13  + width * 0.03 * 2} 8,${titleWidth + width * 0.13  + width * 0.03 * 2} 9  
      L${titleWidth + width * 0.075  + width * 0.03 * 2} ${height * 0.78} 
      L0 ${height * 0.78} 
      L0 0 Z`"  stroke-width="0" :fill="`url(#module-title-4-linear-left3-${id})`"> </path>
      <text
        class="border-box-1-title"
        :x="2"
        :y="`${height * 0.4375}`"
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
        :fill="mergedColor[0]"
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
  name: "ModuleTitle4",
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
      ref: 'module-title-4',
      active: 0,
      defaultColor: ['#fff', '#4e4894', '#3c3880', '#181745'],
      mergedColor: [],
      titleWidth: 0,
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
    this.titleWidth = this.$refs.text.clientWidth
    console.log(this.titleWidth);
  }
}
</script>