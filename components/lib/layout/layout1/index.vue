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
<script>
import debounce from 'lodash.debounce'
export default {
  name: 'Layout1',
  data() {
    return {
      scaleX: 1,
      scaleY: 1,
    }
  },
  props: {
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
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 1080
    },
    isScale: Boolean,
    immerse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getLeftSideWidth: (e) => {
      return typeof (e.leftSideWidth) == 'string' ? e.leftSideWidth : e.leftSideWidth + 'px'
    },
    getRightSideWidth: (e) => {
      return typeof (e.rightSideWidth) == 'string' ? e.rightSideWidth : e.rightSideWidth + 'px'
    },
    getTitleHeight: (e) => {
      console.log(e);
      return typeof (e.titleHeight) == 'string' ? e.titleHeight : e.titleHeight + 'px'
    },
  },
  methods: {
    calculateScale: debounce((that) => {
      // console.log(that);
      that.scaleX = window.innerWidth / that.width;
      that.scaleY = window.innerHeight / that.height;
    }, 300)
  },
  mounted() {
    if (this.isScale) {
      const that = this
      this.calculateScale(that);
      window.onresize = function () {
        that.calculateScale(that);
      }
    }
  }
}
</script>