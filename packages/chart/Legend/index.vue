<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Legend'
}
</script>
<script setup>
import { getCurrentInstance, onMounted, onUnmounted } from 'vue';
const instance = getCurrentInstance()
const setLegend = () => {
  instance.parent.config.legend = {
    show: true,
    textStyle: { color: "#fff" },
    top: "5%"
  }

  if(instance.parent.config.legend.show){
    instance.parent.config.grid.top = '20%'
  }
  if(instance.parent.config.title.top){
    instance.parent.config.legend.right = '10%'
  }
}
onMounted(() => {
  setLegend()
})

onUnmounted(() => {
  instance.parent.config.legend = {
    show: false
  }
  if (instance.parent.config.title.top) {
    instance.parent.config.grid.top = '20%'
  } else {
    instance.parent.config.grid.top = '10%'
  }
})
</script>