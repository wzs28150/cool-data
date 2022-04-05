<template>
  <div class="border-box-8" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <path :id="data.path" :d="pathD" fill="transparent" />
        <radialGradient :id="data.gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>

        <mask :id="data.mask">
          <circle cx="0" cy="0" r="150" :fill="`url(#${data.gradient})`">
            <animateMotion :dur="`${dur}s`" :path="pathD" rotate="auto" repeatCount="indefinite" />
          </circle>
        </mask>
      </defs>

      <polygon
        :fill="props.backgroundColor"
        :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`"
      />

      <use :stroke="data.mergedColor[0]" stroke-width="1" :xlink:href="`#${data.path}`" />

      <use
        :stroke="data.mergedColor[1]"
        stroke-width="3"
        :xlink:href="`#${data.path}`"
        :mask="`url(#${data.mask})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${length}`"
          :to="`${length}, 0`"
          :dur="`${props.dur}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="BorderBox8">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  dur: {
    type: Number,
    default: 3
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
  ref: 'border-box-8',
  path: `border-box-8-path-${id}`,
  gradient: `border-box-8-gradient-${id}`,
  mask: `border-box-8-mask-${id}`,
  defaultColor: ['#235fa7', '#4fd2dd'],
  mergedColor: []
})

const pathD = ref()
const length = ref()

// 处理尺寸
const { width, height } = autoResize(data.ref, (width, height) => {
  if (props.reverse) {
    pathD.value = `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`
  } else {
    pathD.value = `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
  }
  length.value = (width + height - 5) * 2
})

const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
})
</script>