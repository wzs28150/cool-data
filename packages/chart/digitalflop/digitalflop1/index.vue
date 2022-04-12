<template>
  <div class="digital-flop-1">
    <div class="digital-flop-1-inner">
      <div class="number-item ds-digital" v-for="(item, index) in numLength"
        :style="`font-size: ${mergedConfig.fontSize}px;width: ${mergedConfig.fontSize - mergedConfig.fontSize / 6}px;height: ${mergedConfig.fontSize + mergedConfig.fontSize / 6}px; line-height: ${mergedConfig.fontSize + mergedConfig.fontSize / 6}px; font-family: '${mergedConfig.fontFamily}';`">
        <span><i v-if="isNaN(numArray[index])">{{ numArray[index] }}</i><i v-else
            :style="`transform :translate(-50%, -${numArray[index] * 10}%)`">0123456789</i></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { deepMerge, deepClone } from '../../../util';
import defaultOption from './config';
const props = defineProps({
  num: {
    type: Number
  },
  option: {
    type: Object,
    default: () => ({})
  }
})

const numLength = ref(0);
const numArray = ref([])

watch(() => props.num, () => {
  start();
})

const mergedConfig = computed(() => {
  return deepMerge(deepClone(defaultOption, true), props.option || [])
})

const start = () => {
  if (props.num) {
    mergedConfig.value.num = props.num
  }
  if (mergedConfig.value.isFormatter) {
    mergedConfig.value.num = mergedConfig.value.formatter(mergedConfig.value.num)
  }
  // const a = emits('formatter', mergedConfig.value.num)
  // console.log(a);

  numArray.value = mergedConfig.value.num.toString().split('').map((item) => {
    if (isNaN(item)) {
      return item;
    } else {
      return 0;
    }
  })

  numLength.value = mergedConfig.value.num.toString().length

  setInterval(function setInt() {
    toOrderNum();
  }, 1000)
}

const toOrderNum = () => {
  numArray.value = mergedConfig.value.num.toString().split('').map((item) => {
    return item;
  })
}

onMounted(() => {
  start()
})
</script>