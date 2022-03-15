<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in components" :key="index" :span="24">
      <div class="item" :style="`height:${item.height}px`">
        <div class="inner">
          <component :is="item" title="大屏数据平台界面标题"></component>
          <div class="hover" :data-clipboard-text="`<${item.name} title='大屏数据平台界面标题' >内容</${item.name}>`"
              @click="copy">
            <div
              class="copy"
            >
              <div class="item-title">{{ item.name }}</div>
              <div class="copy-tip">
                点击复制代码
                <i class="el-icon-document-copy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { titleComponents } from "../../components/lib";
console.log(titleComponents);
export default {
  data() {
    return {
      components: []
    }
  },
  mounted() {
    this.components = titleComponents
  },
  methods: {
    copy() {
      var clipboard = new this.Clipboard('.hover');
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
.list {
  width: 100%;
  .item {
    position: relative;
    margin-bottom: 20px;
    .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      & > div {
        width: 100%;
        margin: 0 auto;
      }
      .hover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(6, 30, 93, 0.8);
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .item-title {
            color: rgb(66, 185, 131);
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .copy-tip {
            color: #4fd2dd;
            font-size: 14px;
            i {
              margin-left: 5px;
            }
          }
      }

      &:hover {
        .hover {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}
</style>
