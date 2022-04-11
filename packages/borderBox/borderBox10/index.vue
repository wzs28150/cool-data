<template>
  <div class="border-box-10" :ref="data.ref" :style="`box-shadow: inset 0 0 25px 3px ${data.mergedColor[0]}`">
    <svg class="border-svg-container" :width="width" :height="height">
      <polygon
        :fill="props.backgroundColor"
        :points="`
          4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
          4, ${height} 0, ${height - 4} 0, 4
        `"
      />
    </svg>

    <svg
      width="150px"
      height="150px"
      :key="item"
      v-for="item in data.border"
      :class="`${item} border-svg-container`"
    >
      <polygon :fill="data.mergedColor[1]" points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3" />
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
  ref: 'border-box-10',
  border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],
  defaultColor: ['#1d48c4', '#d3e1f8'],
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