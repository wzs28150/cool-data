<template>
  <el-row class="list" :gutter="20">
    <el-col :key="index" type="flex" :span="6">
      <div class="item">
        <div class="inner">
          <chart :horizontal="horizontal" :dataset="dataset">
            <Title text="我是标题" />
            <XAxis type="category" />
            <YAxis />
            <Bar name="系列1" />
            <Bar name="系列2" />
            <Bar name="系列2" />
            <Line name="系列3" :dataset-index="1" />
            <div class="change" @click="change">
              切换
            </div>
          </chart>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';
const horizontal = ref(false)
const dataset = ref([
  {
    dimensions: ["product", "系列1", "系列2", "系列3"],
    source: [
      { product: "类别1", 系列1: 43.3, 系列2: 143.3, 系列3: 223.3 },
      { product: "类别2", 系列1: 83.1, 系列2: 243.3, 系列3: 343.3 },
      { product: "类别3", 系列1: 86.4, 系列2: 203.3, 系列3: 143.3 },
      { product: "类别4", 系列1: 72.4, 系列2: 343.3, 系列3: 113.3 }
    ]
  },
  {
    transform: {
      type: 'filter',
      config: { dimension: '系列3', '>': 200 }
    }
  }
])

const change = () =>{
  horizontal.value = !horizontal.value
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

    .change{
      position: absolute;
      color: #fff;
      z-index: 55;
      right: 0;
      top: 0;
      cursor: pointer;
    }

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
