<template>
  <el-row
    class="list"
    :gutter="20"
  >
    <el-col
      :key="index"
      type="flex"
      :span="6"
    >
      <div class="item">
        <div class="inner" />
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { Theme } from "@packages";
import Clipboard from "clipboard";
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
const { easyv } = Theme;
const router = useRouter()
const num = ref(123.44)

// const component = computed(() => {
//   let componentArr = []
//   Object.keys(chartComponents).map((item) => {
//     if (chartComponents[item].type == router.currentRoute.value.params.type) {
//       componentArr.push({
//         name: chartComponents[item].name,
//         type: chartComponents[item].type,
//         title: chartComponents[item].title
//       })
//     }
//   })
//   return componentArr
// })

// const component = computed(() => {
//   return Object.keys(chartComponents).filter((item) => {
//     return item.type == router.currentRoute.value.params.type
//   }).map((item) => {
//     return {
//       name: item.name,
//       type: item.type,
//       title: item.title
//     }
//   })
// })
// console.log(router.currentRoute.value.params.type);
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

const changeNum = () => {
  num.value = Math.ceil(Math.random() * 10000) + '.' + Math.ceil(Math.random() * 100);
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
      box-sizing: border-box;
      overflow: hidden;

      &>div {
        width: 100%;
        margin: 0 auto;
      }

      .digitalflopclick {
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        cursor: pointer;
        text-align: right;
        padding: 10px;
        font-size: 14px;
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
