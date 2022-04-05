<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in component" :key="index" :span="6">
      <div class="item">
        <div class="inner">
          <component :is="item.name">
            <div
              class="copy"
              :data-clipboard-text="'<' + item.name + '>加载中。。。</' + item.name + '>'"
              @click="copy"
            >
              <div class="item-title">{{ item.name }}</div>
              <div class="copy-tip">
                点击复制代码
                <i class="el-icon-document-copy"></i>
              </div>
            </div>
          </component>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { loadingComponents } from "@packages";

const component = loadingComponents.map((item) => {
  return {
    name: item.name
  }
})
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  .item {
    position: relative;
    background-color: rgba(6, 30, 93, 0.5);
    margin-bottom: 20px;
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
      &:deep(.loading-text) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .copy {
          cursor: pointer;
          .item-title {
            color: rgb(66, 185, 131);
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .copy-tip {
            color: #4fd2dd;
            font-size: 12px;
            padding-bottom: 20px;
            i {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>