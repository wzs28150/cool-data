<template>
  <el-row class="list" :gutter="20">
    <el-col type="flex"  v-for="(item, index) in component" :key="index" :span="12">
      <div class="item" >
        <div class="inner">
          <component :is="item.name" ></component>
          <div class="hover" :data-clipboard-text="`<${item.name} :fullScreen='true' color='#ffffff' >内容</${item.name}>`"
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


<script setup>
import { backgroundComponents } from "@packages";
const component = backgroundComponents.filter((item)=>{
  return item.name != "Background"
}).map((item)=>{
  return {
    name: item.name,
    reverse: item.props.reverse?item.props.reverse:false
  }
})
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
      background-color: #03183b;
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