<template>
  <el-container
    class="page"
    style="background-image: url('./bg.png');"
  >
    <el-header class="page-header">
      <div class="logo">
        数据可视化组件
      </div>
      <a href="/cool-data/docs">
        <el-icon>
          <document />
        </el-icon>文档
      </a>
    </el-header>
    <el-container>
      <el-aside
        router
        :default-active="$route.path"
        class="page-aside"
        width="200px"
        @select="handleSelect"
      >
        <el-scrollbar style="height: calc(100vh - 60px - 40px); ">
          <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            text-color="#fff"
            background-color="transparent"
            active-text-color="#4fd2dd"
            style="border-right: 0;"
            :unique-opened="true"
          >
            <el-menu-item index="/index">
              <el-icon :size="20">
                <full-screen />
              </el-icon>
              <template #title>
                <span>边框</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/title">
              <el-icon :size="20">
                <house />
              </el-icon>
              <template #title>
                <span>标题</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/moduleTitle">
              <el-icon :size="20">
                <house />
              </el-icon>
              <template #title>
                <span>板块标题</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/decoration">
              <el-icon :size="20">
                <MagicStick />
              </el-icon>
              <template #title>
                <span>装饰器</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/loading">
              <el-icon :size="20">
                <Loading />
              </el-icon>
              <template #title>
                <span>加载</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/layout">
              <el-icon :size="20">
                <Document />
              </el-icon>
              <template #title>
                <span>模板</span>
              </template>
            </el-menu-item>
            <el-sub-menu index="/chart">
              <template #title>
                <el-icon>
                  <pie-chart />
                </el-icon>
                <span>图表</span>
              </template>

              <el-menu-item index="/chart/bar">
                柱状图
              </el-menu-item>
              <el-menu-item index="/chart/mount">
                山峰图
              </el-menu-item>
              <el-menu-item index="/chart/pie">
                饼装图
              </el-menu-item>
              <el-menu-item index="/chart/ring">
                圆环图
              </el-menu-item>
              <el-menu-item index="/chart/jade">
                玉玦图
              </el-menu-item>
              <el-menu-item index="/chart/rose">
                玫瑰图
              </el-menu-item>
              <el-menu-item index="/chart/line">
                折线图
              </el-menu-item>
              <el-menu-item index="/chart/area">
                区域图
              </el-menu-item>
              <el-menu-item index="/chart/scatter">
                散点图
              </el-menu-item>
              <el-menu-item index="/chart/bubble">
                气泡图
              </el-menu-item>
              <el-menu-item index="/chart/radar">
                雷达图
              </el-menu-item>
              <el-menu-item index="/chart/arcbar">
                进度条
              </el-menu-item>
              <el-menu-item index="/chart/gauge">
                仪表盘
              </el-menu-item>
              <el-menu-item index="/chart/funnel">
                漏斗图
              </el-menu-item>
              <el-menu-item index="/chart/word">
                词云图
              </el-menu-item>
              <el-menu-item index="/chart/candle">
                K线图
              </el-menu-item>
              <el-menu-item index="/chart/map">
                地图
              </el-menu-item>
              <el-menu-item index="/chart/waterlevel">
                水位图
              </el-menu-item>
              <el-menu-item index="/chart/rotation">
                轮播
              </el-menu-item>
              <el-menu-item index="/chart/digitalflop">
                数字翻牌器
              </el-menu-item>
              <el-menu-item index="/chart/other">
                其他
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/font">
              <el-icon>
                <paperclip />
              </el-icon>
              <span>字体</span>
            </el-menu-item>
            <el-menu-item index="/color">
              <el-icon>
                <Brush />
              </el-icon>
              <span>颜色</span>
            </el-menu-item>
            <el-sub-menu index="/background">
              <template #title>
                <el-icon>
                  <Monitor />
                </el-icon>
                <span>背景</span>
              </template>

              <el-menu-item index="/background/index">
                背景图
              </el-menu-item>
              <el-menu-item index="/background/canvas">
                背景效果
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main class="page-main">
        <el-scrollbar style="height: calc(100vh - 60px - 40px); width: 100%; ">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { FullScreen, House, MagicStick, Loading, Document, PieChart, Paperclip, Brush, Monitor } from "@element-plus/icons-vue";

const handleSelect = () => {

}
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
      content: "";
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