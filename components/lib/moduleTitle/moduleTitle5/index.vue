<template>
  <div class="module-title module-title-5" :ref="ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-5-title">{{ title }}</div>
    </div>-->
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="`module-title-5-light-${id}`" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>
      </defs>

      <polyline :points="`0 0, ${width} 0, ${width} ${height}, 0 ${height}`" :fill="mergedColor[1]" fill-opacity="0.3"></polyline>
      <rect :x="height * 0.365" :y="height * 0.365" :width="height * 0.25" :height="height * 0.25" :fill="mergedColor[2]" :filter="`url(#module-title-5-light-${id})`" />
      <text
        class="border-box-1-title"
        :x="`${height * 0.365 + height * 0.365 + height * 0.25}`"
        :y="`${height * 0.55}`"
        :fill="mergedColor[0]"
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

<script>
import autoResize from '../../../mixin/autoResize'
import { getRgbValue } from '../../../util/color';
import { uuid, deepMerge, deepClone } from '../../../util/index'
export default {
  name: "ModuleTitle5",
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
      ref: 'module-title-5',
      active: 0,
      defaultColor: ['#fff', '#935f22', '#ff8400'],
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