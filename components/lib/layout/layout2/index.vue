<template>
  <div class="layout-2" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY})`"
    >
      <div class="layout-title">
        <slot name="layout-title" />
      </div>
      <div class="right" :style="`width: ${getsideWidth};padding-top: ${titleHeight + 20}px; padding-bottom: calc(${getBottomSideHeight} + 20px); left:${position == 'right'? 'auto' : '0'};right: ${position == 'right' ? '0' : 'auto'}` ">
        <slot name="aside" />
      </div>
      <div v-if="immerse" class="main">
        <slot name="main" />
      </div>
      <div
        v-else
        class="main"
        :style="`padding-bottom: calc(${getBottomSideHeight} + 20px);padding-top: ${titleHeight + 20}px; padding-right: ${position == 'right' ? 'calc('+getsideWidth+' + 10px)':'0'}; padding-left: ${position == 'left' ? 'calc('+getsideWidth+' + 10px)':'0'}`"
      >
        <slot name="main" />
      </div>
      <div class="bottom" :style="`height: ${getBottomSideHeight}`">
        <slot name="bottom" />
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
    bottomSideHeight: {
      type: [String, Number],
      default: "30%"
    },
    titleHeight: {
      type: [String, Number],
      default: "60"
    },
    sideWidth: {
      type: [String, Number],
      default: "50%"
    },
    position: {
      type: String,
      default: 'right'
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
    getsideWidth: (e) => {
      return typeof (e.sideWidth) == 'string' ? e.sideWidth : e.sideWidth + 'px'
    },
    getBottomSideHeight: (e) => {
      return typeof (e.bottomSideHeight) == 'string' ? e.bottomSideHeight : e.bottomSideHeight + 'px'
    }
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