<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in components" :key="index" :span="24">
      <div class="item" :style="`height:${item.height}px`">
        <div class="inner">
          <component :is="item" titleWidth="300" title="国网黑龙江供应链运营中心" ></component>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { decorationComponents } from "../../components/lib";
console.log(decorationComponents);
export default {
  data() {
    return {
      components: []
    }
  },
  mounted() {
    this.components = decorationComponents
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
      & > div {
        width: 100%;
        margin: 0 auto;
      }
      .loading-text {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .copy {
          cursor: pointer;
          .item-title {
            color: rgb(66, 185, 131);
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .copy-tip {
            color: #4fd2dd;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
