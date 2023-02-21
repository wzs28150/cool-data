<!--
 * @Title: 
 * @Description: 
 * @version: 
 * @Author: wzs
 * @Date: 2023-02-21 21:49:40
 * @LastEditors: wzs
 * @LastEditTime: 2023-02-21 21:49:44
-->
<template>
  <div class="low-code-main">
    <top />
    <div class="low-code-main-inner">
      <left />
      <div class="low-code-main-container">
        <div ref="container" class="low-code-main-page">
          <SketchRule :thick="setting.thick" :scale="scale" :width="width - 20" :height="height - 20"
                      :start-x="setting.startX" :start-y="setting.startY" :lines="setting.lines" :corner-active="false"
                      :palette="{ lineColor: '#999999', bgColor: '#292929', fontColor: '#eeeeee' }"
          />
          <div ref="boardRef" v-dragscroll class="board" @wheel="handleWheel">
            <div ref="screensRef" class="screen-container" :style="screenStyle">
              <div ref="canvasRef" class="canvas" :style="canvasStyle">
                <draggable v-model="project[0].chart" class="dragArea list-group w-full" :sort="false" group="people"
                           @add="checkMove" @change="end"
                >
                  <!-- <Vue3DraggableResizable
                    v-for="(item, index) in project[0].chart"
                    :key="index"
                    v-model:x="item.x"
                    v-model:y="item.y"
                    v-model:active="item.active"
                    :w="item.w"
                    :h="item.h"
                    :parent="true"
                    :init-w="item.x"
                    :init-h="item.y"
                    :draggable="true"
                    :resizable="true"
                    @activated="activatedHandle"
                  >
                    
                  </Vue3DraggableResizable> -->
                  <!-- <DraggableContainer
                    reference-line-color="#999999"
                    :adsorb-cols="setting.lines.h"
                    :adsorb-rows="setting.lines.v"
                  >
                    
                  </DraggableContainer> -->
                  <div>
                    <drag-resize v-for="(item, index) in project[0].chart" :id="index" :key="index" :page-index="0"
                                 class="chart-item"
                    >
                      <bar-1 />
                    </drag-resize>
                  </div>
                </draggable>
              </div>
            </div>
          </div>
          <bottom @miniMapDrag="handleMiniMapDrag" />
        </div>
      </div>
      <right />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed, nextTick, watch, provide } from 'vue';
import { useStore } from 'vuex';
import { SketchRule } from 'vue3-sketch-ruler';
import 'vue3-sketch-ruler/lib/style.css';
import { VueDraggableNext as draggable } from 'vue-draggable-next';
// import Vue3DraggableResizable, { DraggableContainer } from 'vue3-draggable-resizable';
// import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css';
import Top from './components/Top.vue';
import Left from './components/Left.vue';
import Right from './components/Right.vue';
import Bottom from './components/Bottom.vue';
import DragResize from './components/DragResize.vue';

const store = useStore();

const setting = reactive({
  scale: 75,
  startX: 0,
  startY: 0,
  lines: {
    h: [0, 1920],
    v: [0, 1080],
  },
  thick: 20,
  isShowRuler: true,
  isShowReferLine: true,
  scaleSelectShow: false
  // shadow: 0,
});
const miniMapSetting = reactive({
  miniLeft: 0,
  miniTop: 0
})
const list = ref();
const project = computed(() => store.state.Project.projectData);
const width = ref(null);
const height = ref(null);
const canvasWidth = ref(1920);
const canvasHeight = ref(1080);
const container = ref(null);
const boardRef = ref(null);
const screensRef = ref(null);
const canvasRef = ref(null);
const grab = ref(false);


// const miniLeft = computed(()=>{
//   if(screensRef.value){
//     console.log(screensRef.value);
//     return screensRef.value.getBoundingClientRect().left / 10
//   }
// })


const scale = computed(() => {
  return setting.scale / 100;
});
const needMiniMapMove = computed(() => {
  return canvasWidth.value * scale.value > width.value;
});
const miniMapScale = computed(() => {
  return needMiniMapMove.value ? 1 / scale.value.toFixed(2) : 1;
});

