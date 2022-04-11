<template>
  <div
    class="module-title module-title-1"
    :style="`--module-title-1-text-color: ${rgb(data.mergedColor[0])};--module-title-1-main-color: ${rgb(data.mergedColor[1])};--module-title-1-circle-color: ${data.mergedColor[2]};`"
  >
    <div class="module-title-module-main">
      <div class="module-title-1-icon">
        <slot name="icon" />
      </div>
      <div class="module-title-1-title">{{ props.title }}</div>
      <div class="module-title-1-btn-list">
        <div
          :class="`item ${index == data.active ? 'on' : ''}`"
          :key="index"
          v-for="(item, index) in props.btnList"
          @click="change"
          :data-index="index"
        >{{ item.label }}</div>
      </div>
    </div>
    <div class="module-title-1-line">
      <div class="module-title-1-line-line"></div>
      <div class="module-title-1-line-circle">
        <div class="module-title-1-line-circle1"></div>
        <div class="module-title-1-line-circle2"></div>
        <div class="module-title-1-line-circle3"></div>
      </div>
    </div>
  </div>
</template>


<script setup name="BorderBox1">
import { getRgbValue } from '../../util/color';
import { deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive } from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  btnList: {
    type: Array,
    default: () => {
      return []
    }
  },
  title: {
    type: String
  }
})

const data = reactive({
  ref: 'title-1',
  active: 0,
  defaultColor: ['#fff', '#1d80da', '#02f4ff'],
  mergedColor: [],
})

// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

const rgb = (color) => {
  return color ? getRgbValue(color) : color
}

const change = (e) => {
  data.active = e.target.dataset.index
}

onMounted(() => {
  mergeColor()
})

</script>