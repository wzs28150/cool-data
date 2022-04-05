<template>
  <div class="background" :style="`background-image:url(${props.img})`"></div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String
  }
})
</script>