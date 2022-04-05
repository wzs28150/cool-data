<template>
  <div class="border-box-2" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon :fill="props.backgroundColor"  :points="`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `" />

      <polyline
        :stroke="data.mergedColor[0]"
        :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`"
      />
      <polyline
        :stroke="data.mergedColor[1]"
        :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`"
      />
      <circle :fill="data.mergedColor[0]" cx="11" cy="11" r="1" />
      <circle :fill="data.mergedColor[0]" :cx="width - 11" cy="11" r="1" />
      <circle :fill="data.mergedColor[0]" :cx="width - 11" :cy="height - 11" r="1" />
      <circle :fill="data.mergedColor[0]" cx="11" :cy="height - 11" r="1" />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox2">
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
  }
})

const data = reactive({
  ref: 'border-box-2',
  defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],
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