<template>
  <div class="loading-4 data-loading" :ref="data.ref">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
      :width="width"
      :height="height ? height - data.textHeight : 0"
    >
      <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
    <div class="loading-text" ref="text">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="Loading4">
import autoResize from '../../util/autoResize';
import { deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  }
})
const text = ref()
const data = reactive({
  ref: 'loading-4',
  defaultColor: ['#8aaafb', '#8aaafb'],
  mergedColor: [],
  textHeight: 0
})
// 处理尺寸
const { width, height } = autoResize(data.ref)
// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
  data.textHeight = text.value.offsetHeight
})

</script>