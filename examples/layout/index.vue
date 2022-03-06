<template>
  <el-container class="page">
    <el-header class="page-header">
      <div class="logo">数据可视化组件</div>
    </el-header>
    <el-container>
      <el-aside router class="page-aside" @select="handleSelect" width="200px">
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="#fff"
          background-color="transparent"
          active-text-color="#4fd2dd"
          style="border-right: 0;"
        >
          <el-menu-item index="/index">
            <i class="el-icon-full-screen"></i>
            <span slot="title">边框</span>
          </el-menu-item>
          <el-menu-item index="/decoration">
            <i class="el-icon-magic-stick"></i>
            <span slot="title">装饰器</span>
          </el-menu-item>
          <el-menu-item index="/loading">
            <i class="el-icon-loading"></i>
            <span slot="title">加载</span>
          </el-menu-item>
          <el-menu-item index="/layout">
            <i class="el-icon-document"></i>
            <span slot="title">模板</span>
          </el-menu-item>
          <el-menu-item index="/chart">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">图表</span>
          </el-menu-item>
          <el-menu-item index="/font">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">字体</span>
          </el-menu-item>
          <el-menu-item index="/color">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">颜色</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="page-main">
        <el-scrollbar style="height: calc(100vh - 60px - 40px); width: 100%; ">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less">
.page {
  background-color: #081325;
  background-image: url('/bg.png');
  background-size: cover;
  height: 100vh;
  .page-header {
    color: #4fd2dd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .logo {
      font-weight: bold;
      font-size: 28px;
      line-height: 1em;
    }
  }
  .page-aside {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% - 1px);
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
