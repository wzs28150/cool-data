<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex" v-for="(item, index) in component" :key="index" :span="8">
      <div class="item">
        <div class="inner">
          <component
            :is="item.name"
            :btnList="item.btnList"
            title="全年数据统计分析"
            en="Statistical analysis of annual data"
          >
            <div
              class="copy"
              :data-clipboard-text="`<${item.name} color='' backgroundColor=''>`"
              @click="copy"
            >
              <div class="item-title">{{ item.name }}</div>
              <div class="copy-tip">
                点击复制代码
                <el-icon>
                  <document-copy />
                </el-icon>
              </div>
            </div>
            <template #icon>
              <el-icon>
                <pie-chart />
              </el-icon>
            </template>
          </component>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { moduleTitleComponents } from "@packages";
import Clipboard from "clipboard";
import { DocumentCopy,PieChart } from "@element-plus/icons-vue";
const component = Object.keys(moduleTitleComponents).map((item) => {
  return {
    name: moduleTitleComponents[item].name,
    btnList: moduleTitleComponents[item].mock.btnList,
  }
})
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
      padding-bottom: 60px;
    }
    .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
     &:deep(.module-title) {
        width: 100%;
      }
    }
  }
}
</style>