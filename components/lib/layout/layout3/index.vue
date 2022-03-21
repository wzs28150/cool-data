<template>
  <div class="layout-3" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY})`"
    >
      <div class="layout-title" :style="`height: ${titleHeight}px`">
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
import screenSize from '../../../mixin/screenSize';
export default {
  name: 'Layout3',
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
    immerse: {
      type: Boolean,
      default: true
    }
  },
  mixins: [screenSize],
  computed: {
    getBottomSideHeight: (e) => {
      return typeof (e.bottomSideHeight) == 'string' ? e.bottomSideHeight : e.bottomSideHeight + 'px'
    }
  }
}
</script>