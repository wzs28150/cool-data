<template>
  <div
    ref="dragResizeDom"
    class="drag-resize active"
    :style="`width: ${item.w}px; height: ${item.h}px; left: ${item.x}px; top: ${item.y}px; transform: rotate(${item.rotation}deg);`"
  >
    <div v-move class="drag-resize-inner">
      <slot />
    </div>
    <div
      v-for="ite in dir"
      :key="ite"
      v-zoom
      :data-dir="ite"
      :class="`resize-handler ${ite}`"
    ></div>
    <div ref="rotateHandler" v-rotate class="rotate-handler"></div>
  </div>
</template>

<script setup>
  import { ref, computed, inject, reactive } from 'vue';
  import Vector from '@minogin/vector';
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
  const dragResizeDom = ref();
  const rotateHandler = ref();
  const roStickSize = 30;
  const state = reactive({
    offsetX: 0,
    offsetY: 0,
  });
  const canvas = inject('canvas');
  const dir = ref(['tl', 'tm', 'tr', 'r', 'br', 'bm', 'bl', 'l']);
  const item = computed(() => store.state.Project.projectData[props.pageIndex].chart[props.id]);

  const vMove = {
    mounted: (el) => {
      el.onmousedown = function (ev) {
        const offsetX = ev.clientX - dragResizeDom.value.offsetLeft;
        const offsetY = ev.clientY - dragResizeDom.value.offsetTop;
        document.onmousemove = function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
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
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  };

  const vRotate = {
    mounted: (el) => {
      el.onmousedown = function (ev) {
        const offsetX = ev.clientX - rotateHandler.value.offsetLeft;
        const offsetY = ev.clientY - rotateHandler.value.offsetTop;
        let rotation = item.value.rotation;
        document.onmousemove = function (ev) {
          console.log(ev);
          ev.preventDefault();
          ev.stopPropagation();
          let delta = new Vector(ev.clientX, ev.clientY);
          let up = new Vector(0, -item.value.h / 2 - roStickSize);
          let rotationRad = Vector.rad(rotation);
          console.log(rotationRad);
          up = up.rotate(rotationRad);
          let v = up.add(delta);
          store.dispatch('Project/setChartParam', {
            index: props.id,
            pageIndex: props.pageIndex,
            rotation: Vector.deg(v.angle()),
          });
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  };

  const vZoom = {
    mounted: (el) => {
      el.onmousedown = function (ev) {
        const offsetX = ev.clientX - dragResizeDom.value.offsetLeft;
        const offsetY = ev.clientY - dragResizeDom.value.offsetTop;
        document.onmousemove = function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          console.log(el.dataset.dir);
          let left = ev.clientX - offsetX;
          let top = ev.clientY - offsetY;
          switch (el.dataset.dir) {
            case 'r':
              store.dispatch('Project/setChartParam', {
                index: props.id,
                pageIndex: props.pageIndex,
                w: left - rotateHandler.value.offsetLeft,
              });
              break;
            case 'l':
              store.dispatch('Project/setChartParam', {
                index: props.id,
                pageIndex: props.pageIndex,
                w: item.value.w + dragResizeDom.value.offsetLeft - ev.clientX,
                x: ev.clientX
              });
              break;
            case 'tm':
              store.dispatch('Project/setChartParam', {
                index: props.id,
                pageIndex: props.pageIndex,
                h: item.value.h + dragResizeDom.value.offsetTop - ev.clientY,
                y: ev.clientY
              });
              break;
            case 'bm':
              store.dispatch('Project/setChartParam', {
                index: props.id,
                pageIndex: props.pageIndex,
                h: top - rotateHandler.value.offsetTop,
              });
              break;
            case 'tl':
              // ok
              store.dispatch('Project/setChartParam', {
                index: props.id,
                pageIndex: props.pageIndex,
                w: dragResizeDom.value.clientWidth + dragResizeDom.value.offsetLeft - left,
                h: dragResizeDom.value.clientHeight + dragResizeDom.value.offsetTop - top,
                x: left,
                y: top
              });
              break;
            case 'tr':
              console.log(ev.clientX);
              store.dispatch('Project/setChartParam', {
                index: props.id,
                pageIndex: props.pageIndex,
                w: left - dragResizeDom.value.offsetLeft - item.value.x,
                h: dragResizeDom.value.clientHeight + dragResizeDom.value.offsetTop - top,
                y: top
              });
              break;
            default:
              break;
          }
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  };

  // const moveStart = (ev) => {
  //   ev.preventDefault();
  //   state.offsetX = ev.clientX - dragResizeDom.value.offsetLeft;
  //   state.offsetY = ev.clientY - dragResizeDom.value.offsetTop;
  // };
  // const moveing = (ev) => {
  //   ev.preventDefault();
  //   let left = ev.clientX - state.offsetX;
  //   let top = ev.clientY - state.offsetY;
  //   let right = left + item.value.w;
  //   let bottom = top + item.value.h;
  //   left = left <= 0 ? 0 : left; // 左越界
  //   top = top <= 0 ? 0 : top; // 上越界
  //   if (right >= canvas.width) {
  //     left = canvas.width - item.value.w; // 右越界
  //   }

  //   if (bottom >= canvas.height) {
  //     top = canvas.height - item.value.h; // 下越界
  //   }
  //   store.dispatch('Project/setChartParam', {
  //     index: props.id,
  //     pageIndex: props.pageIndex,
  //     x: left,
  //     y: top,
  //   });
  // };
  // const moveend = () =>{
  //   dragResizeDom.value.onmousemove = null;
  //   dragResizeDom.value.onmouseup = null;
  // }
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
