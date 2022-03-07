<template>
  <div class="layout-2" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY})`"
    >
      <div class="layout-title">
        <slot name="layout-title" />
      </div>
      <div class="left" :style="`width: ${getLeftSideWidth};`">
        <div class="left-top">
          <slot name="left-top" />
        </div>
        <div class="left-middle">
          <slot name="left-middle" />
        </div>
        <div class="left-bottom">
          <slot name="left-bottom" />
        </div>
      </div>
      <div class="right" :style="`width: ${getRightSideWidth};`">
        <div class="right-top">
          <slot name="right-top" />
        </div>
        <div class="right-middle">
          <slot name="right-middle" />
        </div>
        <div class="right-bottom">
          <slot name="right-bottom" />
        </div>
      </div>
      <div class="main">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>
<script>
import debounce from 'lodash.debounce'
export default {
  name: 'Layout2',
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
    background: String,
    width: String,
    height: String,
    isScale: Boolean
  },
  computed:{
    getLeftSideWidth: (e) => {
      return typeof (e.leftSideWidth) == 'string' ? e.leftSideWidth : e.leftSideWidth + 'px'
    },
       getRightSideWidth: (e) => {
      return typeof (e.rightSideWidth) == 'string' ? e.rightSideWidth : e.rightSideWidth + 'px'
    },
  },
  methods: {
    calculateScale: debounce((that) => {
      console.log(that);
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