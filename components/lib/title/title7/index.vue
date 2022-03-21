<template>
  <div class="title-7 title" :ref="ref">
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

        <filter :id="`f3-${id}`" x="-120%" y="-120%" width="400%" height="400%">
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

        <linearGradient :id="`linear-${id}`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="mergedColor[0]" />
          <stop offset="100%" :stop-color="mergedColor[0]" :stop-opacity="0.2" />
        </linearGradient>
        <linearGradient :id="`linear-bg-${id}`" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :stop-color="mergedColor[0]" :stop-opacity="0" />
          <stop offset="60%" :stop-color="mergedColor[0]" :stop-opacity="0.2" />
          <stop offset="100%" :stop-color="mergedColor[0]" :stop-opacity="0.3" />
        </linearGradient>

        <linearGradient :id="`linear-left-${id}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="mergedColor[2]"  :stop-opacity="0"/>
          <stop offset="60%" :stop-color="mergedColor[2]" :stop-opacity="0.6" />
          <stop offset="100%" :stop-color="mergedColor[2]" />
        </linearGradient>

        <linearGradient :id="`linear-right-${id}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="mergedColor[2]"  />
          <stop offset="60%" :stop-color="mergedColor[2]" :stop-opacity="0.6" />
          <stop offset="100%" :stop-color="mergedColor[2]" :stop-opacity="0"/>
        </linearGradient>
      </defs>

      <polyline
        :points="`
        ${width * 0.5} 1,
        ${width * 0.5 - width * 0.0416 - titleWidth * 0.5} 1,
        ${width * 0.5 - width * 0.0546 - titleWidth * 0.5} ${height * 0.423},
        ${width * 0.5 - width * 0.0416 - titleWidth * 0.5} ${height * 0.846},
        ${width * 0.5 + width * 0.0416 + titleWidth * 0.5} ${height * 0.846},
        ${width * 0.5 + width * 0.0546 + titleWidth * 0.5} ${height * 0.423},
        ${width * 0.5 + width * 0.0416 + titleWidth * 0.5} 1,
        ${width * 0.5} 1
        `"
        :stroke="`url(#linear-${id})`"
        stroke-width="2"
        :fill="`url(#linear-bg-${id})`"
        class="title-7-center"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.076} ${height * 0.846},
          ${width * 0.5 - width * 0.0375} ${height * 0.846},
          ${width * 0.5 - width * 0.0343} ${height * 0.73},
          ${width * 0.5 + width * 0.0343} ${height * 0.73},
          ${width * 0.5 + width * 0.0375} ${height * 0.846},
          ${width * 0.5 + width * 0.076} ${height * 0.846}
        `"
        :stroke="mergedColor[2]"
        stroke-width="2"
        fill="none"
        class="title-7-center"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.076} ${height * 0.884},
          ${width * 0.5 - width * 0.0375} ${height * 0.884},
          ${width * 0.5 - width * 0.0343} ${height - 1},
          ${width * 0.5 + width * 0.0343} ${height - 1},
          ${width * 0.5 + width * 0.0375} ${height * 0.884},
          ${width * 0.5 + width * 0.076} ${height * 0.884}
        `"
        :stroke="mergedColor[2]"
        stroke-width="2"
        fill="none"
        class="title-7-center"
      />

      <rect
        v-for="i in 15"
        :key="`cc${i}`"
        :x="width * 0.5 - width * 0.001 + width * (i - 8) * 0.004"
        :y="height * 0.846 - height * 0.125 / 3"
        :width="width * 0.002"
        :height="height * 0.125"
        :fill="mergedColor[0]"
        :filter="`url(#f3-${id})`"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0.4;1"
          dur="3s"
          :begin="`${i * 0.06}s`"
          repeatCount="indefinite"
        />
      </rect>

      <text
        class="title-7-title"
        :x="`${width / 2}`"
        :y="height * 0.45"
        :fill="mergedColor[1]"
        font-size="32"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        ref="text"
        :style="`text-shadow: 0 0 5px ${mergedColor[1]};`"
        letter-spacing="10"
      >{{ title }}</text>

      <polyline
        :points="`
          ${width * 0.5 - width * 0.069 - titleWidth * 0.5} ${height * 0.288},
          ${width * 0.5 - width * 0.065 - titleWidth * 0.5} ${height * 0.288},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5} ${height * 0.423},
          ${width * 0.5 - width * 0.0546 - titleWidth * 0.5} ${height * 0.423},
          ${width * 0.5 - width * 0.0665 - titleWidth * 0.5} ${height * 0.423},
          ${width * 0.5 - width * 0.069 - titleWidth * 0.5} ${height * 0.288}
        `"
        :stroke="mergedColor[2]"
        stroke-width="2"
        :fill="mergedColor[2]"
        fill-opacity="0.6"
        class="title-7-center-left"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.069 + titleWidth * 0.5} ${height * 0.288},
          ${width * 0.5 + width * 0.065 + titleWidth * 0.5} ${height * 0.288},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5} ${height * 0.423},
          ${width * 0.5 + width * 0.0546 + titleWidth * 0.5} ${height * 0.423},
          ${width * 0.5 + width * 0.0665 + titleWidth * 0.5} ${height * 0.423},
          ${width * 0.5 + width * 0.069 + titleWidth * 0.5} ${height * 0.288}
        `"
        :stroke="mergedColor[2]"
        stroke-width="2"
        :fill="mergedColor[2]"
        fill-opacity="0.6"
        class="title-7-center-right"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.0690 - titleWidth * 0.5 - width * 0.01} ${height * 0.288},
          ${width * 0.5 - width * 0.0650 - titleWidth * 0.5 - width * 0.01} ${height * 0.288},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5 - width * 0.01} ${height * 0.423},
          ${width * 0.5 - width * 0.0665 - titleWidth * 0.5 - width * 0.01} ${height * 0.423},
          ${width * 0.5 - width * 0.0690 - titleWidth * 0.5 - width * 0.01} ${height * 0.288}
        `"
        :stroke="mergedColor[3]"
        stroke-width="2"
        :fill="mergedColor[3]"
        fill-opacity="0.6"
        class="title-7-center-left2"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.0690 - titleWidth * 0.5 - width * 0.02} ${height * 0.288},
          ${width * 0.5 - width * 0.0650 - titleWidth * 0.5 - width * 0.02} ${height * 0.288},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5 - width * 0.02} ${height * 0.423},
          ${width * 0.5 - width * 0.0665 - titleWidth * 0.5 - width * 0.02} ${height * 0.423},
          ${width * 0.5 - width * 0.0690 - titleWidth * 0.5 - width * 0.02} ${height * 0.288}
        `"
        :stroke="mergedColor[4]"
        stroke-width="2"
        :fill="mergedColor[4]"
        fill-opacity="0.6"
        class="title-7-center-left3"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.0690 - titleWidth * 0.5 - width * 0.03} ${height * 0.288},
          ${width * 0.5 - width * 0.0650 - titleWidth * 0.5 - width * 0.03} ${height * 0.288},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5 - width * 0.03} ${height * 0.423},
          ${width * 0.5 - width * 0.0665 - titleWidth * 0.5 - width * 0.03} ${height * 0.423},
          ${width * 0.5 - width * 0.0690 - titleWidth * 0.5 - width * 0.03} ${height * 0.288}
        `"
        :stroke="mergedColor[2]"
        stroke-width="2"
        :fill="mergedColor[2]"
        fill-opacity="0.6"
        class="title-7-center-left4"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.0690 + titleWidth * 0.5 + width * 0.01} ${height * 0.288},
          ${width * 0.5 + width * 0.0650 + titleWidth * 0.5 + width * 0.01} ${height * 0.288},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5 + width * 0.01} ${height * 0.423},
          ${width * 0.5 + width * 0.0665 + titleWidth * 0.5 + width * 0.01} ${height * 0.423},
          ${width * 0.5 + width * 0.0690 + titleWidth * 0.5 + width * 0.01} ${height * 0.288}
        `"
        :stroke="mergedColor[3]"
        stroke-width="2"
        :fill="mergedColor[3]"
        fill-opacity="0.6"
        class="title-7-center-right2"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.0690 + titleWidth * 0.5 + width * 0.02} ${height * 0.288},
          ${width * 0.5 + width * 0.0650 + titleWidth * 0.5 + width * 0.02} ${height * 0.288},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5 + width * 0.02} ${height * 0.423},
          ${width * 0.5 + width * 0.0665 + titleWidth * 0.5 + width * 0.02} ${height * 0.423},
          ${width * 0.5 + width * 0.0690 + titleWidth * 0.5 + width * 0.02} ${height * 0.288}
        `"
        :stroke="mergedColor[4]"
        stroke-width="2"
        :fill="mergedColor[4]"
        fill-opacity="0.6"
        class="title-7-center-right3"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.0690 + titleWidth * 0.5 + width * 0.03} ${height * 0.288},
          ${width * 0.5 + width * 0.0650 + titleWidth * 0.5 + width * 0.03} ${height * 0.288},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5 + width * 0.03} ${height * 0.423},
          ${width * 0.5 + width * 0.0665 + titleWidth * 0.5 + width * 0.03} ${height * 0.423},
          ${width * 0.5 + width * 0.0690 + titleWidth * 0.5 + width * 0.03} ${height * 0.288}
        `"
        :stroke="mergedColor[2]"
        stroke-width="2"
        :fill="mergedColor[2]"
        fill-opacity="0.6"
        class="title-7-center-right4"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.0665 - titleWidth * 0.5 - width * 0.03} ${height * 0.423 - height * 0.009},
          ${-width * 0.05} ${height * 0.423 - height * 0.009},
          ${-width * 0.05} ${height * 0.423 + height * 0.009},
          ${width * 0.5 - width * 0.0665 - titleWidth * 0.5 - width * 0.03} ${height * 0.423  + height * 0.009}
        `"
        :fill="`url(#linear-left-${id})`"
        class="title-7-left-line"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.0665 + titleWidth * 0.5 + width * 0.03} ${height * 0.423 - height * 0.009},
          ${width + width * 0.05} ${height * 0.423 - height * 0.009},
          ${width + width * 0.05} ${height * 0.423 + height * 0.009},
          ${width * 0.5 + width * 0.0665 + titleWidth * 0.5 + width * 0.03} ${height * 0.423  + height * 0.009}
        `"
        :fill="`url(#linear-right-${id})`"
        class="title-7-right-line"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5} ${height * 0.5 - height * 0.009},
          ${-width * 0.05} ${height * 0.5 - height * 0.009},
          ${-width * 0.05} ${height * 0.5},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5} ${height * 0.5}
        `"
        :fill="`url(#linear-left-${id})`"
        class="title-7-left-line-down"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5} ${height * 0.5 - height * 0.009},
          ${width + width * 0.05} ${height * 0.5 - height * 0.009},
          ${width + width * 0.05} ${height * 0.5},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5} ${height * 0.5}
        `"
        :fill="`url(#linear-right-${id})`"
        class="title-7-right-line-down"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.052 + titleWidth * 0.5} ${height * 0.788},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5} ${height * 0.5},
          ${width * 0.5 + width * 0.07 + titleWidth * 0.5} ${height * 0.5},
          ${width * 0.5 + width * 0.059 + titleWidth * 0.5} ${height * 0.788}
        `"
        :stroke="mergedColor[2]"
        stroke-width="1"
        fill="none"
        class="title-7-right-line-down"
      />

      <polyline
        :points="`
          ${width * 0.5 + width * 0.0520 + titleWidth * 0.5 + width * 0.015} ${height * 0.788},
          ${width * 0.5 + width * 0.0625 + titleWidth * 0.5 + width * 0.015} ${height * 0.5},
          ${width * 0.5 + width * 0.0700 + titleWidth * 0.5 + width * 0.015} ${height * 0.5},
          ${width * 0.5 + width * 0.0590 + titleWidth * 0.5 + width * 0.015} ${height * 0.788}
        `"
        :stroke="mergedColor[2]"
        stroke-width="1"
        fill="none"
        class="title-7-right-line-down"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.052 - titleWidth * 0.5} ${height * 0.788},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5} ${height * 0.5},
          ${width * 0.5 - width * 0.07 - titleWidth * 0.5} ${height * 0.5},
          ${width * 0.5 - width * 0.059 - titleWidth * 0.5} ${height * 0.788}
        `"
        :stroke="mergedColor[2]"
        stroke-width="1"
        fill="none"
        class="title-7-right-line-down"
      />

      <polyline
        :points="`
          ${width * 0.5 - width * 0.0520 - titleWidth * 0.5 - width * 0.015} ${height * 0.788},
          ${width * 0.5 - width * 0.0625 - titleWidth * 0.5 - width * 0.015} ${height * 0.5},
          ${width * 0.5 - width * 0.0700 - titleWidth * 0.5 - width * 0.015} ${height * 0.5},
          ${width * 0.5 - width * 0.0590 - titleWidth * 0.5 - width * 0.015} ${height * 0.788}
        `"
        :stroke="mergedColor[2]"
        stroke-width="1"
        fill="none"
        class="title-7-right-line-down"
      />
    </svg>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: "Title7",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    }
  },
  data() {
    const id = uuid()
    return {
      ref: 'title-7',
      filterId: `title-7-filterId-${id}`,
      // defaultColor: ['#52ffff', '#1f33a2'],
      defaultColor: ['#7fffff', '#57fffc', '#009caa', '#00ffc5', '#0090ff'],
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
