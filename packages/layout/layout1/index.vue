<template>
  <div :class="{ 'layout-1': true, }" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY})`"
    >
      <div class="layout-title" :style="`height: ${titleHeight}px`">
        <slot name="layout-title" />
      </div>
      <div class="left" :style="`width: ${getLeftSideWidth}; padding-top: ${titleHeight + 20}px`">
        <slot name="left" />
      </div>
      <div class="right" :style="`width: ${getRightSideWidth};padding-top: ${titleHeight + 20}px`">
        <slot name="right" />
      </div>
      <div class="main" v-if="immerse">
        <slot name="main" />
      </div>
      <div
        v-else
        class="main"
        :style="`padding-left: calc(${getLeftSideWidth} + 20px);padding-right: calc(${getRightSideWidth} + 20px);padding-top: ${titleHeight + 20}px; padding-bottom: 10px`"
      >
        <slot name="main" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { debounce } from '../../util/index';
import { computed, ref,onMounted } from 'vue';

const props = defineProps({
  leftSideWidth: {
    type: [String, Number],
    default: "22%"
  },
  rightSideWidth: {
    type: [String, Number],
    default: "22%"
  },
  titleHeight: {
    type: [String, Number],
    default: 60
  },
  background: String,
  immerse: {
    type: Boolean,
    default: true
  },
  width: {
    type: Number,
    default: 1920,
  },
  height: {
    type: Number,
    default: 1080,
  },
  isScale: Boolean,
})

const scaleX = ref(1);
const scaleY = ref(1);

const getLeftSideWidth = computed(() => {
  return typeof (props.leftSideWidth) == 'string' ? props.leftSideWidth : props.leftSideWidth + 'px'
})
const getRightSideWidth = computed((e) => {
  return typeof (props.rightSideWidth) == 'string' ? props.rightSideWidth : props.rightSideWidth + 'px'
})
const getTitleHeight = computed((e) => {
  return typeof (props.titleHeight) == 'string' ? props.titleHeight : props.titleHeight + 'px'
})

const calculateScale = debounce(300, () => {
  // console.log(that);
  scaleX.value = window.innerWidth / props.width;
  scaleY.value = window.innerHeight / props.height;
});

onMounted(() => {
  if (props.isScale) {
    calculateScale();
    window.onresize = function () {
      that.calculateScale(that);
    };
  }
});
</script>