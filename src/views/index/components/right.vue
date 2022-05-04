<template>
  <div class="right">
    <div class="right-inner"> right </div>
  </div>
</template>

<style lang="less" scoped>
  .right {
    width: 244px;
    height: 100%;
    position: relative;
    &::after {
      border-left: 1px solid #0a0a0a;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }
    .right-inner {
      position: relative;
      z-index: 1;
    }
  }
</style>
