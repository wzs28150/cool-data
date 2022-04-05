<template>
  <Particles id="backgroundCanvas1" class="background" :options="config" />
</template>

<script setup>

import { ref, onMounted } from "vue";
import defaultConfig from './config';
const config = ref(defaultConfig)

const props = defineProps({
  fullScreen: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: "#ffffff"
  }
})
onMounted(() => {
  console.log(props);
  config.value.fullScreen.enable = props.fullScreen
  config.value.particles.color.value = props.color
  // config.value.particles.links.color = props.color
})
</script>