<!--
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-27 10:56:15
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-27 10:56:16
-->
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
          <div ref="screensRef" v-dragscroll class="board" @wheel="handleWheel">
            <div ref="containerRef" class="screen-container">
              <div ref="canvasRef" class="canvas" :style="canvasStyle">
                <!-- <img
                src="https://img-blog.csdnimg.cn/934a32f0197146929d040e879dd86585.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbmloYW90ZGI=,size_16,color_FFFFFF,t_70,g_se,x_16"
                alt=""
              /> -->
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
                  :style="`width:${boardWidth / 10}px; height: ${boardHeight / 10}px`"
                >
                  <div class="mini-map-inner"></div>
                  <div class="mini-map-select" :style="miniMapSelectStyle"></div>
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
  import { onMounted, reactive, ref, computed, nextTick, watch } from 'vue';
  import { ScaleToOriginal, Plus, Minus, ArrowUp } from '@element-plus/icons-vue';
  import { SketchRule } from 'vue3-sketch-ruler';
  import 'vue3-sketch-ruler/lib/style.css';
  import top from './components/top.vue';
  import left from './components/left.vue';
  import right from './components/right.vue';
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
  const width = ref(null);
  const height = ref(null);
  const boardWidth = ref(1920);
  const boardHeight = ref(1080);
  const miniLeft = ref(0);
  const miniTop = ref(0)
  const container = ref(null);
  const screensRef = ref(null);
  const containerRef = ref(null);
  const canvasRef = ref(null);
  const grab = ref(false);
  const scaleSelectShow = ref(false);
  const miniMapShow = ref(true);
  // const miniLeft = computed(()=>{
  //   if(containerRef.value){
  //     console.log(containerRef.value);
  //     return containerRef.value.getBoundingClientRect().left / 10
  //   }
  // })
  const scale = computed(() => {
    return data.scale / 100;
  });
  const miniMapScale = computed(() => {
    return scale.value > 1 ? 2 - scale.value.toFixed(2) : 1;
  });
  const canvasStyle = computed(() => {
    return {
      width: `${boardWidth.value}px`,
      height: `${boardHeight.value}px`,
      transform: `scale(${scale.value})`,
      cursor: grab.value ? 'grab' : 'default',
    };
  });
  const miniMapSelectStyle = computed(() => {
    return {
      width: `${miniMapScale.value == 1 ? boardWidth.value / 10 : width.value / 10}px`,
      height: `${miniMapScale.value == 1 ? boardHeight.value / 10 : height.value / 10}px`,
      transform: `scale(${miniMapScale.value}) translate(${data.startX / 10}px, ${miniTop.value}px)`
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
      immediate: true
    }
  );
  // 处理画布改变之后标尺辅助线的位置
  const handleBoardChange = () => {
    const screensRect = screensRef.value.getBoundingClientRect();
    const canvasRect = canvasRef.value.getBoundingClientRect();
    // 标尺开始的刻度
    const startX = (screensRect.left + data.thick - canvasRect.left) / scale.value;
    const startY = (screensRect.top + data.thick - canvasRect.top) / scale.value;
    data.startX = startX;
    data.startY = startY;
  };
  // Alt+左键拖拽
  const vDragscroll = {
    mounted: (el) => {
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
      };
      el.onmousedown = function (ev) {
        if (ev.altKey) {
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
    if (e.ctrlKey || e.metaKey) {
      const nextScale = parseFloat(Math.max(0.2, scale.value - e.deltaY / 500).toFixed(2));
      data.scale = parseInt(nextScale * 100);
    }
  };
  const minusScale = () => {
    data.scale = Math.max(20, data.scale - 10);
  };
  const plusScale = () => {
    data.scale = Math.min(200, data.scale + 10);
  };
  const setScale = (e) => {
    data.scale = e;
    scaleSelectShow.value = false
  };
  // 初始画布
  const resetBoard = () => {
    // console.log((width.value * 0.75) / 1920);
    data.scale = parseInt(((width.value * 0.8) / 1920) * 100);
    // 垂直居中滚动条
    // screensRef.value.scrollTop = containerRef.value.clientHeight / 2 - height.value / 2;
    // // screensRef.value.scrollTop = 543
    // // 水平居中滚动条
    // screensRef.value.scrollLeft = containerRef.value.clientWidth / 2 - width.value / 2;
    scaleSelectShow.value = false
  };

  const disableMouseWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
    }
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
  });
</script>

<style lang="less" scoped>
  .low-code-main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #323232;
    color: #eee;
    overflow: hidden;
    &:deep(.corner) {
      // display: none;
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center;
      border-color: #999 !important;
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
                background-color: #000;
              }
              .action{
                .value{
                  display: none;
                }
              }
            }
          }
          .board {
            width: 100%;
            height: calc(100% - 30px);
            background-color: #0a0a0a;
            position: absolute;
            overflow: auto;
            &::-webkit-scrollbar {
              width: 5px;
              height: 5px;
              // display: none;
            }
            &::-webkit-scrollbar,
            &::-webkit-scrollbar-track-piece {
              background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
              border-radius: 5px;
              background-color: rgba(144, 146, 152, 0.3);
            }
            .screen-container {
              position: absolute;
              width: 3840px;
              height: 2160px;
              background: radial-gradient(circle at 1px 1px, #191919 2px, transparent 0);
              background-size: 15px 15px;
              padding: 50px 30px 30px 50px;
              &::after{
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                background-color: #fff;
                position: absolute;
                left: 50%;
                top: 50%;
                transform-origin: center;
                transform: translate(-50%,-50%);
              }
              .canvas {
                position: absolute;
                top: 50px;
                left: 50px;
                transform-origin: left top;
                width: 1920px;
                height: 1080px;
                // margin-top: -540px;
                // margin-left: -960px;
                background-color: #1d1d1d;
                transform: scale(1);
                // background-color: red;
              }
            }
          }
          .bottom-bar {
            width: 100%;
            height: 30px;
            position: absolute;
            background-color: #323232;
            z-index: 4;
            bottom: 0;
            &::after {
              border-top: 1px solid #0a0a0a;
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
                border: 1px solid #0a0a0a;
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
                  background-color: #323232;
                  width: 55px;
                  border: 1px solid #0a0a0a;
                  padding: 2px 0;
                  li {
                    padding: 5px;
                    border-bottom: 1px solid #0a0a0a;
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
                  --el-slider-runway-bg-color: #999;
                  --el-slider-main-bg-color: #0a0a0a;
                }
              }
              .mini-map-show-btn {
                padding: 5px 10px;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: all 0.4s linear;
                color: #999;
                position: relative;
                &:hover {
                  color: #fff;
                }
                .mini-map {
                  background-color: rgba(#0a0a0a, 0.9);
                  position: absolute;
                  bottom: 40px;
                  right: 10px;
                  box-shadow: 0 0 10px #000;
                  display: flex;
                  cursor: default;

                  .mini-map-inner {
                    border: 1px solid rgb(71, 71, 71);
                    width: 75%;
                    height: 75%;
                  }
                  .mini-map-select {
                    border: 1px solid #999;
                    position: absolute;
                    left: 0;
                    top: 0;
                    cursor: move;
                    transform: scale(1);
                  }
                }
              }

              .minus,
              .plus {
                margin: 0 10px;
                cursor: pointer;
                color: #999;
                &:hover {
                  color: #fff;
                }
              }
            }
          }
          .mini-map {
          }
        }
      }
    }
  }
</style>
