<template>
  <Particles id="backgroundCanvas1" class="background-canvas" :options="config" />
</template>

<script setup>

import { ref, onMounted } from "vue";
import defaultConfig from './config';
import { ParticlesComponent as Particles } from "particles.vue3";
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
  config.value.fullScreen.enable = props.fullScreen
  config.value.particles.color.value = props.color
  // config.value.particles.links.color = props.color
})
</script>