<template>
  <div class="border-box-9" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <linearGradient :id="data.gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
          <animate
            attributeName="x1"
            values="0%;100%;0%"
            dur="10s"
            begin="0s"
            repeatCount="indefinite"
          />

          <animate
            attributeName="x2"
            values="100%;0%;100%"
            dur="10s"
            begin="0s"
            repeatCount="indefinite"
          />

          <stop offset="0%" :stop-color="data.mergedColor[0]">
            <animate
              attributeName="stop-color"
              :values="`${data.mergedColor[0]};${data.mergedColor[1]};${data.mergedColor[0]}`"
              dur="10s"
              begin="0s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" :stop-color="data.mergedColor[1]">
            <animate
              attributeName="stop-color"
              :values="`${data.mergedColor[1]};${data.mergedColor[0]};${data.mergedColor[1]}`"
              dur="10s"
              begin="0s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        <mask :id="data.maskId">
          <polyline
            stroke="#fff"
            stroke-width="3"
            fill="transparent"
            :points="`8, ${height * 0.4} 8, 3, ${width * 0.4 + 7}, 3`"
          />
          <polyline
            fill="#fff"
            :points="
  `8, ${height * 0.15} 8, 3, ${width * 0.1 + 7}, 3
              ${width * 0.1}, 8 14, 8 14, ${height * 0.15 - 7}
            `"
          />

          <polyline
            stroke="#fff"
            stroke-width="3"
            fill="transparent"
            :points="`${width * 0.5}, 3 ${width - 3}, 3, ${width - 3}, ${height * 0.25}`"
          />
          <polyline
            fill="#fff"
            :points="`
              ${width * 0.52}, 3 ${width * 0.58}, 3
              ${width * 0.58 - 7}, 9 ${width * 0.52 + 7}, 9
            `"
          />
          <polyline
            fill="#fff"
            :points="`
              ${width * 0.9}, 3 ${width - 3}, 3 ${width - 3}, ${height * 0.1}
              ${width - 9}, ${height * 0.1 - 7} ${width - 9}, 9 ${width * 0.9 + 7}, 9
            `"
          />

          <polyline
            stroke="#fff"
            stroke-width="3"
            fill="transparent"
            :points="`8, ${height * 0.5} 8, ${height - 3} ${width * 0.3 + 7}, ${height - 3}`"
          />
          <polyline
            fill="#fff"
            :points="`
              8, ${height * 0.55} 8, ${height * 0.7}
              2, ${height * 0.7 - 7} 2, ${height * 0.55 + 7}
            `"
          />

          <polyline
            stroke="#fff"
            stroke-width="3"
            fill="transparent"
            :points="`${width * 0.35}, ${height - 3} ${width - 3}, ${height - 3} ${width - 3}, ${height * 0.35}`"
          />
          <polyline
            fill="#fff"
            :points="`
              ${width * 0.92}, ${height - 3} ${width - 3}, ${height - 3} ${width - 3}, ${height * 0.8}
              ${width - 9}, ${height * 0.8 + 7} ${width - 9}, ${height - 9} ${width * 0.92 + 7}, ${height - 9}
            `"
          />
        </mask>
      </defs>

      <polygon
        :fill="props.backgroundColor"
        :points="`
          15, 9 ${width * 0.1 + 1}, 9 ${width * 0.1 + 4}, 6 ${width * 0.52 + 2}, 6
          ${width * 0.52 + 6}, 10 ${width * 0.58 - 7}, 10 ${width * 0.58 - 2}, 6
          ${width * 0.9 + 2}, 6 ${width * 0.9 + 6}, 10 ${width - 10}, 10 ${width - 10}, ${height * 0.1 - 6}
          ${width - 6}, ${height * 0.1 - 1} ${width - 6}, ${height * 0.8 + 1} ${width - 10}, ${height * 0.8 + 6}
          ${width - 10}, ${height - 10} ${width * 0.92 + 7}, ${height - 10}  ${width * 0.92 + 2}, ${height - 6}
          11, ${height - 6} 11, ${height * 0.15 - 2} 15, ${height * 0.15 - 7}
        `"
      />

      <rect
        x="0"
        y="0"
        :width="width"
        :height="height"
        :fill="`url(#${data.gradientId})`"
        :mask="`url(#${data.maskId})`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox7">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive } from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

const id = uuid()

const data = reactive({
  ref: 'border-box-9',
  gradientId: `border-box-9-gradient-${id}`,
  maskId: `border-box-9-mask-${id}`,

  defaultColor: ['#11eefd', '#0078d2'],
  mergedColor: []
})
// 处理尺寸
const { width, height } = autoResize(data.ref)

const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
})
</script>