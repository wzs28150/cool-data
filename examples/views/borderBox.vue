<template>
  <el-row class="list" :gutter="20">
    <el-col v-for="(item, index) in component" :key="index" :span="6">
      <div class="item">
        <div class="inner">
          <component :is="item.name" backgroundColor="rgba(6, 30, 93, 0.5)">
            <div class="copy"
              :data-clipboard-text="`<${item.name} color='' backgroundColor='' ${item.reverse ? 'reverse=\'true\'' : ''}>内容</${item.name}>`"
              @click="copy">
              <div class="item-title">{{ item ? item.name : '丢' }}</div>
              <div class="copy-tip">
                点击复制代码
                <el-icon>
                  <document-copy />
                </el-icon>
              </div>
            </div>
          </component>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { borderBoxComponents } from "@packages";
import Clipboard from "clipboard";
import { DocumentCopy } from "@element-plus/icons-vue";

const component = Object.keys(borderBoxComponents).map((item) => {
  return {
    name: borderBoxComponents[item].name,
    reverse: borderBoxComponents[item].props.reverse ? borderBoxComponents[item].props.reverse : false
  }
})
// console.log(component);
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

      &:deep(.border-box-content) {
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