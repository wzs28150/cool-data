<template>
  <header>
    <decoration-3 class="header-left-decoration" />
    <decoration-2 class="header-center-decoration" />
    <decoration-3 class="header-right-decoration" :reverse="true" />
    <div class="title">系统平台</div>
  </header>
</template>

<style lang="less" scoped>
header {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: rgba(6, 30, 93, 0.5);
  .header-center-decoration {
    width: 40%;
    height: 50px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 50px;
  }
  .title {
    text-align: center;
    color: #fff;
    line-height: 60px;
    position: absolute;
    font-weight: bold;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>