<template>
  <div class="title-3 title" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="data.filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="data.mergedColor[1]" result="glowColor" />
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

      <text
        class="title-3-title"
        :x="`${width / 2}`"
        :y="height * 0.19"
        :fill="data.mergedColor[0]"
        font-size="32"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        letter-spacing="4"
        :style="`text-shadow: 0 0 5px ${data.mergedColor[0]};`"
      >{{ title }}</text>
      <g >

        <polyline
          v-for="i in 10"
          :key="`lxx${i}`"
          :points="`${width * 0.258 + width * 0.007 * i} ${height * 0.135}, 
          ${width * 0.262 + width * 0.007 * i} ${height * 0.135},
          ${width * 0.256 + width * 0.007 * i} ${height * 0.23}, 
          ${width * 0.252 + width * 0.007 * i} ${height * 0.23}`"
          :fill="data.mergedColor[0]"
          fill-opacity="1"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.5;1"
            dur="2s"
            :begin="`${i * 0.1}s`"
            repeatCount="indefinite"
          />
        </polyline>

        <polyline
          v-for="i in 10"
          :key="`lx${i}`"
          :points="`${width - width * 0.258 - width * 0.007 * i} ${height * 0.135}, 
          ${width - width * 0.262 - width * 0.007 * i} ${height * 0.135},
          ${width - width * 0.256 - width * 0.007 * i} ${height * 0.23}, 
          ${width - width * 0.252 +- width * 0.007 * i} ${height * 0.23}`"
          :fill="data.mergedColor[0]"
          fill-opacity="1"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.5;1"
            dur="2s"
            :begin="`${i * 0.1}s`"
            repeatCount="indefinite"
          />
        </polyline>

      </g>

      <g class="title-3-center-line">
        <circle
          :cx="`${width * 0.107}`"
          :cy="height * 0.27"
          r="7"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />
        <polyline
          :points="`${width * 0.107 + 7} ${height * 0.27}, 
          ${width * 0.23} ${height * 0.27},
          ${width * 0.25} ${height * 0.45},
          ${width * 0.5} ${height * 0.45}`"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />

        <circle
          :cx="`${width * 0.893}`"
          :cy="height * 0.27"
          r="7"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />

        <polyline
          :points="`${width * 0.893 - 7} ${height * 0.27}, 
          ${width * 0.893 - 7 - width * 0.123} ${height * 0.27},
          ${width * 0.893 - 7 - width * 0.143} ${height * 0.45},
          ${width * 0.5} ${height * 0.45}
          `"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />

        <rect
          :x="width * 0.35"
          :y="height * 0.45 - 5"
          :rx="width * 0.2"
          ry="10"
          :width="width * 0.3"
          height="10"
          :fill="data.mergedColor[0]"
          fill-opacity="0.6"
          :filter="`url(#f3)`"
        />
      </g>

      <g class="title-3-left-line">
        <circle
          :cx="`${width * 0.151 + 7}`"
          :cy="height * 0.162"
          r="7"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`${width * 0.151 + 7 + width * 0.014} 0,
            ${width * 0.151 + 7 + width * 0.021} 0,
            ${width * 0.151 + 7 + width * 0.031} ${height * 0.11},
            ${width * 0.151 + 7 + width * 0.024} ${height * 0.11}
          `"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`${width * 0.151 + 7 + width * 0.014 + width * 0.015} 0,
            ${width * 0.151 + 7 + width * 0.021 + width * 0.015} 0,
            ${width * 0.151 + 7 + width * 0.036 + width * 0.015} ${height * 0.17},
            ${width * 0.151 + 7 + width * 0.029 + width * 0.015} ${height * 0.17}
          `"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`${width * 0.151 + 7 + width * 0.013 + width * 0.015 * 2} 0,
            ${width * 0.151 + 7 + width * 0.02 + width * 0.015 * 2} 0,
            ${width * 0.151 + 7 + width * 0.04 + width * 0.015 * 2} ${height * 0.22},
            ${width * 0.151 + 7 + width * 0.033 + width * 0.015 * 2} ${height * 0.22}
          `"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`${width * 0.151} ${height * 0.162},
          ${width * 0.06} ${height * 0.162},
          ${width * 0.05} ${height * 0.08},
          ${9 + width * 0.015} ${height * 0.08},
          9 ${height * 0.22},
          9 ${height * 0.95 - 7}
          `"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />

        

        <polyline
          v-for="i in 4"
          :key="`k${i}`"
          :points="`${9 + width * 0.015 + width * 0.007 * (i - 1)} ${height * 0.14},
            ${9 + width * 0.02 + width * 0.007 * (i - 1)} ${height * 0.14},
            ${9 + width * 0.017 + width * 0.007 * (i - 1)} ${height * 0.2},
            ${9 + width * 0.012 + width * 0.007 * (i - 1)} ${height * 0.2}
          `"
          :filter="`url(#${data.filterId})`"
          :fill="data.mergedColor[0]"
          fill-opacity="1"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.4;1"
            dur="2s"
            :begin="`${i * 0.25}s`"
            repeatCount="indefinite"
          />
        </polyline>


        <circle
          :cx="9"
          :cy="height * 0.95"
          r="7"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />
      </g>

      <g class="title-3-right-line">
        <circle
          :cx="`${width * 0.849 - 7}`"
          :cy="height * 0.162"
          r="7"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`
            ${width * 0.849 - 7 - width * 0.014} 0,
            ${width * 0.849 - 7 - width * 0.021} 0,
            ${width * 0.849 - 7 - width * 0.031} ${height * 0.11},
            ${width * 0.849 - 7 - width * 0.024} ${height * 0.11}
          `"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`
            ${width * 0.849 - 7 - width * 0.014 - width * 0.015} 0,
            ${width * 0.849 - 7 - width * 0.021 - width * 0.015} 0,
            ${width * 0.849 - 7 - width * 0.036 - width * 0.015} ${height * 0.17},
            ${width * 0.849 - 7 - width * 0.029 - width * 0.015} ${height * 0.17}
          `"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`
            ${width * 0.849 - 7 - width * 0.013 - width * 0.015 * 2} 0,
            ${width * 0.849 - 7 - width * 0.02 - width * 0.015 * 2} 0,
            ${width * 0.849 - 7 - width * 0.04 - width * 0.015 * 2} ${height * 0.22},
            ${width * 0.849 - 7 - width * 0.033 - width * 0.015 * 2} ${height * 0.22}
          `"
          :fill="data.mergedColor[0]"
        />

        <polyline
          :points="`${width * 0.849} ${height * 0.162},
          ${width * 0.98} ${height * 0.162},
          ${width - 3} ${height * 0.345}
          `"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        />

        <polyline
          :points="`
          ${width * 0.98} ${height * 0.24},
          ${width * 0.99} ${height * 0.34},
          ${width * 0.98} ${height * 0.34}
          `"
          :fill="data.mergedColor[0]"
        />

        <circle
          v-for="i in 5"
          :key="`s${i}`"
          :cx="`${width - 3}`"
          :cy="`${height * 0.38 + height * 0.04 * (i-1)}`"
          r="3"
          :filter="`url(#${data.filterId})`"
          :fill="data.mergedColor[0]"
          fill-opacity="1"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.4;1"
            dur="2s"
            :begin="`${i * 0.20}s`"
            repeatCount="indefinite"
          />
        </circle>
      </g>
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


const data = reactive({
  ref: 'title-3',
  filterId: `title-3-filterId-${id}`,
  defaultColor: ['#8aaafb', '#1f33a2'],
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
})

</script>