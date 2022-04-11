<template>
  <div :class="`background ${index?'background'+index:''}`" :style="`${img?'background-image: url('+img+')':''}`"></div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  img: {
    type: String
  },
  index: 0
})
const img = ref(null);
if (props.img){
  img.value = props.img
}

</script>