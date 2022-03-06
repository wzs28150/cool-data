<template>
  <div class="loading-4 data-loading" :ref="ref">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
      :width="width"
      :height="height ? height - textHeight : 0"
    >
      <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
    <div class="loading-text" ref="text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
export default {
  name: 'Loading4',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
  },
  data() {
    return {
      ref: 'loading-4',
      textHeight: 0
    }
  },
  mounted() {
    // console.log(this.$refs.text.offsetHeight);
    this.textHeight = this.$refs.text.offsetHeight
  }
}
</script>
