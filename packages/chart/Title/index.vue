<template>
  <div v-if="1 == 2" />
</template>
<script>
export default {
  name: 'Title'
}
</script>
<script setup >
import { getCurrentInstance, onMounted, onUnmounted, watch } from 'vue';
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
const instance = getCurrentInstance()
const setTitle = () => {
  instance.parent.config.title = {
    text: props.text,
    left: '10%',
    top: '5%',
    textStyle: {
      color: props.color
    }
  }
  if(instance.parent.config.title.top){
    instance.parent.config.grid.top = '20%'
  }
  if(instance.parent.config.legend.show){
    instance.parent.config.legend.right = '10%'
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
  instance.parent.config.title = {}
  if (instance.parent.config.legend.show) {
    instance.parent.config.grid.top = '20%'
    instance.parent.config.legend.right = 'auto'
  } else {
    instance.parent.config.grid.top = '10%'
  }
})
</script>