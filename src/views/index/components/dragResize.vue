<template>
  <VueDragResizeRotate
    :w="item.w"
    :h="item.h"
    :x="item.x"
    :y="item.y"
    :rotatable="true"
    :parent="true"
    @resizing="resizing"
    @dragstop="onDragStop"
    @rotatestop="onRotateStop"
  >
    <div :style="`width: ${item.w}px;height: ${item.h}px`">
      <slot />
    </div>
  </VueDragResizeRotate>
</template>

<script setup>
  import useIndexStore from '../store';
  const store = useIndexStore();
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
  const item = computed(() => store.projectData[props.pageIndex].chart[props.id]);

  const resizing = (x, y, w, h) => {
    console.log(x, y, w, h);
    item.value.x = Math.ceil(x);
    item.value.y = Math.ceil(y);
    item.value.w = Math.ceil(w);
    item.value.h = Math.ceil(h);
  };
  const onDragStop = (x, y) => {
    console.log(x, y);
    item.value.x = Math.ceil(x);
    item.value.y = Math.ceil(y);
  };
  const onRotateStop = (deg) => {
    item.value.rotation = deg;
  };
</script>
<style lang="less">
  .handle.handle-rot {
    background: none;
    &::after {
      border: 0.25em solid #fff;
      border-left-color: transparent;
      border-top-color: transparent;
    }
    &::before {
      border: 2px solid #fff;
      border-right-color: transparent;
    }
  }
</style>
