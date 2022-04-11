<template>
<!-- border: 1px solid ${data.mergedColor[0]}; -->
  <div
    class="border-box-13"
    :style="`background-color: ${props.backgroundColor};box-shadow: inset 0 0 15px ${data.mergedColor[0]};`"
    :ref="data.ref"
  >
    <svg class="border-svg-container" :width="width" :height="height">
      <polyline class="bb13-line-width-2" :stroke="data.mergedColor[0]" :points="`0,0 ${width},0 ${width},${height} 0, ${height} 0,0`" opacity="0.5" />


      <polyline class="bb13-line-width-5" :stroke="data.mergedColor[1]" :points="`0, 10 0, 0 10, 0`" />
      <polyline
        class="bb13-line-width-5"
        :stroke="data.mergedColor[1]"
        :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`"
      />
      <polyline
        class="bb13-line-width-5"
        :stroke="data.mergedColor[1]"
        :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`"
      />
      <polyline
        class="bb13-line-width-5"
        :stroke="data.mergedColor[1]"
        :points="`0, ${height - 10} 0, ${height} 10, ${height}`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox7">
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
  ref: 'border-box-13',
  defaultColor: ['#185bff', '#185bff'],
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