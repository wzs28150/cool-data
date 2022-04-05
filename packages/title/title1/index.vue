<template>
  <div class="title-1 title" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="data.filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <!-- <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" /> -->
          <feFlood :flood-color="data.mergedColor[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polyline
        :points="`0 ${height * 0.75},${width * 0.087} ${height * 0.75},${width * 0.1} ${height * 0.4}, ${width * 0.16} ${height * 0.4},${width * 0.166} ${height * 0.57},${width / 2 - data.titleWidth / 2 - 18 - 75} ${height * 0.57}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />
      <polyline
        :points="`${width * 0.17} ${height * 0.45},${width * 0.3} ${height * 0.45}`"
        :stroke="data.mergedColor[0]"
        stroke-dasharray="2 2"
        stroke-width="1"
      />
      <polyline
        :points="`${width * 0.17} ${height * 0.45}, ${width * 0.18} ${height * 0.45}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
      />
      <polyline
        :points="`${width * 0.29} ${height * 0.45}, ${width * 0.3} ${height * 0.45}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
      />
      <circle
        :cx="`${width * 0.107}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c1"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        :cx="`${width * 0.123}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c2"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="0.25s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        :cx="`${width * 0.138}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c3"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="0.75s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        :cx="`${width * 0.153}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c4"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        :cx="`${width / 2 - data.titleWidth / 2 - 10 - 75}`"
        :cy="height * 0.57"
        r="7"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <text
        class="border-box-1-title"
        :x="`${width / 2}`"
        :y="`${height * 0.57}`"
        :fill="data.mergedColor[1]"
        font-size="32"
        font-family="shishang"
        text-anchor="middle"
        dominant-baseline="middle"
        :style="`text-shadow: 0 0 5px ${data.mergedColor[1]};`"
        ref="text"
        letter-spacing="4"
      >{{ title }}</text>

      <circle
        :cx="`${width / 2 + data.titleWidth / 2 + 10 + 75}`"
        :cy="height * 0.57"
        r="7"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />
      <polyline
        :points="`${width} ${height * 0.75},${width * 0.913} ${height * 0.75},${width * 0.9} ${height * 0.4},${width * 0.84} ${height * 0.4},${width * 0.834} ${height * 0.57},${width / 2 + data.titleWidth / 2 + 18 + 75} ${height * 0.57}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        fill="none"
      />

      <circle
        :cx="`${width * 0.893}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c1"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        :cx="`${width * 0.877}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c2"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="0.25s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        :cx="`${width * 0.862}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c3"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="0.75s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        :cx="`${width * 0.847}`"
        :cy="height * 0.7 - 2"
        r="6"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
        :fill="data.mergedColor[0]"
        class="c4"
        fill-opacity="1"
      >
        <animate
          attributeName="fill-opacity"
          values="1;0;1"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
      <polyline
        :points="`${width * 0.83} ${height * 0.45},${width * 0.7} ${height * 0.45}`"
        :stroke="data.mergedColor[0]"
        stroke-dasharray="2 2"
        stroke-width="1"
      />
      <polyline
        :points="`${width * 0.83} ${height * 0.45}, ${width * 0.82} ${height * 0.45}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
      />
      <polyline
        :points="`${width * 0.71} ${height * 0.45}, ${width * 0.7} ${height * 0.45}`"
        :stroke="data.mergedColor[0]"
        stroke-width="2"
      />
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
  ref: 'title-1',
  filterId: `title-1-filterId-${id}`,
  defaultColor: ['#8aaafb', '#8aaafb'],
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