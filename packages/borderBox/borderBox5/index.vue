<template>
  <div class="border-box-5" :ref="data.ref">
    <svg
      :class="`border-svg-container  ${props.reverse && 'reverse'}`"
      :width="width"
      :height="height"
    >
      <polygon
        :fill="props.backgroundColor"
        :points="`
          10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}
        `"
      />

      <polyline
        class="bb5-line-1"
        :stroke="data.mergedColor[0]"
        :points="`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
        ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`"
      />
      <polyline
        class="bb5-line-2"
        :stroke="data.mergedColor[1]"
        :points="`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
        ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`"
      />
      <polyline
        class="bb5-line-3"
        :stroke="data.mergedColor[1]"
        :points="`50, 13 ${width - 35}, 13`"
      />
      <polyline
        class="bb5-line-4"
        :stroke="data.mergedColor[1]"
        :points="`15, 20 ${width - 35}, 20`"
      />
      <polyline
        class="bb5-line-5"
        :stroke="data.mergedColor[1]"
        :points="`15, ${height - 20} ${width - 110}, ${height - 20}`"
      />
      <polyline
        class="bb5-line-6"
        :stroke="data.mergedColor[1]"
        :points="`15, ${height - 13} ${width - 110}, ${height - 13}`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox5">
import autoResize from '../../util/autoResize';
import { deepMerge, deepClone } from '../../util/index'
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

const data = reactive({
  ref: 'border-box-5',
  defaultColor: ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'],
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