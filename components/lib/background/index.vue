<template>
  <div class="background" :style="`background-image:url(${img ? img : list[id]})`"></div>
</template>
<script>
import { list } from './index';

export default {
  name: "Background",
  props: {
    id: {
      type: Number,
      default: 0
    },
    img: {
      type: String
    }
  },
  data() {
    return {
      list: list
    }
  }
}
</script>