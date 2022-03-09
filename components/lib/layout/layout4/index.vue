<template>
  <div class="layout-4" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY})`"
    >
      <div class="layout-title">
        <slot name="layout-title" />
      </div>
      <div v-if="immerse" class="main">
        <slot name="main" />
      </div>
      <div
        v-else
        class="main"
        :style="`padding-bottom: calc(${getBottomSideHeight} + 20px);padding-top: ${titleHeight + 20}px`"
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
  name: 'Layout4',
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
      default: "30%"
    },
    
    background: String,
    width: String,
    height: String,
    isScale: Boolean,
    immerse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
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