const screenStyle = computed(() => {
  return {
    width: `${needMiniMapMove.value ? canvasWidth.value * scale.value : width.value - 80}px`,
    height: `${canvasHeight.value * scale.value > height.value
      ? canvasHeight.value * scale.value
      : height.value - 110
      }px`,
  };
});
const canvasStyle = computed(() => {
  return {
    width: `${canvasWidth.value}px`,
    height: `${canvasHeight.value}px`,
    transform: `scale(${scale.value})`,
    cursor: grab.value ? 'grab' : 'default',
  };
});
provide('canvas', {
  width: canvasWidth.value,
  height: canvasHeight.value,
  scale: scale.value
})
provide('setting', setting)
provide('miniMapSetting', {
  needMiniMapMove,
  miniMapScale,
  miniMapSetting
})
// 监听缩放变化同步更新标尺
watch(
  () => setting.scale,
  () => {
    nextTick(() => {
      handleBoardChange();
    });
  },
  {
    immediate: true,
  }
);
// 处理画布改变之后标尺辅助线的位置
const handleBoardChange = () => {
  const screensRect = boardRef.value.getBoundingClientRect();
  const canvasRect = canvasRef.value.getBoundingClientRect();
  // 标尺开始的刻度
  const startX = (screensRect.left + setting.thick - canvasRect.left) / scale.value;
  const startY = (screensRect.top + setting.thick - canvasRect.top) / scale.value;
  setting.startX = startX;
  setting.startY = startY;
};
const spaceKey = ref(false);
// 空格+左键拖拽
const vDragscroll = {
  mounted: (el) => {
    el.onmousedown = function (ev) {
      if (spaceKey.value) {
        const disX = ev.clientX;
        const disY = ev.clientY;
        const originalScrollLeft = el.scrollLeft;
        const originalScrollTop = el.scrollTop;
        const originalScrollBehavior = el.style['scroll-behavior'];
        const originalPointerEvents = el.style['pointer-events'];
        el.style['scroll-behavior'] = 'auto';
        el.style['cursor'] = 'grabbing';

        document.onmousemove = function (ev) {
          ev.preventDefault();
          const distanceX = ev.clientX - disX;
          const distanceY = ev.clientY - disY;
          el.scrollTo(originalScrollLeft - distanceX, originalScrollTop - distanceY);
          // 更新小地图位置
          miniMapSetting.miniLeft = needMiniMapMove.value
            ? Math.min(
              canvasWidth.value / 10 - (width.value / 10) * miniMapScale.value,
              Math.max(0, (originalScrollLeft - distanceX) / scale.value / 10)
            )
            : 0;
          // 更新小地图位置
          miniMapSetting.miniTop = needMiniMapMove.value
            ? Math.min(
              canvasHeight.value / 10 - (height.value / 10) * miniMapScale.value,
              Math.max(0, (originalScrollTop - distanceY) / scale.value / 10)
            )
            : 0;
          el.style['pointer-events'] = 'none';
          document.body.style['cursor'] = 'grabbing';
          el.style['cursor'] = 'grabbing';
          nextTick(() => {
            handleBoardChange();
          });
        };

        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
          el.style['scroll-behavior'] = originalScrollBehavior;
          el.style['pointer-events'] = originalPointerEvents;
          el.style['cursor'] = 'default';
          document.body.style['cursor'] = 'default';
        };
      }
    };
  },
};
// Ctrl + 滚轮 设置放大
const handleWheel = (e) => {
  e.preventDefault();
  if (e.altKey || e.metaKey) {
    const nextScale = parseFloat(Math.max(0.5, scale.value - e.deltaY / 500).toFixed(2));
    setting.scale = parseInt(nextScale * 100);
    if (miniMapScale.value == 1) {
      miniMapSetting.miniLeft = 0;
      miniMapSetting.miniTop = 0;
      boardRef.value.scrollTo(0, 0);
    }
  }
};

const handleMiniMapDrag = ({ miniLeft, miniTop, distanceX, distanceY }) => {
  console.log(distanceX);
  miniMapSetting.miniLeft = miniLeft;
  miniMapSetting.miniTop = miniTop;
  boardRef.value.scrollTo(
    miniLeft * 10 * scale.value + (distanceX > 0 ? 180 : 0),
    miniTop * 10 * scale.value + (distanceY > 0 ? 180 : 0)
  )
  nextTick(() => {
    handleBoardChange();
  });
}

const disableMouseWheel = (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
  }
};

const checkMove = (event) => {
  console.log(event);
  nextTick(() => {
    store.dispatch('Project/setChartPosition', {
      pageIndex: 0,
      index: event.newIndex,
      x: event.originalEvent.offsetX,
      y: event.originalEvent.offsetY,
    });
  });
};

const end = (e) => {
  console.log(e);
};

const cloneB = (e) => {
  console.log(e);
};

const activatedHandle = (e) => {
  console.log(e);
};

// 初始画布
const resetBoard = () => {
  // console.log((width.value * 0.75) / 1920);
  setting.scale = parseInt(((width.value * 0.8) / 1920) * 100);
  // 垂直居中滚动条
  // boardRef.value.scrollTop = screensRef.value.clientHeight / 2 - height.value / 2;
  // // boardRef.value.scrollTop = 543
  // // 水平居中滚动条
  // boardRef.value.scrollLeft = screensRef.value.clientWidth / 2 - width.value / 2;
  setting.scaleSelectShow = false;
};

onMounted(() => {
  width.value = container.value.clientWidth;
  height.value = container.value.clientHeight;
  resetBoard();
  window.addEventListener('resize', () => {
    width.value = container.value.clientWidth;
    height.value = container.value.clientHeight;
    resetBoard();
  });
  window.addEventListener('mousewheel', disableMouseWheel, { passive: false });
  window.addEventListener('DOMMouseScroll', disableMouseWheel, { passive: false });
  let inputFocus = false;
  const inputField = document.querySelector('input');
  inputField.onfocus = function () {
    inputFocus = true;
  };
  inputField.onblur = function () {
    inputFocus = false;
  };
  document.onkeydown = function (ev) {
    if (
      (ev.ctrlKey && ev.code == 'Numpad0') ||
      (ev.ctrlKey && ev.code == 'Digit0') ||
      (ev.metaKey && ev.code == 'Numpad0') ||
      (ev.metaKey && ev.code == 'Digit0') ||
      (ev.metaKey && ev.code == 'Numpad0')
    ) {
      // Ctrl + 0 还原画布
      resetBoard();
    }
    if (ev.code === 'Space' && !inputFocus) {
      spaceKey.value = true;
      canvasRef.value.style['cursor'] = 'grab';
      ev.preventDefault();
    }
  };
  document.onkeyup = function (ev) {
    if (ev.code === 'Space') {
      spaceKey.value = false;
      canvasRef.value.style['cursor'] = 'default       ';
    }
  };
});
</script>