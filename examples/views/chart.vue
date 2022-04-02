<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in components" :key="index" :span="6">
      <div class="item" v-if="item.type == $route.params.type">
        <div class="inner">
          <component :is="item" :option="item.config" :theme="theme"></component>
          <div
            class="copy"
            :data-clipboard-text="`<${item.name} :dataset='' :theme='' :option='' />`"
            @click="copy"
          >
            <div class="item-title">{{ item.title }}</div>
            <div class="copy-tip">点击复制代码</div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { chartComponents } from "../../components/lib";
import { Theme } from "../../components/lib/index";
const { easyv } = Theme;
export default {
  data() {
    return {
      components: [],
      theme: easyv
    }
  },
  mounted() {
    this.components = chartComponents
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
    background-color: rgba(6, 30, 93, 0.5);
    margin-bottom: 20px;
    overflow: hidden;
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
    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-bottom: 80%;
    }
    .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding-bottom: 40px;
      overflow: hidden;
      & > div {
        width: 100%;
        margin: 0 auto;
      }
      .copy {
        cursor: pointer;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 20px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(6, 30, 93, 0.9);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        text-align: center;
        // opacity: 0;
        // visibility: hidden;
        transition: all 0.4s;
        .item-title {
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          // margin-bottom: 10px;
        }
        .copy-tip {
          color: #fff;
          font-size: 14px;
        }
      }

      &:hover {
        .copy {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}
</style>
