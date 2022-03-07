<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" :span="6">
      <router-link :to="'/layout_info'" class="item">
        <div class="inner">
          <img src="/img/layout1.jpg" alt />
          模板布局1
        </div>
      </router-link>
    </el-col>
    <el-col type="flex" :span="6">
      <router-link :to="'/layout_info'" class="item">
        <div class="inner">
          <img src="/img/layout2.jpg" alt />
          模板布局2
        </div>
      </router-link>
    </el-col>
    <el-col type="flex" :span="6">
      <router-link :to="'/layout_info'" class="item">
        <div class="inner">
          <img src="/img/layout3.jpg" alt />
          模板布局3
        </div>
      </router-link>
    </el-col>
    <el-col type="flex" :span="6">
      <router-link :to="'/layout_info'" class="item">
        <div class="inner">
          <img src="/img/layout4.jpg" alt />
          模板布局4
        </div>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
import { layoutComponents } from "../../components/lib";
export default {
  data() {
    return {
      components: []
    }
  },
  mounted() {
    this.components = layoutComponents
  },
  methods: {
    copy() {
      var clipboard = new this.Clipboard('.copy');
      clipboard.on('success', () => {
        this.$message({
          message: '复制成功',
          type: 'success'
        });
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    },
  }
}
</script>

<style lang="less" scoped>
.center-title {
  color: #fff;
}
.list {
  width: 100%;
  .item {
    display: block;
    position: relative;
    color: #fff;
    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-bottom: 60%;
    }
    .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
      img {
        display: block;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
