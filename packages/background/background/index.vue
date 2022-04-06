<template>
  <div class="background" :style="`background-image:url(${img})`"></div>
</template>

<script setup>
import list from './bg';
import { ref } from 'vue';
console.log(list);
const props = defineProps({
  img: {
    type: String
  },
  index: 0
})
const img = ref(null);
if (props.img){
  img.value = props.img
} else {
  img.value = list[props.index]
}

</script>