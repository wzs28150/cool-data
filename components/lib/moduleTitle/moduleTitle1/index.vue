<template>
  <div
    class="module-title module-title-1"
    :style="`--module-title-1-text-color: ${rgb(mergedColor[0])};--module-title-1-main-color: ${rgb(mergedColor[1])};--module-title-1-circle-color: ${mergedColor[2]};`"
  >
    <div class="module-title-module-main">
      <div class="module-title-1-icon">
        <slot name="icon" />
      </div>
      <div class="module-title-1-title">{{ title }}</div>
      <div class="module-title-1-btn-list">
        <div
          :class="`item ${index == active ? 'on' : ''}`"
          :key="index"
          v-for="(item, index) in btnList"
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

<script>
import { getRgbValue } from '../../../util/color';
import { deepMerge, deepClone } from '../../../util/index'
export default {
  name: "ModuleTitle1",
  props: {
    title: {
      type: String
    },
    btnList: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: Array,
      default: () => ([])
    },
  },
  data() {
    return {
      active: 0,
      defaultColor: ['#fff', '#1d80da', '#02f4ff'],
      mergedColor: []
    }
  },
  watch: {
    color() {
      const { mergeColor } = this

      mergeColor()
    }
  },
  methods: {
    change(e) {
      this.active = e.target.dataset.index
    },
    mergeColor() {
      const { color, defaultColor } = this

      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || [])
    },
    rgb(color) {
      return color ? getRgbValue(color) : color
    }
  },
  mounted() {
    const { mergeColor } = this
    mergeColor()
  }
}
</script>