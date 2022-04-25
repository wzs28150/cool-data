<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Title'
}
</script>
<script setup >
import { onMounted, onUnmounted, watch, inject } from 'vue';
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#eeeeee'
  },
  size: {
    type: Number,
    default: 0
  }
})
const { config } = inject('chart');

const setTitle = () => {
  config.title = {
    text: props.text,
    left: '10%',
    top: '5%',
    textStyle: {
      color: props.color
    }
  }
  if(config.title.top){
    config.grid.top = '20%'
  }
  if(config.legend.show){
    config.legend.right = '10%'
  }
}

watch(() => props, () => {
  setTitle()
}, {
  deep: true,
  immediate: true
})

onMounted(()=>{
  setTitle()
})

onUnmounted(()=>{
  config.title = {}
  if (config.legend.show) {
    config.grid.top = '20%'
    config.legend.right = 'auto'
  } else {
    config.grid.top = '10%'
  }
})
</script>