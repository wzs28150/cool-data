<template>
  <div class="border-box-13" :ref="ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <path
        v-if="width && height"
        :fill="backgroundColor"
        stroke-width="2"
        :stroke="mergedColor[0]"
        :d="`
          M15 5 L ${width - 15} 5 Q ${width - 5} 5
        `"
      />
    </svg>
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: 'BorderBox13',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      ref: 'border-box-13',
      defaultColor: ['#2e6099', '#7ce7fd'],
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