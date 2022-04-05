<template>
  <div class="loading-3 data-loading" :ref="data.ref">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
      :width="width"
      :height="height ? height - data.textHeight : 0"
    >
      <rect x="38" y="40" width="4" height="10" fill="#fff">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="48" y="40" width="4" height="10" fill="#fff">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="58" y="40" width="4" height="10" fill="#fff">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <div class="loading-text" ref="text">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="Loading3">
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
  ref: 'loading-3',
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