<template>
  <div
    class="border-box-7"
    :style="`box-shadow: inset 0 0 40px ${data.mergedColor[0]}; border: 1px solid ${data.mergedColor[0]}; background-color: ${props.backgroundColor}`"
    :ref="data.ref"
  >
    <svg class="border-svg-container" :width="width" :height="height">
      <polyline class="bb7-line-width-2" :stroke="data.mergedColor[0]" :points="`0, 25 0, 0 25, 0`" />
      <polyline
        class="bb7-line-width-2"
        :stroke="data.mergedColor[0]"
        :points="`${width - 25}, 0 ${width}, 0 ${width}, 25`"
      />
      <polyline
        class="bb7-line-width-2"
        :stroke="data.mergedColor[0]"
        :points="`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`"
      />
      <polyline
        class="bb7-line-width-2"
        :stroke="data.mergedColor[0]"
        :points="`0, ${height - 25} 0, ${height} 25, ${height}`"
      />

      <polyline class="bb7-line-width-5" :stroke="data.mergedColor[1]" :points="`0, 10 0, 0 10, 0`" />
      <polyline
        class="bb7-line-width-5"
        :stroke="data.mergedColor[1]"
        :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`"
      />
      <polyline
        class="bb7-line-width-5"
        :stroke="data.mergedColor[1]"
        :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`"
      />
      <polyline
        class="bb7-line-width-5"
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
  ref: 'border-box-7',
  defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.8)'],
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