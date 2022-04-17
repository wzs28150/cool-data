<template>
  <div v-if="1 == 2" />
</template>
<script>

export default {
  name: 'TitleBar'
}
</script>
<script setup >
import { getCurrentInstance } from 'vue';
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
instance.parent.config.title = {
  text: props.text,
  textStyle: {
    color: props.color
  }
}
</script>