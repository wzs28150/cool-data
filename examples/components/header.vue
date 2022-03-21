<template>
  <header>
   
  </header>
</template>

<style lang="less" scoped>
header {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  background-image: linear-gradient(to bottom, rgba(6, 30, 93, 0.5), rgba(6, 30, 93, 0));
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