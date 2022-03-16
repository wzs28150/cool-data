<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in list" :key="index" :span="6">
      <div class="item">
        <div class="inner">
          <el-image style="width: 100%; height: 100%" :src="item" :preview-src-list="list" lazy>
            <div slot="placeholder" class="image-slot">
              加载中
              <span class="dot">...</span>
            </div>
          </el-image>
          <div class="inner-bar">
            <div class="inner-bar-download" @click="download(item, 'bg.jpg')">
              <i class="el-icon-download"></i>图片下载
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { list } from '../../components/lib/background/index';
export default {
  data() {
    return {
      list: list
    }
  },
  mounted() {

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
    download(url, name){
      const ele = document.createElement("a");
      ele.setAttribute("href", url);
      ele.setAttribute("download", name);
      ele.style.display = "none";
      document.body.appendChild(ele);
      ele.click();
      document.body.removeChild(ele);
    }
  }
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
      .inner-bar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background-color: rgba(#eee,0.5);
        font-size: 14px;
        line-height: 40px;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .inner-bar-download{
          cursor: pointer;
          padding-right: 10px;
          // display: flex;
          i{
            padding-right: 5px;
          }
        }
      }
    }
  }
}
</style>