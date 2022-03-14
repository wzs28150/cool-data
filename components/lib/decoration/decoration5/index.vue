<template>
  <div class="decoration-5 decoration" :ref="ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="mergedColor[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="f3" x="-120%" y="-120%" width="400%" height="400%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="20" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>

        <filter :id="`inset-shadow-${id}`" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood :flood-color="mergedColor[0]" flood-opacity="0.5" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>

      <polyline
        :points="`
        ${width * 0.5 - titleWidth * 0.5 - width * 0.019} 1,
        ${width * 0.5 + titleWidth * 0.5 + width * 0.019} 1,
        ${width * 0.5 + titleWidth * 0.5 + width * 0.052} ${height * 0.5},
        ${width * 0.5 + titleWidth * 0.5 + width * 0.019} ${height - 1},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.019} ${height - 1},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.052} ${height * 0.5},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.019} 1
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[2]"
        :fill-opacity="1"
        :filter="`url(#inset-shadow-${id})`"
      />

      <polyline
        :points="`
        ${width * 0.5 - titleWidth * 0.5 - width * 0.028}  ${height * 0.858},
        ${width * 0.5 - titleWidth * 0.5 + width * 0.0005}  ${height * 0.858},
        ${width * 0.5 - titleWidth * 0.5 + width * 0.005}  ${height * 0.934},
        ${width * 0.5 + titleWidth * 0.5 - width * 0.005}  ${height * 0.934},

        ${width * 0.5 + titleWidth * 0.5 - width * 0.0005}  ${height * 0.858},
        ${width * 0.5 + titleWidth * 0.5 + width * 0.028}  ${height * 0.858}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        fill="none"
        class="decoration-5-center-line"
      />

      <polyline
        :points="`
        ${width * 0.5 - titleWidth * 0.5 - width * 0.096}  ${height * 0.51},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.052}  ${height * 0.51},

        ${width * 0.5 - titleWidth * 0.5 - width * 0.047}  ${height * 0.58},

        ${width * 0.5 - titleWidth * 0.5 - width * 0.093}  ${height * 0.58},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.096}  ${height * 0.51}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-left-px"
      />

      <polyline
        :points="`
        ${width * 0.5 + titleWidth * 0.5 + width * 0.096}  ${height * 0.51},
        ${width * 0.5 + titleWidth * 0.5 + width * 0.052}  ${height * 0.51},

        ${width * 0.5 + titleWidth * 0.5 + width * 0.047}  ${height * 0.58},

        ${width * 0.5 + titleWidth * 0.5 + width * 0.093}  ${height * 0.58},
        ${width * 0.5 + titleWidth * 0.5 + width * 0.096}  ${height * 0.51}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-right-px"
      />

      <polyline
        :points="`
        ${width * 0.5 - titleWidth * 0.5 - width * 0.096}  ${height * 0.51},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.29}  ${height * 0.51}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        class="decoration-5-left-line"
      />

      <polyline
        :points="`
        ${width * 0.5 + titleWidth * 0.5 + width * 0.096}  ${height * 0.51},
        ${width * 0.5 + titleWidth * 0.5 + width * 0.29}  ${height * 0.51}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        class="decoration-5-right-line"
      />

      <polyline
        :points="`
        ${width * 0.5 - titleWidth * 0.5 - width * 0.29}  ${height * 0.51},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.34}  ${height * 0.51},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.34 + width * 0.009}  ${height * 0.3},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.34 + width * 0.040}  ${height * 0.3},
        ${width * 0.5 - titleWidth * 0.5 - width * 0.29}  ${height * 0.51}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-left-trapezoid"
      />

      <polyline
        :points="`
        ${width * 0.5 + titleWidth * 0.5 + width * 0.29}  ${height * 0.51},
        ${width * 0.5 + titleWidth * 0.5 + width * 0.34}  ${height * 0.51},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.34 - width * 0.009}  ${height * 0.3},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.34 - width * 0.040}  ${height * 0.3},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.29}  ${height * 0.51}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-right-trapezoid"
      />

      <polyline
        :points="`
         ${width * 0.5 - titleWidth * 0.5 - width * 0.29}  ${height * 0.3},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.28}  ${height * 0.3},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.27}  ${height * 0.51},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.28}  ${height * 0.51},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.29}  ${height * 0.3}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-left-trapezoid2"
      />

      <polyline
        :points="`
         ${width * 0.5 + titleWidth * 0.5 + width * 0.29}  ${height * 0.3},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.28}  ${height * 0.3},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.27}  ${height * 0.51},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.28}  ${height * 0.51},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.29}  ${height * 0.3}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-right-trapezoid2"
      />

      <polyline
        :points="`
         ${width * 0.5 - titleWidth * 0.5 - width * 0.29 + width * 0.02}  ${height * 0.3},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.285 + width * 0.02}  ${height * 0.3},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.275 + width * 0.02}  ${height * 0.51},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.28 + width * 0.02}  ${height * 0.51},
         ${width * 0.5 - titleWidth * 0.5 - width * 0.29 + width * 0.02}  ${height * 0.3}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-left-trapezoid3"
      />

      <polyline
        :points="`
         ${width * 0.5 + titleWidth * 0.5 + width * 0.29 - width * 0.02}  ${height * 0.3},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.285 - width * 0.02}  ${height * 0.3},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.275 - width * 0.02}  ${height * 0.51},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.28 - width * 0.02}  ${height * 0.51},
         ${width * 0.5 + titleWidth * 0.5 + width * 0.29 - width * 0.02}  ${height * 0.3}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[0]"
        :fill-opacity="0.3"
        class="decoration-5-right-trapezoid3"
      />

      <text
        class="decoration-5-title"
        :x="`${width / 2}`"
        :y="height * 0.52"
        :fill="mergedColor[1]"
        font-size="32"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        ref="text"
        :style="`text-shadow: 0 0 5px ${mergedColor[1]};`"
        letter-spacing="4"
      >{{ title }}</text>
    </svg>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: "Decoration5",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    }
  },
  data() {
    const id = uuid()
    return {
      ref: 'decoration-5',
      filterId: `decoration-5-filterId-${id}`,
      // defaultColor: ['#52ffff', '#1f33a2'],
      defaultColor: ['#8aaafb', '#ffffff', '#08192d'],
      mergedColor: [],
      titleWidth: 0,
      id: id
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
    this.titleWidth = this.$refs.text.clientWidth * 2
  }
}
</script>
