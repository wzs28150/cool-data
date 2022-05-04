<template>
  <div class="top">
    <el-row class="top-inner" align="middle">
      <el-col :span="2"><div class="logo">可视化大屏</div></el-col>
      <el-col :span="2"><el-input v-model="input" placeholder="请输入项目名称" /></el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const input = ref('新建项目');
</script>
<style lang="less" scoped>
  .top {
    height: 40px;
    position: relative;
    background-color: #323232;
    z-index: 6;
    &::after {
      border-bottom: 1px solid #0a0a0a;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }
    .top-inner {
      position: relative;
      z-index: 1;
      height: 100%;
      .logo{
        font-weight: bold;
        font-size: 20px;
        padding-left: 10px;
        line-height: 40px;
      }
      &:deep(.el-input) {
        .el-input__inner {
          background-color: #323232;
          box-shadow: none;
          color: #ccc;
          &:hover, &:focus{
            background-color: #3a3a3a;
          }
        }
      }
    }
  }
</style>
