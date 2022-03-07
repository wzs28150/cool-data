<template>
  <div class="color">
    <el-row class="item" :gutter="20" v-for="(item, index) in list" :key="index">
      <el-col :span="2" v-for="(it, ind) in item" :key="ind">
        {{ it.name }}
        <template v-if="typeof (it.color) == 'object'">
          <div class="color-show">
            <div
              class="color-show-item"
              v-for="colorIt in it.color"
              :key="colorIt"
              :style="'background-color: ' + colorIt + ';'"
            ></div>
          </div>
        </template>

        <div v-else class="color-show">
          <div class="color-show-item" :style="'background-color: ' + it.color + ';'"></div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: {
            color: "#446083",
            name: "标题"
          },
          base: {
            color: "#fff",
            name: "基础文字"
          },
          axis: {
            color: "#7f9bbd",
            name: "坐标轴"
          },
          mapBg: {
            color: "#c2e1f5",
            name: "地图背景"
          },
          chart: {
            color: ["#ff7c14", "#fffe97", "#0287fd", "#ff4f5a"],
            name: "图表"
          }
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.color {
  width: 100%;
  .item {
    color: #fff;
    text-align: center;
    width: 100%;
    .color-show {
      margin: 10px auto;
      display: flex;
      justify-content: center;
      .color-show-item {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin: 0 2px;
      }
    }
  }
}
</style>