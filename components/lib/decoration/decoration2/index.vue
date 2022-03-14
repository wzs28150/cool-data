<template>
  <div class="decoration-2 decoration" :ref="ref">
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
      </defs>

      <text
        class="border-box-2-title"
        :x="`${width / 2}`"
        :y="`${height * 0.46}`"
        :fill="mergedColor[0]"
        font-size="32"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        :style="`text-shadow: 0 0 5px ${mergedColor[0]};`"
        ref="text"
        letter-spacing="4"
      >{{ title }}</text>

      <polyline
        :points="`
        ${width * 0.5} ${height * 0.15}, 
        ${width * 0.5 - width * 0.198 + width * 0.05 - titleWidth * 0.5} ${height * 0.15}, 
        ${width * 0.5 - width * 0.204 + width * 0.05 - titleWidth * 0.5} ${height * 0.285}, 
        ${width * 0.5 - width * 0.204 + width * 0.05 - titleWidth * 0.5} ${height * 0.48},
        ${width * 0.5 - width * 0.185 + width * 0.05 - titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 - width * 0.119 + width * 0.05 - titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 - width * 0.114 + width * 0.05 - titleWidth * 0.5} ${height * 0.711},
        ${width * 0.5} ${height * 0.711}`"
        :stroke="mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <polyline
        v-for="i in 3"
        :key="`k${i}`"
        :points="`
         ${width * 0.5 - width * 0.177 + width * 0.02 * (i - 1) + width * 0.05 - titleWidth * 0.5} ${height * 0.72}, 
         ${width * 0.5 - width * 0.161 + width * 0.02 * (i - 1) + width * 0.05 - titleWidth * 0.5} ${height * 0.72}, 
         ${width * 0.5 - width * 0.163 + width * 0.02 * (i - 1) + width * 0.05 - titleWidth * 0.5} ${height * 0.76},
         ${width * 0.5 - width * 0.179 + width * 0.02 * (i - 1) + width * 0.05 - titleWidth * 0.5} ${height * 0.76}
        `"
        :filter="`url(#${filterId})`"
        :fill="mergedColor[0]"
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
        ${width * 0.5 + width * 0.198 - width * 0.05 + titleWidth * 0.5} ${height * 0.15}, 
        ${width * 0.5 + width * 0.204 - width * 0.05 + titleWidth * 0.5} ${height * 0.285}, 
        ${width * 0.5 + width * 0.204 - width * 0.05 + titleWidth * 0.5} ${height * 0.48},
        ${width * 0.5 + width * 0.185 - width * 0.05 + titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 + width * 0.119 - width * 0.05 + titleWidth * 0.5} ${height * 0.82},
        ${width * 0.5 + width * 0.114 - width * 0.05 + titleWidth * 0.5} ${height * 0.711},  
        ${width * 0.5} ${height * 0.711}`"
        :stroke="mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <polyline
        v-for="i in 3"
        :key="i"
        :points="`${width * 0.5 + width * 0.177 - width * 0.02 * (i - 1) - width * 0.05 + titleWidth * 0.5} ${height * 0.72}, 
        ${width * 0.5 + width * 0.161 - width * 0.02 * (i - 1) - width * 0.05 + titleWidth * 0.5} ${height * 0.72}, 
        ${width * 0.5 + width * 0.163 - width * 0.02 * (i - 1) - width * 0.05 + titleWidth * 0.5} ${height * 0.76},
        ${width * 0.5 + width * 0.179 - width * 0.02 * (i - 1) - width * 0.05 + titleWidth * 0.5} ${height * 0.76}`"
        :filter="`url(#${filterId})`"
        :fill="mergedColor[0]"
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
      class="decoration-2-left"
      :style="`width: ${width * 0.5 - width * 0.204 + width * 0.05 - titleWidth * 0.5}px; height: 100%;`"
    >
      <slot name="left" />
    </div>
    <div
      class="decoration-2-right"
      :style="`width: ${width * 0.5 - width * 0.204 - width * 0.05 + titleWidth * 0.5}px; height: 100%;`"
    >
      <slot name="right" />
    </div>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: "Decoration2",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    }
  },
  data() {
    const id = uuid()
    return {
      ref: 'decoration-2',
      filterId: `decoration-2-filterId-${id}`,
      // defaultColor: ['#52ffff', '#1f33a2'],
      defaultColor: ['#8aaafb', '#1f33a2'],
      mergedColor: [],
      titleWidth: 0
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
