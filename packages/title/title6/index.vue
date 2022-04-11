<template>
  <div class="title-6 title" :ref="data.ref">
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

        <filter :id="`inset-shadow-${id}`" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="10" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood :flood-color="data.mergedColor[0]" flood-opacity="0.5" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="70%" :style="`stop-color:${data.mergedColor[0]};stop-opacity:0`" />
          <stop offset="100%" :style="`stop-color:${data.mergedColor[0]};stop-opacity:1`" />
        </radialGradient>
      </defs>

      <polyline
        :points="`
          ${width * 0.5} 1,
          ${width * 0.5 - width * 0.153 - data.titleWidth * 0.5} 1,
          ${width * 0.5 - width * 0.160 - data.titleWidth * 0.5} ${height * 0.116},
          ${width * 0.5 - width * 0.160 - data.titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 - width * 0.141 - data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.089 - data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.081 - data.titleWidth * 0.5} ${height * 0.872},

          ${width * 0.5 + width * 0.081 + data.titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 + width * 0.089 + data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.141 + data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.160 + data.titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 + width * 0.160 + data.titleWidth * 0.5} ${height * 0.116},
          ${width * 0.5 + width * 0.153 + data.titleWidth * 0.5} 1,
          ${width * 0.5} 1
        `"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="title-6-center-out"
      />

      <polyline
        :points="`
          ${width * 0.5} ${height * 0.127},
          ${width * 0.5 - width * 0.147 - data.titleWidth * 0.5} ${height * 0.127},
          ${width * 0.5 - width * 0.155 - data.titleWidth * 0.5} ${height * 0.267},
          ${width * 0.5 - width * 0.155 - data.titleWidth * 0.5} ${height * 0.488},
          ${width * 0.5 - width * 0.141 - data.titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 - width * 0.089 - data.titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 - width * 0.083 - data.titleWidth * 0.5} ${height * 0.755},
          ${width * 0.5 + width * 0.083 + data.titleWidth * 0.5} ${height * 0.755},
          ${width * 0.5 + width * 0.089 + data.titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 + width * 0.141 + data.titleWidth * 0.5} ${height * 0.872},
          ${width * 0.5 + width * 0.155 + data.titleWidth * 0.5} ${height * 0.488},
          ${width * 0.5 + width * 0.155 + data.titleWidth * 0.5} ${height * 0.267},
          ${width * 0.5 + width * 0.147 + data.titleWidth * 0.5} ${height * 0.127},
          ${width * 0.5} ${height * 0.127}
        `"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="title-6-center-in"
      />

      <polyline
        v-for="i in 3"
        :key="`k${i}`"
        :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.132 + width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.121 + width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.127 + width * 0.015 * (i - 1)} ${height * 0.81},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.137 + width * 0.015 * (i - 1)} ${height * 0.81}
        `"
        :filter="`url(#f3)`"
        :fill="data.mergedColor[1]"
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
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.132 - width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.121 - width * 0.015 * (i - 1)} ${height * 0.697},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.127 - width * 0.015 * (i - 1)} ${height * 0.81},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.137 - width * 0.015 * (i - 1)} ${height * 0.81}
        `"
        :filter="`url(#f3)`"
        :fill="data.mergedColor[1]"
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
          ${width * 0.5 - width * 0.1875 - data.titleWidth * 0.5} ${height * 0.418},
          ${width * 0.5 - width * 0.164 - data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.148 - data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 - width * 0.168 - data.titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 - width * 0.168 - data.titleWidth * 0.5} ${height * 0.2},
          ${width * 0.5 - width * 0.163 - data.titleWidth * 0.5} 1,
          ${width * 0.02} 1,
          ${width * 0.01} ${height * 0.418}
        `"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="title-6-left"
      />

      <polyline
        :points="`
          ${width * 0.99} ${height * 0.418},
          ${width * 0.5 + width * 0.1875 + data.titleWidth * 0.5} ${height * 0.418},
          ${width * 0.5 + width * 0.164 +data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.148 +data.titleWidth * 0.5} ${height - 1},
          ${width * 0.5 + width * 0.168 +data.titleWidth * 0.5} ${height * 0.511},
          ${width * 0.5 + width * 0.168 +data.titleWidth * 0.5} ${height * 0.2},
          ${width * 0.5 + width * 0.163 +data.titleWidth * 0.5} 1,
          ${width * 0.98} 1,
          ${width * 0.99} ${height * 0.418}
        `"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[2]"
        :filter="`url(#inset-shadow-${id})`"
        class="title-6-left"
      />

      <text
        class="title-6-title"
        :x="`${width / 2}`"
        :y="height * 0.48"
        :fill="data.mergedColor[1]"
        font-size="30"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        ref="text"
        :style="`text-shadow: 0 0 5px ${data.mergedColor[1]};`"
        letter-spacing="6"
      >{{ title }}</text>
    </svg>
  </div>
</template>


<script setup name="Title6">
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
  ref: 'title-6',
  filterId: `title-6-filterId-${id}`,
  defaultColor: ['#1d6c7d', '#57fffc', '#08192d'],
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
  data.titleWidth = text.value.getBoundingClientRect().width
})

</script>