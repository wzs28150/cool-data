<template>
  <div class="border-box-3" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon
        :fill="props.backgroundColor"
        :points="`
          23, 23 ${width - 24}, 23 ${width - 24}, ${height - 24} 23, ${height - 24}
        `"
      />

      <polyline
        class="bb3-line1"
        :stroke="data.mergedColor[0]"
        :points="`4, 4 ${width - 22} ,4 ${width - 22}, ${height - 22} 4, ${height - 22} 4, 4`"
      />
      <polyline
        class="bb3-line2"
        :stroke="data.mergedColor[1]"
        :points="`10, 10 ${width - 16}, 10 ${width - 16}, ${height - 16} 10, ${height - 16} 10, 10`"
      />
      <polyline
        class="bb3-line2"
        :stroke="data.mergedColor[1]"
        :points="`16, 16 ${width - 10}, 16 ${width - 10}, ${height - 10} 16, ${height - 10} 16, 16`"
      />
      <polyline
        class="bb3-line2"
        :stroke="data.mergedColor[1]"
        :points="`22, 22 ${width - 4}, 22 ${width - 4}, ${height - 4} 22, ${height - 4} 22, 22`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup name="BorderBox3">
import autoResize from '../../util/autoResize';
import { deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive} from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  backgroundOpacity: {
    type: Number,
    default: 1
  }
})

const data = reactive({
  ref: 'border-box-3',
  defaultColor: ['#2862b7', '#2862b7'],
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