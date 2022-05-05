<template>
  <div class="low-code-main">
    <top />
    <div class="low-code-main-inner">
      <left />
      <div class="low-code-main-container">
        <div ref="container" class="low-code-main-page">
          <SketchRule
            :thick="data.thick"
            :scale="scale"
            :width="width - 20"
            :height="height - 20"
            :start-x="data.startX"
            :start-y="data.startY"
            :lines="data.lines"
            :corner-active="false"
            :palette="{ lineColor: '#999999', bgColor: '#292929', fontColor: '#eeeeee' }"
          />
          <div ref="boardRef" v-dragscroll class="board" @wheel="handleWheel">
            <div ref="screensRef" class="screen-container" :style="screenStyle">
              <div ref="canvasRef" class="canvas" :style="canvasStyle">
                <draggable
                  v-model="project[0].chart"
                  class="dragArea list-group w-full"
                  :sort="false"
                  group="people"
                  @add="checkMove"
                  @change="end"
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
                    :adsorb-cols="data.lines.h"
                    :adsorb-rows="data.lines.v"
                  >
                    
                  </DraggableContainer> -->
                  <dragResize v-for="(item, index) in project[0].chart" :id="index" :key="index" :page-index="0" class="chart-item">
                    <div class="title">
                      {{ item.title }}-{{ item.id }}-{{ item.w }}-{{ item.h }}
                    </div>
                  </dragResize>
                </draggable>
              </div>
            </div>
          </div>
          <div class="bottom-bar">
            <div class="bottom-bar-inner">
              <div class="scale-select">
                <div class="scale-select-show" @click="scaleSelectShow = !scaleSelectShow">
                  {{ data.scale }}%<el-icon class="arrow"><arrow-up /></el-icon>
                </div>
                <ul v-if="scaleSelectShow">
                  <li @click="setScale(200)">200%</li>
                  <li @click="setScale(150)">150%</li>
                  <li @click="setScale(100)">100%</li>
                  <li @click="setScale(50)">50%</li>
                  <li @click="resetBoard()">自适应</li>
                </ul>
              </div>
              <el-icon :size="14" class="minus" @click="minusScale"><minus /></el-icon>
              <div class="scale">
                <el-slider v-model="data.scale" size="small" :max="200" :show-tooltip="false" />
              </div>
              <el-icon :size="14" class="plus" @click="plusScale"><plus /></el-icon>
              <div class="mini-map-show-btn">
                <el-icon :size="20" @click="miniMapShow = !miniMapShow">
                  <scale-to-original />
                </el-icon>
                <div
                  v-if="miniMapShow"
                  class="mini-map"
                  :style="`width:${canvasWidth / 10}px; height: ${canvasHeight / 10}px;`"
                >
                  <div class="mini-map-inner"></div>
                  <div v-dragmini class="mini-map-select" :style="miniMapSelectStyle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <right />
    </div>
  </div>
</template>

