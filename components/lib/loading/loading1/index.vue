<template>
  <div class="loading-1 data-loading" :ref="ref">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      :width="width"
      :height="height ? height - textHeight : 0"
    >
      <circle
        fill="none"
        stroke="#fff"
        stroke-width="6"
        stroke-miterlimit="15"
        stroke-dasharray="14.2472 14.2472"
        cx="50"
        cy="50"
        r="47"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        fill="none"
        stroke="#fff"
        stroke-width="1"
        stroke-miterlimit="10"
        stroke-dasharray="10 10"
        cx="50"
        cy="50"
        r="39"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 50 50"
          to="-360 50 50"
          repeatCount="indefinite"
        />
      </circle>
      <g fill="#fff">
        <rect x="30" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.1"
          />
        </rect>
        <rect x="40" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.2"
          />
        </rect>
        <rect x="50" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3"
          />
        </rect>
        <rect x="60" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.4"
          />
        </rect>
        <rect x="70" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.5"
          />
        </rect>
      </g>
    </svg>
    <div class="loading-text" ref="text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import autoResize from '../../../mixin/autoResize'
export default {
  name: 'Loading1',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
  },
  data() {
    return {
      ref: 'loading-1',
      textHeight: 0
    }
  },
  mounted() {
    // console.log(this.$refs.text.offsetHeight);
    this.textHeight = this.$refs.text.offsetHeight
  }
}
</script>

