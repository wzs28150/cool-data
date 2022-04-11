<template>
  <div class="decoration-1 decoration" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="data.filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
        </filter>
        <filter :id="`inset-shadow-${id}`" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="20" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood :flood-color="data.mergedColor[0]" flood-opacity="0.3" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>
      <g style="transform: rotateX(75deg);transform-origin: center;">
        <circle
          :r="width ? width * 0.5 - 2 : width * 0.5"
          :cx="width * 0.5"
          :cy="height * 0.5"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          :fill="data.mergedColor[1]"
          :fill-opacity="1"
          :filter="`url(#inset-shadow-${id})`"
        />

        <circle
          :r="width? width * 0.3 - 8 : width * 0.3"
          :cx="width * 0.5"
          :cy="height * 0.5"
          stroke-dasharray="15 10"
          :stroke="data.mergedColor[0]"
          stroke-width="8"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            :from="`0,${width * 0.5},${height * 0.5}`"
            :to="`-360,${width * 0.5},${height * 0.5}`"
            begin="0s"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          :r="width? width * 0.3 - 2 : width * 0.3"
          :cx="width * 0.5"
          :cy="height * 0.5"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            :from="`0,${width * 0.5},${height * 0.5}`"
            :to="`-360,${width * 0.5},${height * 0.5}`"
            begin="0s"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        

        <circle
          :r="width ? width * 0.2 - 15 : width * 0.2"
          :cx="width * 0.5"
          :cy="height * 0.5"
          stroke-dasharray="6 12"
          :stroke="data.mergedColor[0]"
          stroke-width="15"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            :from="`0,${width * 0.5},${height * 0.5}`"
            :to="`360,${width * 0.5},${height * 0.5}`"
            begin="0s"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
</template>

<script setup name="Decoration1">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  }
})

const id = uuid()
const text = ref()

const data = reactive({
  ref: 'decoration-1',
  filterId: `decoration-1-filterId-${id}`,
  defaultColor: ['#8aaafb', '#08192d'],
  mergedColor: []
})
// 处理尺寸
const { width, height } = autoResize(data.ref)
// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
})

</script>