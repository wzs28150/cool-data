<template>
  <div class="layout-4" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY})`"
    >
      <svg class="layout-svg" :width="width" :height="height">
        <text
          class="layout-4-svg-title"
          :x="`${width * 0.03}`"
          :y="`${height * 0.02 + 20}`"
          fill="#fff"
          font-size="32"
          font-weight="bold"
          text-anchor="left"
          dominant-baseline="middle"
          ref="text"
          letter-spacing="0"
        >{{ title }}</text>
        <path
          :d="`M0 ${height * 0.06 + 32} C ${width * 0.01} ${height * 0.05 + 32},${width * 0.01} ${height * 0.04 + 32} , ${width * 0.02} ${height * 0.04 + 32} L${titleWidth + width * 0.01} ${height * 0.04 + 32} C ${titleWidth + width * 0.02} ${height * 0.04 + 32},${titleWidth + width * 0.02} ${height * 0.02 + 16},${titleWidth + width * 0.03} ${height * 0.02 + 16} L${width} ${height * 0.02 + 16}`"
          :stroke="'#8aaafb'"
          stroke-width="1"
          fill="none"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import screenSize from '../../../mixin/screenSize';
export default {
  name: 'Layout4',
  data() {
    return {
      scaleX: 1,
      scaleY: 1,
      titleWidth: 0
    }
  },
  props: {
    bottomSideHeight: {
      type: [String, Number],
      default: "30%"
    },
    title: String,
    titleHeight: {
      type: [String, Number],
      default: 0
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
  },
  mounted() {
    this.titleWidth = this.$refs.text.clientWidth
  }
}
</script>