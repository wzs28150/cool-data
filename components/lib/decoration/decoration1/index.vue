<template>
  <div class="decoration-1 decoration" :ref="ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>
        <filter :id="`inset-shadow-${id}`" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="20" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood :flood-color="mergedColor[0]" flood-opacity="0.3" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>
      <g style="transform: rotateX(75deg);transform-origin: center;">
        <circle
          :r="width ? width * 0.5 - 2 : width * 0.5"
          :cx="width * 0.5"
          :cy="height * 0.5"
          :stroke="mergedColor[0]"
          stroke-width="2"
          :fill="mergedColor[2]"
          :fill-opacity="1"
          :filter="`url(#inset-shadow-${id})`"
        />

        <circle
          :r="width? width * 0.3 - 8 : width * 0.3"
          :cx="width * 0.5"
          :cy="height * 0.5"
          stroke-dasharray="15 10"
          :stroke="mergedColor[0]"
          stroke-width="8"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            :from="`0,${width * 0.5},${height * 0.5}`"
            :to="`-360,${width * 0.5},${height * 0.5}`"
            begin="0s"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          :r="width? width * 0.3 - 2 : width * 0.3"
          :cx="width * 0.5"
          :cy="height * 0.5"
          :stroke="mergedColor[0]"
          stroke-width="2"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            :from="`0,${width * 0.5},${height * 0.5}`"
            :to="`-360,${width * 0.5},${height * 0.5}`"
            begin="0s"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        

        <circle
          :r="width ? width * 0.2 - 15 : width * 0.2"
          :cx="width * 0.5"
          :cy="height * 0.5"
          stroke-dasharray="6 12"
          :stroke="mergedColor[0]"
          stroke-width="15"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            :from="`0,${width * 0.5},${height * 0.5}`"
            :to="`360,${width * 0.5},${height * 0.5}`"
            begin="0s"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
import { uuid, deepMerge, deepClone } from '../../../util/index'
import { fade } from '../../../util/color'
export default {
  name: "Decoration1",
  mixins: [autoResize],
  props: {
    title: {
      type: String
    }
  },
  data() {
    const id = uuid()
    return {
      ref: 'decoration-1',
      filterId: `decoration-1-filterId-${id}`,
      // defaultColor: ['#52ffff', '#1f33a2'],
      defaultColor: ['#8aaafb', '#ffffff', '#08192d'],
      mergedColor: [],
      titleWidth: 0,
      id
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
