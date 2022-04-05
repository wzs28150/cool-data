<template>
  <div class="border-box-6" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon
        :fill="props.backgroundColor"
        :points="`
          9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}
        `"
      />

      <circle :fill="data.mergedColor[1]" cx="5" cy="5" r="2" />
      <circle :fill="data.mergedColor[1]" :cx="width - 5" cy="5" r="2" />
      <circle :fill="data.mergedColor[1]" :cx="width - 5" :cy="height - 5" r="2" />
      <circle :fill="data.mergedColor[1]" cx="5" :cy="height - 5" r="2" />
      <polyline :stroke="data.mergedColor[0]" :points="`10, 4 ${width - 10}, 4`" />
      <polyline
        :stroke="data.mergedColor[0]"
        :points="`10, ${height - 4} ${width - 10}, ${height - 4}`"
      />
      <polyline :stroke="data.mergedColor[0]" :points="`5, 70 5, ${height - 70}`" />
      <polyline :stroke="data.mergedColor[0]" :points="`${width - 5}, 70 ${width - 5}, ${height - 70}`" />
      <polyline :stroke="data.mergedColor[0]" :points="`3, 10, 3, 50`" />
      <polyline :stroke="data.mergedColor[0]" :points="`7, 30 7, 80`" />
      <polyline :stroke="data.mergedColor[0]" :points="`${width - 3}, 10 ${width - 3}, 50`" />
      <polyline :stroke="data.mergedColor[0]" :points="`${width - 7}, 30 ${width - 7}, 80`" />
      <polyline :stroke="data.mergedColor[0]" :points="`3, ${height - 10} 3, ${height - 50}`" />
      <polyline :stroke="data.mergedColor[0]" :points="`7, ${height - 30} 7, ${height - 80}`" />
      <polyline
        :stroke="data.mergedColor[0]"
        :points="`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`"
      />
      <polyline
        :stroke="data.mergedColor[0]"
        :points="`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox6">
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
  ref: 'border-box-6',
  defaultColor: ['rgba(255, 255, 255, 0.35)', 'gray'],
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