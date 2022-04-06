<template>
  <el-row class="list" :gutter="20">
    <el-col
      type="flex"
      v-for="(item, index) in backgroundComponents[0]['list']"
      :key="index"
      :span="6"
    >
      <div class="item">
        <div class="inner">
          <el-image
            style="width: 100%; height: 100%"
            :src="item"
            :preview-src-list="backgroundComponents[0]['list']"
            lazy
          >
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
          <div class="inner-bar">
            <div class="id">ID: {{ index }}</div>
            <div class="inner-bar-download" @click="downloadImg(item, 'bg.jpg')">
              <el-icon>
                <download />
              </el-icon>图片下载
            </div>
            <div
              class="inner-bar-download copy"
              :data-clipboard-text="`<background :img=''></background>`"
              @click="copy"
            >
              <el-icon>
                <document-copy />
              </el-icon>复制代码
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { backgroundComponents } from "@packages";
import { DocumentCopy, Download } from "@element-plus/icons-vue";
import Clipboard from "clipboard";

const downloadImg = (url, name) => {
  const ele = document.createElement("a");
  ele.setAttribute("href", url);
  ele.setAttribute("download", name);
  ele.style.display = "none";
  document.body.appendChild(ele);
  ele.click();
  document.body.removeChild(ele);
}

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
.list {
  width: 100%;
  .item {
    position: relative;
    margin-bottom: 20px;
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
      .inner-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background-color: rgba(#eee, 0.5);
        font-size: 14px;
        line-height: 40px;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .id {
          margin-right: auto;
          margin-left: 10px;
          font-weight: bold;
        }
        .inner-bar-download {
          cursor: pointer;
          padding-right: 10px;
          display: flex;
          align-items: center;
          i {
            padding-right: 5px;
          }
        }
      }
    }
  }
}
</style>