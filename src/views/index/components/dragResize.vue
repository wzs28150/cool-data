<template>
  <div
    class="drag-resize active"
    :style="`width: ${item.w}px; height: ${item.h}px; left: ${item.x}px; top: ${item.y}px;`"
    ref="dragResizeDom"
    @mousedown="onmousedown"
  >
    <div class="drag-resize-inner">
      <slot />
    </div>
    <div v-for="ite in dir" :key="ite" :class="`resize-handler ${ite}`"></div>
    <div class="rotate-handler" @mouseenter.stop="state = 'rotate'"></div>
  </div>
</template>

<script setup>
  import { ref, computed, inject, reactive } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const props = defineProps({
    id: {
      type: Number,
      default: null,
    },
    pageIndex: {
      type: Number,
      default: 0,
    },
  });
  const dragResizeDom = ref()
  const state = ref('move');
  const canvas = inject('canvas');
  const dir = ref(['tl', 'tm', 'tr', 'r', 'br', 'bm', 'bl', 'l']);
  const item = computed(() => store.state.Project.projectData[props.pageIndex].chart[props.id]);

  const vMove = {
    mounted: (el) => {
      el.onmousedown = function (ev) {
        console.log(state);
        const offsetX = ev.clientX - el.offsetLeft;
        const offsetY = ev.clientY - el.offsetTop;
        document.onmousemove = function (ev) {
          ev.preventDefault();
          if (state.value == 'move') {
            let left = ev.clientX - offsetX;
            let top = ev.clientY - offsetY;
            let right = left + item.value.w;
            let bottom = top + item.value.h;
            left = left <= 0 ? 0 : left; // 左越界
            top = top <= 0 ? 0 : top; // 上越界
            if (right >= canvas.width) {
              left = canvas.width - item.value.w; // 右越界
            }

            if (bottom >= canvas.height) {
              top = canvas.height - item.value.h; // 下越界
            }
            store.dispatch('Project/setChartParam', {
              index: props.id,
              pageIndex: props.pageIndex,
              x: left,
              y: top,
            });
          } else if(state.value == 'rotate'){

          }
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  };
  const onmousedown = (e) => {
    console.log(dragResizeDom.value.offsetLeft);
  }
  const setActive = () => {};
  const rotateStart = (e) => {
    console.log(e);
    e.preventDefault();
  };
</script>
<style lang="less">
  .drag-resize {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, 0);
    &.active {
      border: 1px dashed #eee;
    }

    .drag-resize-inner {
      cursor: move;
      width: 100%;
      height: 100%;
    }
    .resize-handler {
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #fff;
      &.tl {
        left: 0;
        top: 0;
        transform: translate(-3px, -3px);
        cursor: nw-resize;
      }
      &.tm {
        left: 50%;
        top: 0;
        transform: translate(-50%, -3px);
        cursor: n-resize;
      }
      &.tr {
        right: 0;
        top: 0;
        transform: translate(3px, -3px);
        cursor: nesw-resize;
      }
      &.l {
        left: 0;
        top: 50%;
        transform: translate(-3px, -50%);
        cursor: e-resize;
      }
      &.r {
        right: 0;
        top: 50%;
        transform: translate(3px, -50%);
        cursor: e-resize;
      }
      &.bl {
        left: 0;
        bottom: 0;
        transform: translate(-3px, 3px);
        cursor: nesw-resize;
      }
      &.bm {
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 3px);
        cursor: n-resize;
      }
      &.br {
        right: 0;
        bottom: 0;
        transform: translate(3px, 3px);
        cursor: nw-resize;
      }
    }
    .rotate-handler {
      width: 10px;
      height: 30px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 30px;
        border-left: 1px dashed #eee;
        position: absolute;
        left: 50%;
        bottom: 0;
      }

      &::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 100%;
        cursor: move;
      }
    }
  }
</style>
