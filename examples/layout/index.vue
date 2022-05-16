<template>
  <el-container class="page" style="background-image: url('./bg.png')">
    <el-header class="page-header">
      <div class="logo">数据可视化组件</div>
      <a href="/cool-data/docs">
        <el-icon> <document /> </el-icon>文档
      </a>
    </el-header>
    <el-container>
      <el-aside class="page-aside" width="200px" @select="handleSelect">
        <el-scrollbar style="height: calc(100vh - 60px - 40px)">
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            text-color="#fff"
            background-color="transparent"
            active-text-color="#4fd2dd"
            style="border-right: 0"
            :default-openeds="['/chart']"
          >
            <el-sub-menu index="/chart">
              <template #title>
                <el-icon>
                  <pie-chart />
                </el-icon>
                <span>图表</span>
              </template>

              <el-menu-item index="/chart/bar" route> 柱状图 </el-menu-item>
              <el-menu-item index="/chart/mount"> 山峰图 </el-menu-item>
              <el-menu-item index="/chart/line"> 折线图 </el-menu-item>
              <el-menu-item index="/chart/pie"> 饼形图 </el-menu-item>

              <el-menu-item index="/chart/radar"> 雷达图 </el-menu-item>
              <el-menu-item index="/chart/gauge"> 仪表盘 </el-menu-item>
              <el-menu-item index="/chart/waterlevel"> 水位图 </el-menu-item>
              <el-menu-item index="/chart/rotation"> 轮播 </el-menu-item>
              <el-menu-item index="/chart/digitalflop">
                数字翻牌器
              </el-menu-item>
              <el-menu-item index="/chart/other"> 其他 </el-menu-item>
            </el-sub-menu>

            <el-menu-item index="/color">
              <el-icon>
                <Brush />
              </el-icon>
              <span>颜色</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main class="page-main">
        <el-scrollbar style="height: calc(100vh - 60px - 40px); width: 100%">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { Document, PieChart, Brush } from '@element-plus/icons-vue';

const handleSelect = () => {};
</script>
<style lang="less">
html {
  overflow: hidden;
}
.page {
  background-color: #081325;

  background-size: cover;
  height: 100vh;
  .page-header {
    color: #4fd2dd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .logo {
      // font-weight: bold;
      letter-spacing: 5px;
      font-family: shishang;
      font-size: 28px;
      line-height: 1em;
    }
    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      line-height: 60px;
      i {
        margin-right: 5px;
      }
    }
  }
  .page-aside {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% - 1px);
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }
    .el-menu-item {
      &.is-active {
        background-color: rgba(6, 30, 93, 0.8);
      }
    }
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
