<template>
  <div class="keybord-list">
    <div class="keybord-item">
      <div class="keybord-title">画布放大</div>
      <div class="key"> <span>Ctrl</span><i>+</i><span>鼠标滚轮</span> </div>
    </div>
    <div class="keybord-item">
      <div class="keybord-title">画布移动</div>
      <div class="key"> <span>空格</span><i>+</i><span>鼠标左键</span> </div>
    </div>
    <div class="keybord-item">
      <div class="keybord-title">画布恢复</div>
      <div class="key"> <span>Ctrl</span><i>+</i><span>0</span> </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .keybord-list {
    padding: 20px;
    .keybord-item {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      .keybord-title {
        line-height: 24px;
      }
      span {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 5px;
        background: #292929;
        border-radius: 2px;
        text-align: center;
      }
      i {
        padding: 0 5px;
        font-style: normal;
      }
    }
  }
</style>
