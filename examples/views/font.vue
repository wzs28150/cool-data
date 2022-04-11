<template>
  <div class="font">
    <div class="title">字体</div>
    <el-row :gutter="20">
      <el-col class="font-item" v-for="(item, index) in fontList" :key="index" :span="6">
        <div class="item copy" :data-clipboard-text="item" @click="copy">
          <div :class="'font-show ' + item">
            123456
            <br />ABCDEF
          </div>
          <div class="font-title">
            {{ item }}
            <el-icon><document-copy /></el-icon>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Clipboard from "clipboard";
import { DocumentCopy } from "@element-plus/icons-vue";

const fontList = ref([
  'acens',
  'avenir-next',
  'igital-7',
  'din',
  'segoeui',
  'ds-digital'
])
const copy = () => {
  const clipboard = new Clipboard('.copy');
  clipboard.on('success', () => {
    ElMessage({
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
}
</script>

<style lang="less" scoped>
.font {
  color: #fff;
  .title {
    margin-bottom: 20px;
  }

  .font-item {
    text-align: center;
    margin-bottom: 20px;
    .item {
      background-color: rgba(6, 30, 93, 0.5);
      padding: 50px 0;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }
      .font-show {
        font-size: 26px;
        line-height: 26px;
        color: #4fd2dd;
      }
      .font-title {
        margin-top: 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
          cursor: pointer;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
