<template>
  <div class="loading-3 data-loading" :ref="ref">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 0 0"
      xml:space="preserve"
      :width="width"
      :height="height ? height - textHeight : 0"
    >
      <rect x="38" y="40" width="4" height="10" fill="#fff">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="48" y="40" width="4" height="10" fill="#fff">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="58" y="40" width="4" height="10" fill="#fff">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <div class="loading-text" ref="text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
export default {
  name: 'Loading3',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
  },
  data() {
    return {
      ref: 'loading-3',
      textHeight: 0
    }
  },
  mounted (){
    // console.log(this.$refs['loading-3'].offsetHeight);
    this.textHeight = this.$refs.text.offsetHeight
  }
}
</script>