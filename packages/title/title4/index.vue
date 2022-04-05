<template>
  <div class="title-4 title" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="data.filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="data.mergedColor[0]" result="glowColor" />
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
      </defs>

      <polyline
        :points="`
          ${width * 0.5} 0,
          ${width * 0.5 - width * 0.02 - data.titleWidth * 0.5} 0,
          ${width * 0.5 - width * 0.028 - data.titleWidth * 0.5} ${height * 0.18},
          ${width * 0.5 - width * 0.008 - data.titleWidth * 0.5} ${height * 0.59},
          ${width * 0.5 + width * 0.008 + data.titleWidth * 0.5} ${height * 0.59},
          ${width * 0.5 + width * 0.028 + data.titleWidth * 0.5} ${height * 0.18},
          ${width * 0.5 + width * 0.02 + data.titleWidth * 0.5} 0,
          ${width * 0.5} 0
        `"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.6"
      />

      <text
        class="title-4-title"
        :x="`${width / 2}`"
        :y="height * 0.34"
        :fill="data.mergedColor[1]"
        font-size="30"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        ref="text"
        :style="`text-shadow: 0 0 5px ${data.mergedColor[1]};`"
        letter-spacing="4"
      >{{ title }}</text>

      <polyline
        class="title-4-center-bottom"
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.046} ${height * 0.53},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.0365} ${height * 0.72},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.029} ${height * 0.72},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.022} ${height * 0.85},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.005} ${height * 0.85},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.001} ${height * 0.76},
          ${width * 0.5 - data.titleWidth * 0.5 + width * 0.005} ${height * 0.88},

          ${width * 0.5 + data.titleWidth * 0.5 - width * 0.005} ${height * 0.88},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.001} ${height * 0.76},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.005} ${height * 0.85},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.022} ${height * 0.85},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.029} ${height * 0.72},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.0365} ${height * 0.72},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.046} ${height * 0.53}
        `"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <polyline
        v-for="i in 40"
        :key="`k${i}`"
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.058 - width * 0.01 * (i - 1)} ${height * 0.63},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.053 - width * 0.01 * (i - 1)} ${height * 0.63},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.043 - width * 0.01 * (i - 1)} ${height * 0.88},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.048 - width * 0.01 * (i - 1)} ${height * 0.88}
        `"
        :filter="`url(#f3)`"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.6"
      >
        <animate
          attributeName="fill-opacity"
          values="0.6;0.4;0.6"
          dur="2s"
          :begin="`${i * 0.20}s`"
          repeatCount="indefinite"
        />
      </polyline>

      <polyline
        v-for="i in 40"
        :key="`s${i}`"
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.058 + width * 0.01 * (i - 1)} ${height * 0.63},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.053 + width * 0.01 * (i - 1)} ${height * 0.63},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.043 + width * 0.01 * (i - 1)} ${height * 0.88},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.048 + width * 0.01 * (i - 1)} ${height * 0.88}
        `"
        :filter="`url(#f3)`"
        :fill-opacity="0.6"
        :fill="data.mergedColor[0]"
      >
        <animate
          attributeName="fill-opacity"
          values="0.6;0.4;0.6"
          dur="2s"
          :begin="`${i * 0.20}s`"
          repeatCount="indefinite"
        />
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.123} ${height * 0.15},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.056} ${height * 0.15},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.052} ${height * 0.22},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.044} ${height * 0.22},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.044} ${height * 0.36},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.032} ${height * 0.60},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.037} ${height * 0.60},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.049} ${height * 0.36},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.060} ${height * 0.36},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.065} ${height * 0.27},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.11} ${height * 0.27},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.113} ${height * 0.31}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.123} ${height * 0.15},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.056} ${height * 0.15},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.052} ${height * 0.22},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.044} ${height * 0.22},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.044} ${height * 0.36},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.032} ${height * 0.60},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.037} ${height * 0.60},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.049} ${height * 0.36},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.060} ${height * 0.36},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.065} ${height * 0.27},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.11} ${height * 0.27},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.113} ${height * 0.31}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.039} ${height * 0.26},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.022} ${height * 0.60},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.028} ${height * 0.60},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.041} ${height * 0.34}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.039} ${height * 0.26},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.022} ${height * 0.60},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.028} ${height * 0.60},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.041} ${height * 0.34}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.1585} ${height * 0.15},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.127} ${height * 0.15},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.127} ${height * 0.27},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.145} ${height * 0.27},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.148} ${height * 0.31}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.1585} ${height * 0.15},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.127} ${height * 0.15},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.127} ${height * 0.27},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.145} ${height * 0.27},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.148} ${height * 0.31}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.159 - width * 0.004} ${height * 0.15},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.162 - width * 0.004} ${height * 0.15},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.159 - width * 0.004} ${height * 0.20}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.159 + width * 0.004} ${height * 0.15},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.162 + width * 0.004} ${height * 0.15},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.159 + width * 0.004} ${height * 0.20}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.305} ${height * 0.22},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.162} ${height * 0.22},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.157} ${height * 0.31},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.294} ${height * 0.31},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.298} ${height * 0.39},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.305} ${height * 0.31}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.305} ${height * 0.22},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.162} ${height * 0.22},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.157} ${height * 0.31},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.294} ${height * 0.31},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.298} ${height * 0.39},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.305} ${height * 0.31}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.306} ${height * 0.159},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.285} ${height * 0.159},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.306} ${height * 0.202},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.316} ${height * 0.382}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>

      <polyline
        :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.306} ${height * 0.159},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.285} ${height * 0.159},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.306} ${height * 0.202},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.316} ${height * 0.382}
        `"
        :fill="data.mergedColor[0]"
        :fill-opacity="0.7"
      >
      </polyline>
    </svg>
  </div>
</template>


<script setup name="BorderBox1">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  title: {
    type: String
  }
})

const id = uuid()
const text = ref()

const data = reactive({
  ref: 'title-4',
  filterId: `title-4-filterId-${id}`,
  defaultColor: ['#8aaafb', '#ffffff'],
  mergedColor: [],
  titleWidth: 0
})
// 处理尺寸
const { width, height } = autoResize(data.ref)
// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
  data.titleWidth = text.value.clientWidth * 2
})

</script>