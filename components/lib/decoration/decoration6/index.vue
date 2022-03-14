<template>
  <div class="decoration-6 decoration" :ref="ref">
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
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
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

        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="70%" :style="`stop-color:${mergedColor[0]};stop-opacity:0`" />
          <stop offset="100%" :style="`stop-color:${mergedColor[0]};stop-opacity:1`" />
        </radialGradient>
      </defs>

      <polyline
        :points="`
          ${width * 0.5} 1,
          ${width * 0.5 - width * 0.153 - titleWidth * 0.5} 1,
          ${width * 0.5 - width * 0.160 - titleWidth * 0.5} ${height * 0.116},
          ${width * 0.5 - width * 0.160 - titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 - width * 0.141 - titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.089 - titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.081 - titleWidth * 0.5} ${height * 0.872},

          ${width * 0.5 + width * 0.081 + titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 + width * 0.089 + titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.141 + titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.160 + titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 + width * 0.160 + titleWidth * 0.5} ${height * 0.116},
          ${width * 0.5 + width * 0.153 + titleWidth * 0.5} 1,
          ${width * 0.5} 1
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="decoration-6-center-out"
      />

      <polyline
        :points="`
          ${width * 0.5} ${height * 0.127},
          ${width * 0.5 - width * 0.147 - titleWidth * 0.5} ${height * 0.127},
          ${width * 0.5 - width * 0.155 - titleWidth * 0.5} ${height * 0.267},
          ${width * 0.5 - width * 0.155 - titleWidth * 0.5} ${height * 0.488},
          ${width * 0.5 - width * 0.141 - titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 - width * 0.089 - titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 - width * 0.083 - titleWidth * 0.5} ${height * 0.755},
          ${width * 0.5 + width * 0.083 + titleWidth * 0.5} ${height * 0.755},
          ${width * 0.5 + width * 0.089 + titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 + width * 0.141 + titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 + width * 0.155 + titleWidth * 0.5} ${height * 0.488},
          ${width * 0.5 + width * 0.155 + titleWidth * 0.5} ${height * 0.267},
          ${width * 0.5 + width * 0.147 + titleWidth * 0.5} ${height * 0.127},
          ${width * 0.5} ${height * 0.127}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="decoration-6-center-in"
      />

      <polyline
        v-for="i in 3"
        :key="`k${i}`"
        :points="`
          ${width * 0.5 - titleWidth * 0.5 - width * 0.132 + width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 - titleWidth * 0.5 - width * 0.121 + width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 - titleWidth * 0.5 - width * 0.127 + width * 0.015 * (i - 1)} ${height * 0.81},
          ${width * 0.5 - titleWidth * 0.5 - width * 0.137 + width * 0.015 * (i - 1)} ${height * 0.81}
        `"
        :filter="`url(#f3)`"
        :fill="mergedColor[1]"
        :fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0.4;1"
          dur="2s"
          :begin="`${i * 0.33}s`"
          repeatCount="indefinite"
        />
      </polyline>

      <polyline
        v-for="i in 3"
        :key="`kr${i}`"
        :points="`
          ${width * 0.5 + titleWidth * 0.5 + width * 0.132 - width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 + titleWidth * 0.5 + width * 0.121 - width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 + titleWidth * 0.5 + width * 0.127 - width * 0.015 * (i - 1)} ${height * 0.81},
          ${width * 0.5 + titleWidth * 0.5 + width * 0.137 - width * 0.015 * (i - 1)} ${height * 0.81}
        `"
        :filter="`url(#f3)`"
        :fill="mergedColor[1]"
        :fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0.4;1"
          dur="2s"
          :begin="`${i * 0.33}s`"
          repeatCount="indefinite"
        />
      </polyline>

      <polyline
        :points="`
          ${width * 0.01} ${height * 0.418},
          ${width * 0.5 - width * 0.1875 - titleWidth * 0.5} ${height * 0.418},
          ${width * 0.5 - width * 0.164 - titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.148 - titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.168 - titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 - width * 0.168 - titleWidth * 0.5} ${height * 0.2},
          ${width * 0.5 - width * 0.163 - titleWidth * 0.5} 1,
          ${width * 0.02} 1,
          ${width * 0.01} ${height * 0.418}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="decoration-6-left"
      />

      <polyline
        :points="`
          ${width * 0.99} ${height * 0.418},
          ${width * 0.5 + width * 0.1875 + titleWidth * 0.5} ${height * 0.418},
          ${width * 0.5 + width * 0.164 +titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.148 +titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.168 +titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 + width * 0.168 +titleWidth * 0.5} ${height * 0.2},
          ${width * 0.5 + width * 0.163 +titleWidth * 0.5} 1,
          ${width * 0.98} 1,
          ${width * 0.99} ${height * 0.418}
        `"
        :stroke="mergedColor[0]"
        stroke-width="2"
        :fill="mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="decoration-6-left"
      />

      <text
        class="decoration-6-title"
        :x="`${width / 2}`"
        :y="height * 0.48"
        :fill="mergedColor[1]"
        font-size="30"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        ref="text"
        :style="`text-shadow: 0 0 5px ${mergedColor[1]};`"
        letter-spacing="6"
      >{{ title }}</text>
    </svg>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: "Decoration6",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    }
  },
  data() {
    const id = uuid()
    return {
      ref: 'decoration-6',
      filterId: `decoration-6-filterId-${id}`,
      // defaultColor: ['#52ffff', '#1f33a2'],
      defaultColor: ['#1d6c7d', '#57fffc', '#08192d'],
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
