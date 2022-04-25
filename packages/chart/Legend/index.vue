<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Legend'
}
</script>
<script setup>
import { inject, onMounted, onUnmounted } from 'vue';
const { config } = inject('chart');
const setLegend = () => {
  config.legend = {
    show: true,
    textStyle: { color: "#fff" },
    top: "5%"
  }

  if(config.legend.show){
    config.grid.top = '20%'
  }
  if(config.title.top){
    config.legend.right = '10%'
  }
}
onMounted(() => {
  setLegend()
})

onUnmounted(() => {
  config.legend = {
    show: false
  }
  if (config.title.top) {
    config.grid.top = '20%'
  } else {
    config.grid.top = '10%'
  }
})
</script>