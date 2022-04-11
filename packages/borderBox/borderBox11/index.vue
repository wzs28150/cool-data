<template>
  <div class="border-box-11" :ref="data.ref">
    <svg class="border-svg-container" :width="width" :height="height">
      <defs>
        <filter :id="data.filterId" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="data.mergedColor[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <polygon
        :fill="props.backgroundColor"
        :points="`
          20, 32 ${width * 0.5 - data.titleWidth / 2}, 32 ${width * 0.5 - data.titleWidth / 2 + 20}, 53
          ${width * 0.5 + data.titleWidth / 2 - 20}, 53 ${width * 0.5 + data.titleWidth / 2}, 32
          ${width - 20}, 32 ${width - 8}, 48 ${width - 8}, ${height - 25} ${width - 20}, ${height - 8}
          20, ${height - 8} 8, ${height - 25} 8, 50
        `"
      />

      <polyline
        :stroke="data.mergedColor[0]"
        :filter="`url(#${data.filterId})`"
        :points="`
          ${(width - data.titleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (height - 167) / 2}
          13, ${55 + (height - 167) / 2} 13, ${135 + (height - 167) / 2}
          7, ${140 + (height - 167) / 2} 7, ${height - 27}
          20, ${height - 7} ${width - 20}, ${height - 7} ${width - 7}, ${height - 27}
          ${width - 7}, ${140 + (height - 167) / 2} ${width - 13}, ${135 + (height - 167) / 2}
          ${width - 13}, ${55 + (height - 167) / 2} ${width - 7}, ${50 + (height - 167) / 2}
          ${width - 7}, 50 ${width - 20}, 30 ${(width + data.titleWidth) / 2}, 30
          ${(width + data.titleWidth) / 2 - 20}, 7 ${(width - data.titleWidth) / 2 + 20}, 7
          ${(width - data.titleWidth) / 2}, 30 ${(width - data.titleWidth) / 2 + 20}, 52
          ${(width + data.titleWidth) / 2 - 20}, 52 ${(width + data.titleWidth) / 2}, 30
        `"
      />

      <polygon
        :stroke="data.mergedColor[0]"
        fill="transparent"
        :points="`
          ${(width + data.titleWidth) / 2 - 5}, 30 ${(width + data.titleWidth) / 2 - 21}, 11
          ${(width + data.titleWidth) / 2 - 27}, 11 ${(width + data.titleWidth) / 2 - 8}, 34
        `"
      />

      <polygon
        :stroke="data.mergedColor[0]"
        fill="transparent"
        :points="`
          ${(width - data.titleWidth) / 2 + 5}, 30 ${(width - data.titleWidth) / 2 + 22}, 49
          ${(width - data.titleWidth) / 2 + 28}, 49 ${(width - data.titleWidth) / 2 + 8}, 26
        `"
      />

      <polygon
        :stroke="data.mergedColor[0]"
        :fill="fade(data.mergedColor[1] || data.defaultColor[1], 30)"
        :filter="`url(#${data.filterId})`"
        :points="`
          ${(width + data.titleWidth) / 2 - 11}, 37 ${(width + data.titleWidth) / 2 - 32}, 11
          ${(width - data.titleWidth) / 2 + 23}, 11 ${(width - data.titleWidth) / 2 + 11}, 23
          ${(width - data.titleWidth) / 2 + 33}, 49 ${(width + data.titleWidth) / 2 - 22}, 49
        `"
      />

      <polygon
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="1"
        :points="`
          ${(width - data.titleWidth) / 2 - 10}, 37 ${(width - data.titleWidth) / 2 - 31}, 37
          ${(width - data.titleWidth) / 2 - 25}, 46 ${(width - data.titleWidth) / 2 - 4}, 46
        `"
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="0.7"
        :points="`
          ${(width - data.titleWidth) / 2 - 40}, 37 ${(width - data.titleWidth) / 2 - 61}, 37
          ${(width - data.titleWidth) / 2 - 55}, 46 ${(width - data.titleWidth) / 2 - 34}, 46
        `"
      >
        <animate
          attributeName="opacity"
          values="0.7;0.4;0.7"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="0.5"
        :points="`
          ${(width - data.titleWidth) / 2 - 70}, 37 ${(width - data.titleWidth) / 2 - 91}, 37
          ${(width - data.titleWidth) / 2 - 85}, 46 ${(width - data.titleWidth) / 2 - 64}, 46
        `"
      >
        <animate
          attributeName="opacity"
          values="0.5;0.2;0.5"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="1"
        :points="`
          ${(width + data.titleWidth) / 2 + 30}, 37 ${(width + data.titleWidth) / 2 + 9}, 37
          ${(width + data.titleWidth) / 2 + 3}, 46 ${(width + data.titleWidth) / 2 + 24}, 46
        `"
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="0.7"
        :points="`
          ${(width + data.titleWidth) / 2 + 60}, 37 ${(width + data.titleWidth) / 2 + 39}, 37
          ${(width + data.titleWidth) / 2 + 33}, 46 ${(width + data.titleWidth) / 2 + 54}, 46
        `"
      >
        <animate
          attributeName="opacity"
          values="0.7;0.4;0.7"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <polygon
        :filter="`url(#${data.filterId})`"
        :fill="data.mergedColor[0]"
        opacity="0.5"
        :points="`
          ${(width + data.titleWidth) / 2 + 90}, 37 ${(width + data.titleWidth) / 2 + 69}, 37
          ${(width + data.titleWidth) / 2 + 63}, 46 ${(width + data.titleWidth) / 2 + 84}, 46
        `"
      >
        <animate
          attributeName="opacity"
          values="0.5;0.2;0.5"
          dur="2s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>

      <text
        class="border-box-11-title"
        :x="`${width / 2}`"
        y="32"
        fill="#fff"
        font-size="18"
        text-anchor="middle"
        dominant-baseline="middle"
        ref="text"
      >{{ title }}</text>

      <polygon
        :fill="data.mergedColor[0]"
        :filter="`url(#${data.filterId})`"
        :points="`
          7, ${53 + (height - 167) / 2} 11, ${57 + (height - 167) / 2}
          11, ${133 + (height - 167) / 2} 7, ${137 + (height - 167) / 2}
        `"
      />

      <polygon
        :fill="data.mergedColor[0]"
        :filter="`url(#${data.filterId})`"
        :points="`
          ${width - 7}, ${53 + (height - 167) / 2} ${width - 11}, ${57 + (height - 167) / 2}
          ${width - 11}, ${133 + (height - 167) / 2} ${width - 7}, ${137 + (height - 167) / 2}
        `"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="BorderBox11">
import autoResize from '../../util/autoResize';
import { uuid, deepMerge, deepClone } from '../../util/index'
import { onMounted, reactive, ref } from 'vue';
import { fade } from '../../util/color';

const props = defineProps({
  color: {
    type: Array,
    default: () => ([])
  },
  title: {
    type: String,
    default: '标题标题'
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

const id = uuid()
const text = ref()
const data = reactive({
  ref: 'border-box-11',
  filterId: `border-box-11-filterId-${id}`,
  defaultColor: ['#8aaafb', '#1f33a2'],
  mergedColor: [],
  titleWidth: 0
})
// 处理尺寸
const { width, height } = autoResize(data.ref)

const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}

onMounted(() => {
  mergeColor()
  data.titleWidth = text.value.getBoundingClientRect().width + 80
  console.log(data.titleWidth);
})
</script>