<script setup>
  import { onMounted, reactive, ref, computed, nextTick, watch, provide  } from 'vue';
  import { ScaleToOriginal, Plus, Minus, ArrowUp } from '@element-plus/icons-vue';
  import { useStore } from 'vuex';
  import { SketchRule } from 'vue3-sketch-ruler';
  import 'vue3-sketch-ruler/lib/style.css';
  import { VueDraggableNext as draggable } from 'vue-draggable-next';
  // import Vue3DraggableResizable, { DraggableContainer } from 'vue3-draggable-resizable';
  // import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css';
  import top from './components/top.vue';
  import left from './components/left.vue';
  import right from './components/right.vue';
  import dragResize from './components/dragResize.vue';

  const store = useStore();

  const data = reactive({
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
    // shadow: 0,
  });
  const list = ref();
  const project = computed(() => store.state.Project.projectData);
  const width = ref(null);
  const height = ref(null);
  const canvasWidth = ref(1920);
  const canvasHeight = ref(1080);
  const miniLeft = ref(0);
  const miniTop = ref(0);
  const container = ref(null);
  const boardRef = ref(null);
  const screensRef = ref(null);
  const canvasRef = ref(null);
  const grab = ref(false);
  const scaleSelectShow = ref(false);
  const miniMapShow = ref(true);
  // const miniLeft = computed(()=>{
  //   if(screensRef.value){
  //     console.log(screensRef.value);
  //     return screensRef.value.getBoundingClientRect().left / 10
  //   }
  // })

  provide('canvas',{
    width: canvasWidth.value,
    height: canvasHeight.value
  })
  const scale = computed(() => {
    return data.scale / 100;
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
      height: `${
        canvasHeight.value * scale.value > height.value
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
  const miniMapSelectStyle = computed(() => {
    console.log(needMiniMapMove.value);
    return {
      width: `${
        !needMiniMapMove.value ? canvasWidth.value / 10 : (width.value / 10) * miniMapScale.value
      }px`,
      height: `${
        !needMiniMapMove.value ? canvasHeight.value / 10 : (height.value / 10) * miniMapScale.value
      }px`,
      left: `${needMiniMapMove.value ? miniLeft.value : 0}px`,
      top: `${needMiniMapMove.value ? miniTop.value : 0}px`,
      // transform: `translate(${miniLeft.value}px, ${miniTop.value}px)`,
    };
  });

  // 监听缩放变化同步更新标尺
  watch(
    () => data.scale,
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
    const startX = (screensRect.left + data.thick - canvasRect.left) / scale.value;
    const startY = (screensRect.top + data.thick - canvasRect.top) / scale.value;
    data.startX = startX;
    data.startY = startY;
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
            miniLeft.value = needMiniMapMove.value
              ? Math.min(
                  canvasWidth.value / 10 - (width.value / 10) * miniMapScale.value,
                  Math.max(0, (originalScrollLeft - distanceX) / scale.value / 10)
                )
              : 0;
            // 更新小地图位置
            miniTop.value = needMiniMapMove.value
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
  // 拖拽小地图
  const vDragmini = {
    mounted: (el) => {
      el.onmousedown = function (e) {
        const disX = e.clientX;
        const disY = e.clientY;
        const originalScrollLeft = e.target.offsetLeft;
        const originalScrollTop = e.target.offsetTop;
        const originalPointerEvents = el.style['pointer-events'];
        const originalScrollBehavior = el.style['scroll-behavior'];

        // console.log(matrix);
        document.onmousemove = function (ev) {
          ev.preventDefault();
          el.style['transition'] = 'none';
          const distanceX = ev.clientX - disX;
          const distanceY = ev.clientY - disY;
          miniLeft.value = Math.min(
            canvasWidth.value / 10 - (width.value / 10) * miniMapScale.value,
            Math.max(0, distanceX + originalScrollLeft)
          );
          miniTop.value = Math.min(
            canvasHeight.value / 10 - (height.value / 10) * miniMapScale.value,
            Math.max(0, distanceY + originalScrollTop)
          );
          boardRef.value.scrollTo(
            miniLeft.value * 10 * scale.value + (distanceX > 0 ? 180 : 0),
            miniTop.value * 10 * scale.value + (distanceY > 0 ? 180 : 0)
          );
          el.style['pointer-events'] = 'none';

          nextTick(() => {
            handleBoardChange();
          });
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
          el.style['transition'] = 'all 0.4s';
          el.style['scroll-behavior'] = originalScrollBehavior;
          el.style['pointer-events'] = originalPointerEvents;
        };
      };
    },
  };
  // Ctrl + 滚轮 设置放大
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      const nextScale = parseFloat(Math.max(0.5, scale.value - e.deltaY / 500).toFixed(2));
      data.scale = parseInt(nextScale * 100);
      if (miniMapScale.value == 1) {
        miniLeft.value = 0;
        miniTop.value = 0;
        boardRef.value.scrollTo(0, 0);
      }
    }
  };
  const minusScale = () => {
    data.scale = Math.max(50, data.scale - 10);
  };
  const plusScale = () => {
    data.scale = Math.min(200, data.scale + 10);
  };
  const setScale = (e) => {
    data.scale = e;
    scaleSelectShow.value = false;
  };
  // 初始画布
  const resetBoard = () => {
    // console.log((width.value * 0.75) / 1920);
    data.scale = parseInt(((width.value * 0.8) / 1920) * 100);
    // 垂直居中滚动条
    // boardRef.value.scrollTop = screensRef.value.clientHeight / 2 - height.value / 2;
    // // boardRef.value.scrollTop = 543
    // // 水平居中滚动条
    // boardRef.value.scrollLeft = screensRef.value.clientWidth / 2 - width.value / 2;
    scaleSelectShow.value = false;
  };

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

<style lang="less" scoped>
  @import '../../assets/less/var.less';
  .low-code-main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: @main-bg-color;
    color: #eee;
    overflow: hidden;
    &:deep(.corner) {
      // display: none;
      background-size: 75%;
      background-repeat: no-repeat;
      background-position: center;
      border-color: @ruler-corner-border-color !important;
    }
    .low-code-main-inner {
      flex: 1;
      display: flex;
      position: relative;

      .low-code-main-container {
        flex: 1;
        .low-code-main-page {
          position: relative;
          width: 100%;
          height: calc(100% - 30px);
          padding-bottom: 30px;

          &:deep(.style-ruler) {
            .h-container,
            .v-container {
              .value {
                background-color: @ruler-value-bg-color;
              }
              .action {
                .value {
                  display: none;
                }
              }
            }
          }
          .board {
            width: 100%;
            height: calc(100% - 30px);
            background-color: @board-bg-color;
            position: absolute;
            overflow: auto;
            &::-webkit-scrollbar {
              width: 5px;
              height: 5px;
              display: none;
            }
            &::-webkit-scrollbar,
            &::-webkit-scrollbar-track-piece {
              background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
              border-radius: 5px;
              background-color: rgba(144, 146, 152, 0.3);
            }
            scrollbar-width: none;
            .screen-container {
              position: absolute;
              width: 100%;
              height: 100%;
              background: @screen-bg;
              background-size: 15px 15px;
              padding: 50px 30px 30px 50px;
              .canvas {
                position: absolute;
                top: 50px;
                left: 50px;
                transform-origin: left top;
                width: 1920px;
                height: 1080px;
                // margin-top: -540px;
                // margin-left: -960px;
                background-color: @canvas-bg-color;
                transform: scale(1);
                // background-color: red;
                .dragArea {
                  width: 100%;
                  height: 100%;
                  position: relative;
                  .vdr-container.active {
                    border-color: #eee;
                  }
                }
              }
            }
          }
          .bottom-bar {
            width: 100%;
            height: 30px;
            position: absolute;
            background-color: @main-bg-color;
            z-index: 4;
            bottom: 0;
            &::after {
              border-top: 1px solid @main-border-color;
              content: '';
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 0;
            }
            .bottom-bar-inner {
              position: relative;
              z-index: 1;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              height: 100%;

              .scale-select {
                font-size: 12px;
                color: #999;
                border: 1px solid @main-border-color;
                width: 50px;
                position: relative;
                padding: 2px 0 2px 5px;
                cursor: pointer;
                .arrow {
                  position: absolute;
                  top: 50%;
                  right: 5px;
                  transform: translateY(-50%);
                }

                ul {
                  position: absolute;
                  left: 0;
                  bottom: 24px;
                  list-style: none;
                  background-color: @main-bg-color;
                  width: 55px;
                  border: 1px solid @main-border-color;
                  padding: 2px 0;
                  li {
                    padding: 5px;
                    border-bottom: 1px solid @main-border-color;
                    text-align: center;
                    transition: all 0.4s;
                    &:last-child {
                      border: 0;
                    }
                    &:hover {
                      color: #fff;
                    }
                  }
                }
              }
              .scale {
                width: 150px;
                &:deep(.el-slider) {
                  --el-slider-height: 4px;
                  --el-slider-button-size: 14px;
                  --el-slider-button-wrapper-offset: -16px;
                  --el-slider-runway-bg-color: @scale-slider-runway-bg-color;
                  --el-slider-main-bg-color: @scale-slider-main-bg-color;
                }
              }
              .mini-map-show-btn {
                padding: 5px 10px;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: all 0.4s linear;
                color: @mini-map-show-btn-color;
                position: relative;
                &:hover {
                  color: @mini-map-show-btn-hover-color;
                }
                .mini-map {
                  background-color: @mini-map-bg-color;
                  position: absolute;
                  bottom: 40px;
                  right: 10px;
                  box-shadow: 0 0 10px @mini-map-shadow-color;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: default;

                  .mini-map-inner {
                    border: 1px solid @mini-map-inner-border-color;
                    width: calc(100% - 10px);
                    height: calc(100% - 10px);
                  }
                  .mini-map-select {
                    border: 1px solid @mini-map-select-border-color;
                    position: absolute;
                    left: 0;
                    top: 0;
                    cursor: move;
                    transform-origin: left top;
                    transform: scale(1);
                    background-color: @mini-map-select-bg-color;
                  }
                }
              }

              .minus,
              .plus {
                margin: 0 10px;
                cursor: pointer;
                color: @mini-map-show-btn-color;
                &:hover {
                  color: @mini-map-show-btn-hover-color;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
