<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in components" :key="index" :span="6">
      <div class="item">
        <div class="inner">
          <component :is="item">
            <div
              class="copy"
              :data-clipboard-text="'<' + item.name + '>加载中。。。</' + item.name + '>'"
              @click="copy"
            >
              <div class="item-title">{{ item.name }}</div>
              <div class="copy-tip">点击复制代码</div>
            </div>
          </component>
        </div>
      </div>
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
.list {
  width: 100%;
  .item {
    position: relative;
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
      & > div {
        width: 30%;
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
