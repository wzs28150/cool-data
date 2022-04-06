<template>
  <el-row class="list" :gutter="20">
    <el-col v-for="item in component" type="flex" :span="6">
      <router-link :to="`/demo/${item.name.toLowerCase()}`" class="item">
        <div class="inner">
          <div class="img" :style="`background-image: url(${item.pic});`"></div>{{item.title}}
        </div>
      </router-link>
    </el-col>
  </el-row>
</template>

<script setup>
import { layoutComponents } from "@packages";

const component = layoutComponents.map((item)=>{
  return {
    name: item.name,
    title: item.title,
    pic: item.pic
  }
})
console.log(component);
</script>

<style lang="less" scoped>
.center-title {
  color: #fff;
}
.list {
  width: 100%;
  .item {
    display: block;
    position: relative;
    color: #fff;

    .inner {
      width: 100%;
      height: 100%;
      text-align: center;
      .img {
        width: 100%;
        padding-bottom: 60%;
        background-size: cover;
        background-position: center;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
