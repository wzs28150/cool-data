<template>
  <div class="border-box-4" :ref="data.ref">
    <svg
      :class="`border-svg-container ${props.reverse && 'reverse'}`"
      :width="width"
      :height="height"
    >
      <polygon
        :fill="props.backgroundColor"
        :points="`
          ${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
          16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}
        `"
      />

      <polyline
        class="bb4-line-1"
        :stroke="data.mergedColor[0]"
        :points="`145, ${height - 5} 40, ${height - 5} 10, ${height - 35}
        10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`"
      />
      <polyline
        :stroke="data.mergedColor[1]"
        class="bb4-line-2"
        :points="`245, ${height - 1} 36, ${height - 1} 14, ${height - 23}
        14, ${height - 100}`"
      />

      <polyline
        class="bb4-line-3"
        :stroke="data.mergedColor[0]"
        :points="`7, ${height - 40} 7, ${height - 75}`"
      />
      <polyline class="bb4-line-4" :stroke="data.mergedColor[0]" :points="`28, 24 13, 41 13, 64`" />
      <polyline class="bb4-line-5" :stroke="data.mergedColor[0]" :points="`5, 45 5, 140`" />
      <polyline class="bb4-line-6" :stroke="data.mergedColor[1]" :points="`14, 75 14, 180`" />
      <polyline
        class="bb4-line-7"
        :stroke="data.mergedColor[1]"
        :points="`55, 11 147, 11 167, 26 250, 26`"
      />
      <polyline class="bb4-line-8" :stroke="data.mergedColor[1]" :points="`158, 5 173, 16`" />
      <polyline
        class="bb4-line-9"
        :stroke="data.mergedColor[0]"
        :points="`200, 17 ${width - 10}, 17`"
      />
      <polyline
        class="bb4-line-10"
        :stroke="data.mergedColor[1]"
        :points="`385, 17 ${width - 10}, 17`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox4">
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
  ref: 'border-box-4',
  defaultColor: ['red', 'rgba(0,0,255,0.8)'],
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