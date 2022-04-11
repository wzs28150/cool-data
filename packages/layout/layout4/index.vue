<template>
  <div :class="{ 'layout-4': true, }" ref="layout" :style="'background-color: ' + background + ';'">
    <div
      class="layout-contanter"
      :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY}); `"
    >
      <div
        class="layout-left"
        :style="`width: ${getLeftSideWidth}; padding-top: ${height * 0.07}px; padding-left: ${width * 0.0239}px;`"
      >
        <slot name="left" />
      </div>
      <div class="layout-main" :style="`padding-top: ${height * 0.07}px;`">
        <slot name="main" />
      </div>
      <div
        class="layout-right"
        :style="`width: ${rightSideWidth};padding-top: ${height * 0.07}px;padding-right: ${width * 0.0239}px;`"
      >
        <slot name="right" />
      </div>
    </div>
    <div class="layout-background" :style="`width:${width}px; height:${height}px; transform:scale(${scaleX},${scaleY}); `">
      <svg :width="width" :height="height">
        <defs>
          <filter :id="`inset-shadow-${id}`" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="0.8 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="10" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feFlood :flood-color="data.mergedColor[0]" flood-opacity="0.5" result="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode />
            </feMerge>
          </filter>
          <filter id="f3" x="-120%" y="-120%" width="400%" height="400%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="multiply" />
          </filter>
        </defs>
        <text
          class="layout-4-title"
          :x="`${width / 2}`"
          :y="`${height * 0.03}`"
          :fill="data.mergedColor[1]"
          font-size="32"
          text-anchor="middle"
          dominant-baseline="middle"
          :style="`text-shadow: 0 0 5px ${data.mergedColor[1]};`"
          ref="text"
          letter-spacing="4"
        >{{ title }}</text>
        <!-- 外边框 -->
        <polyline
          :points="`${width * 0.0239} ${height * 0.03}, 
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.15} ${height * 0.03}, 
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.15 + 15} ${height * 0.06}, 
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.15 - 15} ${height * 0.06}, 
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.15} ${height * 0.03},
          ${width - width * 0.0239} ${height * 0.03},
          ${width - width * 0.005} ${height * 0.068},
          ${width - width * 0.005} ${height - height * 0.242},
          ${width - width * 0.005 - width * 0.008} ${height - height * 0.242 + height * 0.009},
          ${width - width * 0.005 - width * 0.008} ${height - height * 0.168},
          ${width - width * 0.005} ${height - height * 0.168 + height * 0.009},
          ${width - width * 0.005} ${height - height * 0.04},
          ${width - width * 0.005 - width * 0.0135} ${height - width * 0.005},
          ${width * 0.005 + width * 0.0135} ${height - width * 0.005},
          ${width * 0.005} ${height - height * 0.04},
          ${width * 0.005} ${height * 0.237},
          ${width * 0.005 + width * 0.008} ${height * 0.237 - height * 0.009},
          ${width * 0.005 + width * 0.008} ${height * 0.162},
          ${width * 0.005} ${height * 0.162 - height * 0.009},
          ${width * 0.005} ${height * 0.068},
          ${width * 0.0239} ${height * 0.03}
          `"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
          :fill="data.mergedColor[2]"
          :filter="`url(#inset-shadow-${id})`"
        />
        <!-- 左下三角 -->
        <polyline
          :points="`
          ${width * 0.005} ${height - height * 0.04 + width * 0.008}, 
          ${width * 0.005} ${height - width * 0.005},
          ${width * 0.005 + width * 0.0135 - width * 0.006} ${height - width * 0.005}`"
          :fill="data.mergedColor[0]"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
        />
        <!-- 右上三角 -->
        <polyline
          :points="`${width - width * 0.0239 + width * 0.008} ${height * 0.03},
          ${width - width * 0.005} ${height * 0.03},
          ${width - width * 0.005} ${height * 0.068 - width * 0.009}`"
          :fill="data.mergedColor[0]"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
        />
        <!-- 左边梯形 -->

        <polyline
          :points="`${width * 0.005} ${height * 0.162 - height * 0.009 + width * 0.005},
          ${width * 0.005} ${height * 0.237 - width * 0.005},
          ${width * 0.005 + width * 0.004}  ${height * 0.237 - height * 0.009 - width * 0.003},
          ${width * 0.005 + width * 0.004} ${height * 0.162 + width * 0.003}
          `"
          :fill="data.mergedColor[0]"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
        />
        <!-- 右边梯形 -->
        <polyline
          :points="`${width - width * 0.005} ${height - height * 0.242 + width * 0.005},
          ${width - width * 0.005} ${height - height * 0.168 + height * 0.009 - width * 0.005},
          ${width - width * 0.005 - width * 0.004} ${height - height * 0.168 - width * 0.003},

          ${width - width * 0.005 - width * 0.004} ${height - height * 0.242 + height * 0.009 + width * 0.003}
          `"
          :fill="data.mergedColor[0]"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
        />

        <!-- 文字下面横线 -->
        <polyline
          :points="`${width * 0.5 - data.titleWidth * 0.5 - width * 0.0035} ${height * 0.059}, 
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.0035} ${height * 0.059}, 
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.0025} ${height * 0.061},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.0025} ${height * 0.061}`"
          :fill="data.mergedColor[0]"
          :stroke="data.mergedColor[0]"
          stroke-width="2"
        />

        <!-- 文字左边 -->
        <polyline
          :points="`
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.007 - width * 0.007 * i} ${height * 0.046}, 
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.004 - width * 0.007 * i} ${height * 0.046},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.004 + width * 0.003 - width * 0.007 * i} ${height * 0.056},
          ${width * 0.5 - data.titleWidth * 0.5 - width * 0.007 + width * 0.003 - width * 0.007 * i} ${height * 0.056}`"
          :fill="data.mergedColor[0]"
          :filter="`url(#f3)`"
          v-for="i in 18"
          :fill-opacity="1"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.4;1"
            dur="2s"
            :begin="`${i * 0.20}s`"
            repeatCount="indefinite"
          />
        </polyline>
        <!-- 文字右边 -->
        <polyline
          :points="`
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.007 + width * 0.007 * i} ${height * 0.046}, 
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.004 + width * 0.007 * i} ${height * 0.046},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.004 - width * 0.003 + width * 0.007 * i} ${height * 0.056},
          ${width * 0.5 + data.titleWidth * 0.5 + width * 0.007 - width * 0.003 + width * 0.007 * i} ${height * 0.056}`"
          :fill="data.mergedColor[0]"
          :filter="`url(#f3)`"
          v-for="i in 18"
          :fill-opacity="1"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.4;1"
            dur="2s"
            :begin="`${i * 0.20}s`"
            repeatCount="indefinite"
          />
        </polyline>
      </svg>
      <slot name="background" />
    </div>
  </div>
</template>

<script setup>
import { debounce, uuid, deepMerge, deepClone } from '../../util/index';
import { reactive, ref, onMounted, computed } from 'vue';
const props = defineProps({
  background: String,
  width: {
    type: Number,
    default: 1920,
  },
  height: {
    type: Number,
    default: 1080,
  },
  leftSideWidth: {
    type: [String, Number],
    default: "22%"
  },
  rightSideWidth: {
    type: [String, Number],
    default: "22%"
  },
  isScale: Boolean,
  title: String,
  color: {
    type: Array,
    default: () => ([])
  },
})

const scaleX = ref(1);
const scaleY = ref(1);
const text = ref()
const id = uuid()
const data = reactive({
  filterId: `layout-4-filterId-${id}`,
  defaultColor: ['#185bff', '#e9c29d', '#0b0f34'],
  mergedColor: [],
  titleWidth: 0
})

const getLeftSideWidth = computed(() => {
  return typeof (props.leftSideWidth) == 'string' ? props.leftSideWidth : props.leftSideWidth + 'px'
})
const getRightSideWidth = computed((e) => {
  return typeof (props.rightSideWidth) == 'string' ? props.rightSideWidth : props.rightSideWidth + 'px'
})

const calculateScale = debounce(300, () => {
  scaleX.value = window.innerWidth / props.width;
  scaleY.value = window.innerHeight / props.height;
});

// 处理颜色
const mergeColor = () => {
  data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || [])
}
onMounted(() => {
  if (props.isScale) {
    calculateScale();
    window.onresize = function () {
      calculateScale();
    };
  }
  mergeColor()
  data.titleWidth = text.value.getBoundingClientRect().width

});
</script>