<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in component" :key="index" :span="6">
      <div class="item" v-if="item.type == $route.params.type">
        <div class="inner">
          <component :is="item.name" :theme="easyv"></component>
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

<script setup>
import { chartComponents, Theme } from "@packages";
import { useRouter } from 'vue-router';
import { computed } from 'vue';
const { easyv } = Theme;
const router = useRouter()
const component = computed(() => {
  return chartComponents.filter((item) => {
    return item.type == router.currentRoute.value.params.type
  }).map((item) => {
    return {
      name: item.name,
      type: item.type,
      title: item.title
    }
  })
})
// console.log(router.currentRoute.value.params.type);
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
      box-sizing: border-box;
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
        box-sizing: border-box;
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
