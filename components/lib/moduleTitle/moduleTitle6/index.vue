<template>
  <div class="module-title module-title-6" :ref="ref">
    <!-- <div class="module-title-module-main">
      <div class="module-title-6-title">{{ title }}</div>
    </div>-->
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="`module-title-6-light-${id}`" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>
      </defs>

      <rect :x="0" :y="0" :width="6" :height="22" rx="3" ry="3" :fill="mergedColor[1]" />

      <text
        class="border-box-1-title"
        :x="`${width * 0.05}`"
        :y="13"
        :fill="mergedColor[0]"
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
        :fill="mergedColor[0]"
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

<script>
import autoResize from '../../../mixin/autoResize'
import { getRgbValue } from '../../../util/color';
import { uuid, deepMerge, deepClone } from '../../../util/index'
export default {
  name: "ModuleTitle6",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    },
    en: {
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
      ref: 'module-title-6',
      active: 0,
      defaultColor: ['#fff', '#2ccbf8', '#ff8400'],
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